import Card from '@deck/entities/Card';

export default class DrawCardsDto {
  readonly cards: Card[];

  private constructor(props: DrawCardsDto) {
    Object.assign(this, props);
  }

  public static parse(cards: Card[]): DrawCardsDto {
    return new DrawCardsDto({ cards });
  }
}
