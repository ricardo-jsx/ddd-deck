import { Injectable } from '@nestjs/common';

import CreatedDeck from '@deck/domain/created-deck';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import DeckFactory from './DeckFactory';
import Deck from './entities/Deck';

@Injectable()
export default class DeckService {
  getHello(json?: any): string {
    return 'Hello World!' + JSON.stringify(json || {}, null, 2);
  }

  createDeck(requestedDeck: RequestedDeckDto): Deck {
    const deck = DeckFactory.createDeck(requestedDeck);
    return deck;
  }
}
