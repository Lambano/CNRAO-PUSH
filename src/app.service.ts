import { ConflictException, Injectable } from '@nestjs/common';
import { OneSignalService } from 'nestjs-onesignal';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class AppService {
  public constructor(private readonly onesignalService: OneSignalService) {}
  async sendMessage(message: MessageDto) {
    const data = await this.onesignalService.client.createNotification({
      contents: {
        en: message.message,
      },
      data: { type: message.type, user: message.user },
      include_player_ids: message.ids,
    });
    if (data.statusCode != 200) {
      throw new ConflictException();
    }
    return data.body;
  }
}
