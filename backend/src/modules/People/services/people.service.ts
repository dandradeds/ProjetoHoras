import {
  HttpException,
  HttpStatus,
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePeopleDto } from '../typeORM/dto/createPeople.dto';
import { UpdatePeopleDto } from '../typeORM/dto/updatePeople.dto';
import { People } from '../typeorm/entities/people.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
  ) {}
  findAll() {
    return this.peopleRepository.find();
  }

  findOne(id: number) {
    let IdPeople = this.peopleRepository.findOne({ where: { id: id } });
    if (!IdPeople) {
      throw new NotFoundException(`Pessoa Id ${id} não encontrada`);
    }

    return IdPeople;
  }

  async create(createPeopleDto: CreatePeopleDto) {
    let peopleName = await this.peopleRepository.findOne({
      where: { name:createPeopleDto.name, lastName:createPeopleDto.lastName },
    });

    
    if (peopleName) { 
      throw new BadRequestException(`Pessoa ja criada`);
    }

    const people = this.peopleRepository.create({
      ...createPeopleDto
    });
    this.peopleRepository.save(people);
    return people;
  }

  async update(id: number, updatePeopleDto: UpdatePeopleDto) {
    const user = await this.peopleRepository.preload({
      id:id,
      ...updatePeopleDto
    });
     console.log(user)
    if (!user) {
      throw new NotFoundException(`Pessoa Id ${id} não encontrada`);
    }

    return this.peopleRepository.save(user);
  }

  async remove(id: number) {
    const removePeople = await this.peopleRepository.findOne({ id: id });

    if (!removePeople) {
      throw new NotFoundException(`Pessoa Id ${id} não encontrada`);
    }
    return this.peopleRepository.remove(removePeople);
  }
}
