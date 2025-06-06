import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  basicPrompt() {
    return { ola: 'Olá de GeminiService!' };
  }
}
