import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from 'config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.APPLICATION_PORT, () => {
    console.log(
      `Server is running on http://localhost:${ENV.APPLICATION_PORT} in ${ENV.NODE_ENV} mode`,
    );
  });
}
bootstrap();
