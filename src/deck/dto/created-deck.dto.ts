import DeckType from '@deck/domain/deck-type.enum';
import Deck from '@deck/entities/Deck';

export default class CreatedDeckDto {
  readonly deckId: string;
  readonly type: DeckType;
  readonly shuffled: boolean;
  readonly remaining: number;

  constructor(props: CreatedDeckDto) {
    Object.assign(this, props);
  }

  public static parse(deck: Deck): CreatedDeckDto {
    return new CreatedDeckDto({
      deckId: deck.deckId,
      shuffled: deck.shuffled,
      type: deck.type,
      remaining: deck.getRemaining(),
    });
  }
}
