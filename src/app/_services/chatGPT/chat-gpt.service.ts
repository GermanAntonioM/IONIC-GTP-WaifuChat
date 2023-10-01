import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {

  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: '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',
  });
  constructor() {
    this.openai = new OpenAIApi(this.configuration);
   }

   QuestionToIA(message: string):Promise<string | undefined>{
    return this.openai.createCompletion({
         model: "gpt-3.5-turbo",
         prompt: message,
         max_tokens: 256
       }).then(response => {
         return response.data.choices[0].text;
       }).catch(error=>{
         return '';
       });
   }
}
