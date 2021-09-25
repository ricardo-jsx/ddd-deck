import DeckType from '@deck/domain/deck-type.enum';
import Deck from '@deck/entities/Deck';

export default class CreatedDeckResponseDto {
  readonly deckId: string;
  readonly type: DeckType;
  readonly shuffled: boolean;
  readonly remaining: number;

  constructor(props: CreatedDeckResponseDto) {
    Object.assign(this, props);
  }

  public static parse(deck: Deck): CreatedDeckResponseDto {
    return new CreatedDeckResponseDto({
      deckId: deck.deckId,
      shuffled: deck.shuffled,
      type: deck.type,
      remaining: deck.remaining,
    });
  }
}
