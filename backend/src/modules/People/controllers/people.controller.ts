import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PeopleService } from '../services/people.service';
import { CreatePeopleDto } from '../typeORM/dto/createPeople.dto';
import { UpdatePeopleDto } from '../typeORM/dto/updatePeople.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleServices: PeopleService) {}

  @Get()
  findAll() {
    return this.peopleServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.peopleServices.findOne(id);
  }

  @Post()
  createItens(@Body() CreatePeopleDto: CreatePeopleDto) {
    return this.peopleServices.create(CreatePeopleDto);
  }

  @Patch(':id')
  updateItens(
    @Param('id') id: number,
    @Body() UpdatePeopleDto: UpdatePeopleDto,
  ) {
    return this.peopleServices.update(id, UpdatePeopleDto);
  }

  @Delete(':id')
  deleteItens(@Param('id') id: number) {
    return this.peopleServices.remove(id);
  }
}
