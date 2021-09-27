type Suit = 'SPADES' | 'HEARTS' | 'CLUBS' | 'DIAMONDS';

type Rank = 'ACE' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'JACK' | 'QUEEN' | 'KING';

export const RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'];

export const SUITS: Suit[] = ['CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES'];

export default class Card {
  readonly rank: Rank;
  readonly suit: Suit;
  readonly code: string;

  private constructor(rank: Rank, suit: Suit, code: string) {
    this.rank = rank;
    this.suit = suit;
    this.code = code;
  }

  public static buildCard(suit: Suit, rank: Rank): Card {
    const code = rank[0] + suit[0];

    return new Card(rank, suit, code);
  }
}
