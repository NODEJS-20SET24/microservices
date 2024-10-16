import { Module } from '@nestjs/common';
import { NotificationController } from './infrastructure/controller/NotificationController';
import { NotificationService } from './application/service/NotificationService';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class AppModule {}
