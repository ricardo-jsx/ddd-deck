import { v4 as uuidV4 } from 'uuid';

import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import DeckType from '@deck/domain/deck-type.enum';
import Shuffle from '@deck/interfaces/Shuffle';

import Card from './Card';

export default abstract class Deck {
  readonly deckId: string;
  readonly type: DeckType;
  readonly shuffled: boolean;
  protected cards: Card[] = [];
  protected remaining = 0;

  protected constructor(requestedDeck: RequestedDeckDto) {
    this.deckId = uuidV4();
    this.type = requestedDeck.type;
    this.shuffled = requestedDeck.shuffled;
  }

  public getRemaining() {
    return this.remaining;
  }

  public getRemainingCards(): Card[] {
    return this.cards;
  }

  public abstract addCards(): void;

  public abstract shuffle(shuffle: Shuffle<Card>): void;
}
