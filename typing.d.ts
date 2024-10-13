/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    APPLICATION_PORT: number;
    NODE_ENV: 'development' | 'production';
    DATABASE_URL: string;

    //  Only for docker development
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
  }
}
