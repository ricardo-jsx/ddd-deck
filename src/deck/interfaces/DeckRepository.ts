import Deck from '@deck/entities/Deck';

export default interface DeckRepository {
  save(deck: Deck): void;
}
