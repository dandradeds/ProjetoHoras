import {
   Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../typeorm/dto/createProject.dto';
import { UpdateProjectDto } from '../typeorm/dto/updateProject.dto';
import { Project } from '../typeorm/entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    let Idproject = this.projectRepository.findOne({ where: { id: id } });
    if (!Idproject) {
      throw new NotFoundException(`Projeto ${id} não encontrado`);
    }

    return Idproject;
  }

  async create(createProjectDto: CreateProjectDto) {
    let projectName = await this.projectRepository.findOne({
      where: { name:createProjectDto.name },
    });

    
    if (projectName) { 
      throw new BadRequestException(`Projeto ja cadastrado`);
    }

    const project = this.projectRepository.create({
      ...createProjectDto
    });
    this.projectRepository.save(project);
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const user = await this.projectRepository.preload({
      id:id,
      ...updateProjectDto
    });
    if (!user) {
      throw new NotFoundException(`Projeto Id ${id} não encontrado`);
    }

    return this.projectRepository.save(user);
  }

  async remove(id: number) {
    const removeproject = await this.projectRepository.findOne({ id: id });

    if (!removeproject) {
      throw new NotFoundException(`Projeto Id ${id} não encontrado`);
    }
    return this.projectRepository.remove(removeproject);
  }
}
