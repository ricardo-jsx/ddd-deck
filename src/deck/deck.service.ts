import { Injectable } from '@nestjs/common';

import { DeckRepository } from '@deck/interfaces/GenericRepository';
import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import DrawCardsDto from '@deck/dto/draw-cards.dto';
import DeckMemoryRepository from '@deck/infra/deck.repository.memory';
import Deck from '@deck/entities/Deck';
import Hand from '@deck/entities/Hand';
import DeckErrorCode from '@deck/enum/deck-error-code';

import DeckFactory from './DeckFactory';

@Injectable()
export default class DeckService {
  private db: DeckRepository;

  public constructor() {
    this.db = new DeckMemoryRepository();
  }

  createDeck(requestedDeck: RequestedDeckDto): Deck {
    const deck = DeckFactory.createDeck(requestedDeck);
    this.db.save(deck);
    return deck;
  }

  openDeck(deckId: string): Deck | DeckErrorCode {
    const deck = this.db.load(deckId);

    if (!deck) return DeckErrorCode.DECK_NOT_FOUND;

    return deck;
  }

  drawCards(drawCardsDto: DrawCardsDto): Hand | DeckErrorCode {
    const deck = this.db.load(drawCardsDto.deckId);

    if (!deck) return DeckErrorCode.DECK_NOT_FOUND;

    const currentHand = deck.drawCard(drawCardsDto.amount);

    this.db.update(drawCardsDto.deckId, deck);

    return currentHand;
  }
}
