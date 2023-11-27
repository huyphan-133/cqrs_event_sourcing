import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';

@Injectable()
export class TasksService {
  constructor(private readonly commandBus: CommandBus) {}

  async createTask(taskId: string, taskName: string): Promise<void> {
    await this.commandBus.execute(new CreateTaskCommand(taskId, taskName));
  }
}
