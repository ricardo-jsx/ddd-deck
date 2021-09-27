import { v4 as uuidV4 } from 'uuid';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import DeckType from '@deck/enum/deck-type.enum';
import Shuffle from '@deck/interfaces/Shuffle';

import Card from './Card';
import Hand from './Hand';

export default abstract class Deck {
  readonly deckId: string;
  readonly type: DeckType;
  readonly shuffled: boolean;
  readonly hand: Hand;
  protected cards: Card[] = [];

  protected constructor(readonly requestedDeck: RequestedDeckDto) {
    this.deckId = uuidV4();
    this.type = requestedDeck.type;
    this.shuffled = requestedDeck.shuffled;
    this.hand = new Hand();
  }

  public getRemaining(): number {
    return this.cards.length;
  }

  public getRemainingCards(): Card[] {
    return this.cards;
  }

  public drawCard(amount: number): Hand {
    const drawCards = this.cards.slice(-amount);

    this.hand.addCards(drawCards);
    this.cards.length = this.cards.length - drawCards.length;

    return this.hand;
  }

  public abstract addCards(): void;

  public abstract shuffle(shuffle: Shuffle<Card>): void;
}
