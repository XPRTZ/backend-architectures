import express from 'express';
import { appConfig } from '../config/app.config';
import { errorHandler } from '../../shared/middleware/errorHandler';
import { requestLogger } from '../../shared/middleware/requestLogger';

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  // Register routes here

  app.use(errorHandler);

  return app;
};
