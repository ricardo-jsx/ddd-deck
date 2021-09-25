import Deck from '@deck/entities/Deck';

export default interface DeckRepository {
  decks: Deck[];
  save(deck: Deck): void;
  load(deckId: string): Deck;
}
