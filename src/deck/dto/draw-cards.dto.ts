import { IsUUID, Min } from 'class-validator';

export default class DrawCardsDto {
  @IsUUID('4')
  readonly deckId: string;

  @Min(1, { message: 'Amount must be at least 1' })
  readonly amount: number;
}
