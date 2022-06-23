import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './modules/People/people.module';
import { ProjectModule } from './modules/Project/project.module';
import { TasksModule } from './modules/Tasks/tasks.module';

@Module({
  imports: [PeopleModule,ProjectModule,TasksModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "postgres",
    autoLoadEntities: true,
    entities:[ __dirname + "/**/*.entity.js"],
    synchronize: false
  })
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
