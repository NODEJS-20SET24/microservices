import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendEmailDto } from './dto/SendEmailDto';
import { NATS_SERVICE } from 'src/config';

@Controller('v1/notifications')
export class NotificationController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post("emails")
  sendEmail(@Body() sendEmailDto: SendEmailDto) {
    return this.client.send({ cmd: 'send_email' }, sendEmailDto);
  }
}
