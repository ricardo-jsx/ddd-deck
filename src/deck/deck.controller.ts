import { Body, Controller, Get, Post } from '@nestjs/common';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import CreatedDeckResponseDto from '@deck/dto/created-deck.response.dto';

import DeckService from './deck.service';

@Controller('api/v1/deck')
export default class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('create')
  create(@Body() createDeckDto: RequestedDeckDto): CreatedDeckResponseDto {
    const deck = this.deckService.createDeck(createDeckDto);

    return CreatedDeckResponseDto.parse(deck);
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
