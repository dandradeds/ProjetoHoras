import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTasksDto } from '../typeorm/dto/createTasks.dto';
import { UpdateTasksDto } from '../typeorm/dto/updateTasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksServices: TasksService) {}

  @Get()
  findAll() {
    return this.tasksServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tasksServices.findOne(id);
  }

  @Post()
  createItens(@Body() CreateTasksDto: CreateTasksDto) {
    return this.tasksServices.create(CreateTasksDto);
  }

  @Patch(':id')
  updateItens(
    @Param('id') id: number,
    @Body() UpdateTasksDto: UpdateTasksDto,
  ) {
    return this.tasksServices.update(id, UpdateTasksDto);
  }

  @Delete(':id')
  deleteItens(@Param('id') id: number) {
    return this.tasksServices.remove(id);
  }
}
