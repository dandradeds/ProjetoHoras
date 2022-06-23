import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity('People')
export class People {
  @PrimaryGeneratedColumn('increment')
  id: number;
  isGenerated: true;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;


}
