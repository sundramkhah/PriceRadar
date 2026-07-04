import cron from 'node-cron';
import { cacheService } from '../services/cache.service.js';
import { logger } from '../config/logger.js';

export const startCleanCacheJob = () => {
  cron.schedule('*/10 * * * *', async () => {
    await cacheService.clearExpiredMemoryEntries();
    logger.info('Expired memory cache entries cleaned');
  });
};
