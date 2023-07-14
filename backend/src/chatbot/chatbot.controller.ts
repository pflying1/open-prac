import { Controller, Post, Body, Logger } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('chat')
export class ChatBotController {
  private readonly logger = new Logger(ChatBotController.name);

  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  async askQuestion(@Body('prompt') prompt: string): Promise<string> {
    this.logger.log('Received a request with prompt: ' + prompt);

    try {
      const response = await this.chatbotService.generateText(prompt);
      this.logger.log('Received a response: ' + response);
      return response;
    } catch (error) {
      this.logger.error(`Error while processing the request: ${error.message}`, error.stack);
      throw error;
    }
  }
}
