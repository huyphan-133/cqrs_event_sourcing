import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDto } from './dto/tasks.dto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    private readonly commandBus: CommandBus,
    @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
  ) {}


  async createTask(taskId: string, taskName: string): Promise<void> {
    await this.commandBus.execute(new CreateTaskCommand(taskId, taskName));
  }

  async getTasks(): Promise<TaskDto[]> {
    const tasks = await this.taskRepository.find();
    return tasks.map(task => ({ taskId: task.id, taskName: task.name }));
  }

}
