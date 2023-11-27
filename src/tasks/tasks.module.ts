import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksCommandHandler } from './tasks.command-handler';
import { TasksEventHandler } from './tasks.event-handlers';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    CqrsModule,
    EventsModule
  ],
  controllers: [TasksController],
  providers: [TasksService, TasksCommandHandler, TasksEventHandler],
})
export class TasksModule {}
