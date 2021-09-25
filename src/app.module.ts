import { Module } from '@nestjs/common';

import DeckModule from './deck/deck.module';

@Module({
  imports: [DeckModule],
})
export class AppModule {}
