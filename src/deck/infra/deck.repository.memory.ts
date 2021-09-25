import Deck from '@deck/entities/Deck';
import DeckRepository from '@deck/interfaces/DeckRepository';

export default class DeckMemoryRepository implements DeckRepository {
  decks: Deck[] = [];

  save(deck: Deck): void {
    this.decks.push(deck);
  }

  load(deckId: string): Deck {
    return this.decks.find((deck) => deck.deckId === deckId);
  }
}
