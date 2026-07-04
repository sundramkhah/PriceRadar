import cron from 'node-cron';
import { logger } from '../config/logger.js';

export const startRefreshPricesJob = () => {
  cron.schedule('0 */6 * * *', () => {
    logger.info('Scheduled price refresh placeholder executed');
  });
};
