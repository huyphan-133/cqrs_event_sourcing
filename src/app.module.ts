import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CqrsModule, 
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // or your database port
      username: 'postgres',
      password: 'my-secret-pw',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true, // Should be false in production
    }),

  ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
