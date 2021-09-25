import RequestedDeckDto from '@deck/dto/requested-deck.dto';
import DeckType from '@deck/domain/deck-type.enum';
import Deck from '@deck/entities/Deck';
import ShortDeck from '@deck/entities/ShortDeck';
import FullDeck from '@deck/entities/FullDeck';
import knuthShuffle from '@deck/helpers/knuth-shuffle';

export default class DeckFactory {
  public static createDeck(requestedDeck: RequestedDeckDto) {
    if (requestedDeck.type === DeckType.SHORT)
      return this.createShortDeck(requestedDeck);

    return this.createFullDeck(requestedDeck);
  }

  private static createShortDeck(requestedDeck: RequestedDeckDto): Deck {
    const shortDeck = ShortDeck.createDeck(requestedDeck);

    shortDeck.addCards();

    if (requestedDeck.shuffled) shortDeck.shuffle(knuthShuffle);

    return shortDeck;
  }

  private static createFullDeck(requestedDeck: RequestedDeckDto): Deck {
    const fullDeck = FullDeck.createDeck(requestedDeck);

    fullDeck.addCards();

    if (requestedDeck.shuffled) fullDeck.shuffle(knuthShuffle);

    return fullDeck;
  }
}
