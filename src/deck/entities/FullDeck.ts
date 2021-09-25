import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import Shuffle from '@deck/interfaces/Shuffle';

import Deck from './Deck';
import Card, { SUITS, RANKS } from './Card';

export default class FullDeck extends Deck {
  public constructor(requestedDeck: RequestedDeckDto) {
    super(requestedDeck);
  }

  public createCards(): void {
    this.cards = [];

    for (let i = 0; i < SUITS.length; i++) {
      for (let j = 0; j < RANKS.length; j++) {
        const card = Card.buildCard(SUITS[i], RANKS[j]);
        this.cards.push(card);
      }
    }
  }

  public shuffle(shuffle: Shuffle<Card>): void {
    this.cards = shuffle.shuffle(this.cards);
  }
}
