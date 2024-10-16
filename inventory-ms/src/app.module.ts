import { Module } from '@nestjs/common';
import { ProductController } from './infrastructure/controller/ProductController';
import { ProductService } from './application/service/ProductService';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
