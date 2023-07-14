import { Injectable } from "@nestjs/common";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

@Injectable()
export class ChatbotService {
  async generateText(prompt: string): Promise<string> {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: prompt
        },
      ],
      max_tokens: 100,
    });
    return response.choices[0].content.trim();
  }
}
