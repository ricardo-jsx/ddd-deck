import Deck from '@deck/entities/Deck';

export default interface GenericRepository<T> {
  data: T[];
  save(T: Deck): void;
  load(deckId: string): T;
  update(deckId: string, deck: T): void;
}

export type DeckRepository = GenericRepository<Deck>;
