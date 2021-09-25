import Card from '@deck/entities/Card';
import Shuffle from '@deck/interfaces/Shuffle';

const knuthShuffle: Shuffle<Card> = {
  shuffle(cards: Card[]): Card[] {
    const arr = [...cards];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  },
};

export default knuthShuffle;
