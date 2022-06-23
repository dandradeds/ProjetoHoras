import { IsString } from 'class-validator';

export class CreatePeopleDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly lastName: string;
}
