import { PartialType } from '@nestjs/mapped-types';
import { CreateTasksDto } from './createTasks.dto';

export class UpdateTasksDto extends PartialType(CreateTasksDto) {}
