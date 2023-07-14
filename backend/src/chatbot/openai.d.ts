// src/chat/openai.d.ts

declare module "openai" {
  export class Configuration {
    constructor(config: { organization: string; apiKey: string });
  }

  export class OpenAIApi {
    constructor(configuration: Configuration);
    createCompletion(options: CompletionCreateOptions): Promise<CompletionCreateResult>;
  }

  export interface CompletionCreateOptions {
    model: string;
    messages: Array<{
      role: string;
      content: string;
    }>;
    max_tokens: number;
  }

  export interface CompletionCreateResult {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
    choices: {
      content: string;

      finish_reason: string;
      index: number;
    }[];
  }
}
