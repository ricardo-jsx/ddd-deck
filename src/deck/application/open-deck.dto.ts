import { IsUUID } from 'class-validator';

export default class OpenDeckDto {
  @IsUUID('4')
  id: number;
}
