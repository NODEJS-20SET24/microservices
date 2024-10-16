import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendEmail(emailDto: object): string {
    return 'Email sended!';
  }
}
