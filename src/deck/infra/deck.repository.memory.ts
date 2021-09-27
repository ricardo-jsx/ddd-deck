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

  update(deckId: string, updateDeck: Deck): void {
    const decks = this.decks.map((deck) => (deck.deckId === deckId ? updateDeck : deck));

    this.decks = decks;
  }
}
