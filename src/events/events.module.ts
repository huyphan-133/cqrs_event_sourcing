// src/events/events.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './events.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EventEntity,
        ])
    ],
    exports: [TypeOrmModule]
})
export class EventsModule { }
