import { Controller, ParseIntPipe } from '@nestjs/common';
import { ProductService } from '../../application/service/ProductService';
import { CreateProductDto } from './dto/CreateProductDto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'create_product' })
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @MessagePattern({ cmd: 'find_by_id_product' })
  findById(@Payload('id', ParseIntPipe) id: number) {
    return this.productService.findbyId(id);
  }
}
