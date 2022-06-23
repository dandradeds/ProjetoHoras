import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopleDto } from './createPeople.dto';

export class UpdatePeopleDto extends PartialType(CreatePeopleDto) {}
