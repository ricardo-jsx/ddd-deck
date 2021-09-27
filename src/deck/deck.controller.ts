import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import CreatedDeckDto from '@deck/dto/created-deck.dto';
import RecoveredDeckDto from '@deck/dto/recovered-deck.dto';

import DeckService from './deck.service';
import FindDeckParams from './dto/find-deck-params.dto';
import DrawCardsDto from './dto/draw-cards.dto';

@Controller('api/v1/deck')
export default class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('create')
  create(@Body() createDeckDto: RequestedDeckDto): CreatedDeckDto {
    const deck = this.deckService.createDeck(createDeckDto);

    return CreatedDeckDto.parse(deck);
  }

  @Get('open/:deckId')
  open(@Param() params: FindDeckParams): RecoveredDeckDto {
    const deck = this.deckService.openDeck(params.deckId);

    return RecoveredDeckDto.parse(deck);
  }

  @Post('draw/:deckId')
  draw(@Param() params: FindDeckParams): DrawCardsDto {
    const cards = this.deckService.drawCards(params.deckId);

    return DrawCardsDto.parse(cards);
  }
}
