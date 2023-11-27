import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { TaskAggregate } from './tasks.aggregate';

@CommandHandler(CreateTaskCommand)
export class TasksCommandHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreateTaskCommand): Promise<void> {
    console.log('TasksCommandHandler.execute')
    const { taskId, taskName } = command;
    const taskAggregate = this.publisher.mergeObjectContext(new TaskAggregate());
    taskAggregate.createTask(command);

    console.log('taskAggregate.commit')
    taskAggregate.commit();
  }
}
