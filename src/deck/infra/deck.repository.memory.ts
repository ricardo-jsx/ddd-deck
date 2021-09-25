import DeckRepository from '@deck/domain/deck.repository';

export default class DeckMemoryRepository implements DeckRepository {
  decks: any[];

  public constructor() {
    this.decks = [];
  }

  save(deck: any): void {
    throw new Error('Method not implemented.');
  }
}
