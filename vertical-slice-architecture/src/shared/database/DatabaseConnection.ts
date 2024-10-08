import { createConnection, Connection } from 'typeorm';
import { logger } from '../logging/logger';

export class DatabaseConnection {
  private static instance: Connection;

  private constructor() {}

  static async getConnection(): Promise<Connection> {
    if (!DatabaseConnection.instance) {
      try {
        DatabaseConnection.instance = await createConnection();
        logger.info('Database connection established');
      } catch (error) {
        logger.error(`Database connection failed: ${error}`);
        throw error;
      }
    }
    return DatabaseConnection.instance;
  }
}
