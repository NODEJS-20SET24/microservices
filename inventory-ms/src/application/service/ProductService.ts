import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Injectable()
export class ProductService {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}
  async create(dto: object): Promise<string> {
    const email: object = {};
    const notificationResponse: string = await firstValueFrom(
      this.client.send({ cmd: 'send_email' }, email),
    );
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.log('notification-ms response: ', notificationResponse);
    return 'Product created!';
  }

  findbyId(id: number): string {
    return 'Product found by id ';
  }
}
