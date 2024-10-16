import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [InventoryModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
