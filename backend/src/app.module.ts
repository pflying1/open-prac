/* eslint-disable prettier/prettier */
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module'; // 임포트 추가
@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  // eslint-disable-next-line prettier/prettier
  providers: [AppService],
})
export class AppModule {}
