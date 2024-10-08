import { createApp } from './app';
import { appConfig } from './core/config/AppConfig';

async function startServer() {
  const app = await createApp();

  app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
