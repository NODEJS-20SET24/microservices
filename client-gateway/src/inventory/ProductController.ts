import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateProductDto } from './dto/CreateProductDto';
import { catchError, firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('v1/products')
export class ProductController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      const response = await firstValueFrom(
        this.client.send({ cmd: 'create_product' }, createProductDto),
      );
      return response;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.client.send({ cmd: 'find_by_id_product' }, { id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
}
