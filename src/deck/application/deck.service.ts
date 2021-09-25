import { Injectable } from '@nestjs/common';

@Injectable()
export default class DeckService {
  getHello(): string {
    return 'Hello World!';
  }
}
