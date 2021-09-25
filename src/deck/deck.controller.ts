import { Controller, Get, Post } from '@nestjs/common';
import DeckService from '@deck/application/deck.service';

@Controller('api/v1/deck')
export default class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('create')
  create(): string {
    return this.deckService.getHello();
  }

  @Get('open')
  open(): string {
    return this.deckService.getHello();
  }

  @Post('draw')
  getHello(): string {
    return this.deckService.getHello();
  }
}
