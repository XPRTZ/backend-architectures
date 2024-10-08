import { AppConfig } from '../shared/types/config';

export const appConfig: AppConfig = {
  port: parseInt(process.env.PORT || '3000', 10),
  environment: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
  logLevel: (process.env.LOG_LEVEL as 'error' | 'warn' | 'info' | 'debug') || 'info',
};
