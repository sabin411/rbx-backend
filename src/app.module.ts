import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import ApplicationEnvironment from 'config/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ApplicationEnvironment],
      isGlobal: true,
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
