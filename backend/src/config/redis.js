import Redis from 'ioredis';
import { env } from './env.js';
import { logger } from './logger.js';

let redisClient = null;

export const getRedisClient = () => {
  if (!env.redisUrl) return null;
  if (!redisClient) {
    redisClient = new Redis(env.redisUrl, {
      lazyConnect: true,
      maxRetriesPerRequest: 1,
      enableOfflineQueue: false
    });

    redisClient.on('error', (error) => {
      logger.warn(`Redis unavailable, falling back to memory cache: ${error.message}`);
    });
  }
  return redisClient;
};
