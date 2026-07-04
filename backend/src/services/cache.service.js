import { env } from '../config/env.js';
import { getRedisClient } from '../config/redis.js';

const memoryCache = new Map();

const isExpired = (entry) => entry.expiresAt <= Date.now();

export const cacheService = {
  async get(key) {
    const redis = getRedisClient();
    if (redis) {
      try {
        if (redis.status === 'wait') await redis.connect();
        const value = await redis.get(key);
        return value ? JSON.parse(value) : null;
      } catch {
        // Memory cache is the deliberate fallback when Redis is not reachable.
      }
    }

    const entry = memoryCache.get(key);
    if (!entry || isExpired(entry)) {
      memoryCache.delete(key);
      return null;
    }
    return entry.value;
  },

  async set(key, value, ttlSeconds = env.cacheTtlSeconds) {
    const redis = getRedisClient();
    if (redis) {
      try {
        if (redis.status === 'wait') await redis.connect();
        await redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
        return;
      } catch {
        // Fall through to memory cache.
      }
    }

    memoryCache.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
  },

  async clearExpiredMemoryEntries() {
    for (const [key, entry] of memoryCache.entries()) {
      if (isExpired(entry)) memoryCache.delete(key);
    }
  }
};
