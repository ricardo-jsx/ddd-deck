import { IsBoolean, IsEnum, IsOptional } from 'class-validator';

import DeckType from '@deck/enum/deck-type.enum';

export default class RequestedDeckDto {
  @IsEnum(DeckType, { message: 'Deck type must be FULL or SHORT' })
  public readonly type: DeckType;

  @IsOptional()
  @IsBoolean({ message: 'shuffled must be either true or false' })
  public readonly shuffled: boolean;
}
