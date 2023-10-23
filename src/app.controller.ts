import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMessage(@Body() message: MessageDto) {
    return this.appService.sendMessage(message);
  }
}
