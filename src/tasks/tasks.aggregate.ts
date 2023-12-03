import { AggregateRoot } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { TaskCreatedEvent } from '../events/task-created.event';

export class TaskAggregate extends AggregateRoot {
    private taskId!: string;
    private taskName!: string;

    createTask(command: CreateTaskCommand): void {
        const { taskId, taskName } = command;

        this.apply(new TaskCreatedEvent(taskId, taskName));
    }

    onTaskCreatedEvent(event: TaskCreatedEvent): void {

        const { taskId, taskName } = event;
        this.taskId = taskId;
        this.taskName = taskName;
    }
}
