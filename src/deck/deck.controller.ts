import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import CreatedDeckDto from '@deck/dto/created-deck.dto';
import RecoveredDeckDto from '@deck/dto/recovered-deck.dto';
import DrawCardsDto from '@deck/dto/draw-cards.dto';
import FindDeckParams from '@deck/dto/find-deck-params.dto';
import HandDto from '@deck/dto/hand.dto';
import Deck from '@deck/entities/Deck';
import Hand from '@deck/entities/Hand';

import DeckService from './deck.service';

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

    if (deck instanceof Deck) return RecoveredDeckDto.parse(deck);

    throw new HttpException('Deck not found', HttpStatus.NOT_FOUND);
  }

  @Post('draw')
  @HttpCode(200)
  draw(@Body() drawCardsDto: DrawCardsDto): HandDto {
    const hand = this.deckService.drawCards(drawCardsDto);

    if (hand instanceof Hand) return HandDto.parse(hand);

    throw new HttpException('Deck not found', HttpStatus.NOT_FOUND);
  }
}
