import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import Shuffle from '@deck/interfaces/Shuffle';

import Deck from './Deck';
import Card, { SUITS, RANKS } from './Card';

export default class FullDeck extends Deck {
  public static createDeck(requestedDeck: RequestedDeckDto) {
    return new FullDeck(requestedDeck);
  }

  public addCards(): void {
    this.cards = [];

    for (let i = 0; i < SUITS.length; i++) {
      for (let j = 0; j < RANKS.length; j++) {
        const card = Card.buildCard(SUITS[i], RANKS[j]);
        this.cards.push(card);
      }
    }

    this.remaining = this.cards.length;
  }

  public shuffle(shuffle: Shuffle<Card>): void {
    this.cards = shuffle.shuffle(this.cards);
  }
}
