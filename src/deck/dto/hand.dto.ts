import Card from '@deck/entities/Card';
import Hand from '@deck/entities/Hand';

export default class HandDto {
  readonly cards: Card[];

  private constructor(props: HandDto) {
    Object.assign(this, props);
  }

  public static parse(hand: Hand): HandDto {
    return new HandDto({ cards: hand.getCards() });
  }
}
