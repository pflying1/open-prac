/* eslint-disable prettier/prettier */
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module'; // 임포트 추가
import { ChatbotService } from './chatbot/chatbot.service';
import { ChatbotModule } from './chatbot/chatbot.module';
import { ChatBotController } from './chatbot/chatbot.controller';
@Module({
  imports: [
    ConfigModule.forRoot(),
    ChatbotModule
  ],
  controllers: [AppController, ChatBotController],
  providers: [AppService, ChatbotService],
})
export class AppModule {}
