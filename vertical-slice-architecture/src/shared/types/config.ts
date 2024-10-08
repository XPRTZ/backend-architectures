export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface AppConfig {
  port: number;
  environment: 'development' | 'production' | 'test';
  logLevel: 'error' | 'warn' | 'info' | 'debug';
}

export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
}

export interface Config {
  database: DatabaseConfig;
  app: AppConfig;
  auth: AuthConfig;
}
