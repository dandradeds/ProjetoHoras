import { IsString } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly initialDate: string;

  @IsString()
  readonly finalDate: string;

  @IsString()
  readonly task: string;

  @IsString({each: true})
  readonly tasksName: string[];
}
