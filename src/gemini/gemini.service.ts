import { Injectable } from '@nestjs/common';
import { BasicPromptDto } from './dtos/basic-prompt.dto';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  private ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  async basicPrompt(basicPromptDto: BasicPromptDto) {
    const systemInstruction =
      'Responda sempre em português e utilize formatação Markdown quando apropriado. Limite a resposta a 1 ou 2 parágrafos curtos, mantendo a objetividade e clareza.';

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: basicPromptDto.prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  }
}
