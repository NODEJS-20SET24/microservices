import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SendEmailDto } from './dto/SendEmailDto';
import { NotificationService } from '../../application/service/NotificationService';

@Controller()
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @MessagePattern({ cmd: 'send_email' })
  sendEmail(@Payload() emailDto: SendEmailDto) {
    return this.service.sendEmail(emailDto);
  }
}
