import { createApp } from './app';
import { appConfig } from './config/app.config';
import { logger } from '../shared/utils/logger';

const startServer = async () => {
  const app = createApp();

  app.listen(appConfig.port, () => {
    logger.info(`Server is running on port ${appConfig.port}`);
  });
};

startServer().catch((error) => {
  logger.error('Failed to start server', { error });
  process.exit(1);
});
