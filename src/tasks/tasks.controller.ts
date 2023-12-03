import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() body: { taskId: string; taskName: string }): Promise<void> {
    const { taskId, taskName } = body;
    await this.tasksService.createTask(taskId, taskName);
  }

  @Get()
  async getTasks(): Promise<TaskDto[]> {
    return this.tasksService.getTasks();
  }
}
