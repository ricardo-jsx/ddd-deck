import { Module } from '@nestjs/common';

import DeckController from './deck.controller';
import DeckService from './application/deck.service';

@Module({
  imports: [],
  controllers: [DeckController],
  providers: [DeckService],
})
export default class DeckModule {}
