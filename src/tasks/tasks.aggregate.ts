import { AggregateRoot } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { TaskCreatedEvent } from '../events/task-created.event';

export class TaskAggregate extends AggregateRoot {
    private taskId!: string;
    private taskName!: string;

    createTask(command: CreateTaskCommand): void {
        console.log("TaskAggregate createTask");
        const { taskId, taskName } = command;

        this.apply(new TaskCreatedEvent(taskId, taskName));
    }

    onTaskCreatedEvent(event: TaskCreatedEvent): void {
        console.log("TaskAggregate onTaskCreatedEvent");

        const { taskId, taskName } = event;
        this.taskId = taskId;
        this.taskName = taskName;
    }
}
