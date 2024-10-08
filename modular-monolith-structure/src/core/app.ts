import { loadModules } from './bootstrap/moduleLoader';
import { setupServer } from './bootstrap/serverSetup';

export const createApp = () => {
  loadModules();
  const app = setupServer();
  return app;
};
