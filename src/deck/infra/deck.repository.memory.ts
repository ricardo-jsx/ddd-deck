import Deck from '@deck/entities/Deck';
import { DeckRepository } from '@deck/interfaces/GenericRepository';

export default class DeckMemoryRepository implements DeckRepository {
  data: Deck[] = [];

  save(deck: Deck): void {
    this.data.push(deck);
  }

  load(deckId: string): Deck {
    return this.data.find((deck) => deck.deckId === deckId);
  }

  update(deckId: string, updateDeck: Deck): void {
    const decks = this.data.map((deck) => (deck.deckId === deckId ? updateDeck : deck));

    this.data = decks;
  }
}
