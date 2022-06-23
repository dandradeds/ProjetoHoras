import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
@Entity('Project')
export class Project {
  @PrimaryGeneratedColumn('increment')
  id: number;
  isGenerated: true;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

}
