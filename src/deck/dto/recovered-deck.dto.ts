import DeckType from '@deck/enum/deck-type.enum';
import Card from '@deck/entities/Card';
import Deck from '@deck/entities/Deck';

export default class RecoveredDeckDto {
  readonly deckId: string;
  readonly type: DeckType;
  readonly shuffled: boolean;
  readonly remaining: number;
  readonly cards: Card[];

  private constructor(props: RecoveredDeckDto) {
    Object.assign(this, props);
  }

  public static parse(deck: Deck): RecoveredDeckDto {
    return new RecoveredDeckDto({
      deckId: deck.deckId,
      shuffled: deck.shuffled,
      type: deck.type,
      remaining: deck.getRemaining(),
      cards: deck.getRemainingCards(),
    });
  }
}
