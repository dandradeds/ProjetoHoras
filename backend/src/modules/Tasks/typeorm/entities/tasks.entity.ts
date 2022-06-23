import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
@Entity('Tasks')
export class Tasks {
  @PrimaryGeneratedColumn('increment')
  id: number;
  isGenerated: true;

  @Column()
  title: string;

  @Column("text")
  description: string;

  @Column()
  initialDate: string;

  @Column()
  finalDate: string;

  @Column()
  task: string;

  @Column('json',{nullable:true})
  tasksName: string[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

}
