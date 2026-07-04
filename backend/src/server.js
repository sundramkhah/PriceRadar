import { createApp } from './app.js';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
import { startCleanCacheJob } from './jobs/cleanCache.job.js';
import { startRefreshPricesJob } from './jobs/refreshPrices.job.js';

const startServer = async () => {
  try {
    await connectDb();
    const app = createApp();

    app.listen(env.port, () => {
      logger.info(`API running on http://localhost:${env.port}`);
    });

    startCleanCacheJob();
    startRefreshPricesJob();
  } catch (error) {
    logger.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
