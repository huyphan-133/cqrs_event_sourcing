// src/events/events.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventType: string;

  @Column('json')
  eventData: Record<string, any>;

}
