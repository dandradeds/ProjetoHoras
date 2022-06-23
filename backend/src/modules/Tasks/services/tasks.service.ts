import {
   Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTasksDto } from '../typeorm/dto/createTasks.dto';
import { UpdateTasksDto } from '../typeorm/dto/updateTasks.dto';
import { Tasks } from '../typeorm/entities/tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly tasksRepository: Repository<Tasks>,
  ) {}
  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    let Idtasks = this.tasksRepository.findOne({ where: { id: id } });
    if (!Idtasks) {
      throw new NotFoundException(`Tarefa ${id} não encontrada`);
    }

    return Idtasks;
  }

  async create(createTasksDto: CreateTasksDto) {
    // let tasksName = await this.tasksRepository.findOne({
    //   where: { createTasksDto },
    // });

    
    // if (tasksName) { 
    //   throw new BadRequestException(`Tarefa ja cadastrada`);
    // }

    const tasks = this.tasksRepository.create({
      ...createTasksDto
    });
    this.tasksRepository.save(tasks);
    return tasks;
  }

  async update(id: number, updateTasksDto: UpdateTasksDto) {
    const user = await this.tasksRepository.preload({
      id:id,
      ...updateTasksDto
    });
    if (!user) {
      throw new NotFoundException(`Tarefa ${id} não encontrada`);
    }

    return this.tasksRepository.save(user);
  }

  async remove(id: number) {
    const removetasks = await this.tasksRepository.findOne({ id: id });

    if (!removetasks) {
      throw new NotFoundException(`Tarefa ${id} não encontrada`);
    }
    return this.tasksRepository.remove(removetasks);
  }
}
