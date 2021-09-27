import { IsUUID } from 'class-validator';

export default class FindDeckParams {
  @IsUUID('4')
  deckId: string;
}
