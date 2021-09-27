import Card from './Card';

export default class Hand {
  private cards: Card[];

  public constructor() {
    this.cards = [];
  }

  public addCards(cards: Card[]) {
    this.cards.push(...cards);
  }

  public getCards() {
    return this.cards;
  }
}
