import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { NotificationController } from './NotificationController';

@Module({
  controllers: [NotificationController],
  providers: [],
  imports: [NatsModule],
})
export class NotificationModule {}
