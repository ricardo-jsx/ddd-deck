import { v4 as uuidV4 } from 'uuid';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import DeckType from '@deck/enum/deck-type.enum';
import Shuffle from '@deck/interfaces/Shuffle';

import Card from './Card';

export default abstract class Deck {
  readonly deckId: string;
  readonly type: DeckType;
  readonly shuffled: boolean;
  readonly remaining = 0;
  protected cards: Card[] = [];
  protected drawCards: Card[] = [];

  protected constructor(requestedDeck: RequestedDeckDto) {
    this.deckId = uuidV4();
    this.type = requestedDeck.type;
    this.shuffled = requestedDeck.shuffled;
  }

  public getRemaining(): number {
    return this.cards.length;
  }

  public getRemainingCards(): Card[] {
    return this.cards;
  }

  public drawCard(): Card[] {
    if (this.cards.length === 0) return this.drawCards;

    const cards = [...this.cards];
    const drawCard = cards.pop();

    this.drawCards.push(drawCard);
    this.cards = cards;

    return this.drawCards;
  }

  public abstract addCards(): void;

  public abstract shuffle(shuffle: Shuffle<Card>): void;
}
