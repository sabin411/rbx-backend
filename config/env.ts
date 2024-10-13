import { config } from 'dotenv';

config();

export const ENV = {
  APPLICATION_PORT: process.env.APPLICATION_PORT ?? 8000,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  DATABASE_URL: process.env.DATABASE_URL,

  // Only for docker development
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
};

export default () => ENV;
