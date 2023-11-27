import { Body, Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() body: { taskId: string; taskName: string }): Promise<void> {
    const { taskId, taskName } = body;
    await this.tasksService.createTask(taskId, taskName);
  }
}
