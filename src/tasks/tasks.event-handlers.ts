import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskCreatedEvent } from '../events/task-created.event';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from '../events/events.entity';
import { Repository } from 'typeorm';

@EventsHandler(TaskCreatedEvent)
export class TasksEventHandler implements IEventHandler<TaskCreatedEvent> {
  constructor(
    @InjectRepository(EventEntity) private readonly eventsRepository: Repository<EventEntity>
  ) { }

  async handle(event: TaskCreatedEvent): Promise<void> {
    // Store the event in the write model (event store)
    const eventEntity = this.eventsRepository.create({
      eventType: 'TaskCreatedEvent',
      eventData: {
        taskId: event.taskId,
        taskName: event.taskName,
        // Add any additional data you want to store with the event
      },
    });

    await this.eventsRepository.save(eventEntity);

    // Your other logic for handling the event (if any)
    console.log(`Task created: ${event.taskName}`);
  }
}
