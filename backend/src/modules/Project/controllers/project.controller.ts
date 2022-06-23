import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { CreateProjectDto } from '../typeorm/dto/createProject.dto';
import { UpdateProjectDto } from '../typeorm/dto/updateProject.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectServices: ProjectService) {}

  @Get()
  findAll() {
    return this.projectServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectServices.findOne(id);
  }

  @Post()
  createItens(@Body() CreateProjectDto: CreateProjectDto) {
    return this.projectServices.create(CreateProjectDto);
  }

  @Patch(':id')
  updateItens(
    @Param('id') id: number,
    @Body() UpdateProjectDto: UpdateProjectDto,
  ) {
    return this.projectServices.update(id, UpdateProjectDto);
  }

  @Delete(':id')
  deleteItens(@Param('id') id: number) {
    return this.projectServices.remove(id);
  }
}
