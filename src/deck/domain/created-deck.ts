import Card from '@deck/entities/Card';
import DeckType from './deck-type.enum';

export default interface CreatedDeck {
  deckId: string;
  type: DeckType;
  shuffled: boolean;
  remaining: number;
  cards?: Card[];
}
