import { Module } from '@nestjs/common';
import { ProductController } from './ProductController';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ProductController],
  providers: [],
  imports: [NatsModule],
})
export class InventoryModule {}
