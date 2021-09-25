import DeckType from './deck-type.enum';

export default interface CreatedDeck {
  deckId: string;
  type: DeckType;
  shuffled: boolean;
  remaining: number;
}
