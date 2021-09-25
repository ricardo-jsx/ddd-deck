import { Injectable } from '@nestjs/common';

import DeckRepository from '@deck/interfaces/DeckRepository';
import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import Deck from '@deck/entities/Deck';
import DeckMemoryRepository from '@deck/infra/deck.repository.memory';

import DeckFactory from './DeckFactory';

@Injectable()
export default class DeckService {
  private db: DeckRepository;

  public constructor() {
    this.db = new DeckMemoryRepository();
  }

  getHello(json?: any): string {
    return 'Hello World!' + JSON.stringify(json || {}, null, 2);
  }

  createDeck(requestedDeck: RequestedDeckDto): Deck {
    const deck = DeckFactory.createDeck(requestedDeck);
    this.db.save(deck);
    return deck;
  }

  openDeck(deckId: string): Deck {
    return this.db.load(deckId);
  }
}
