import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneSignalModule } from 'nestjs-onesignal';
@Module({
  imports: [
    OneSignalModule.forRoot({
      appId: '4da2b0a9-99ae-4a2f-aecc-1158ede8652a',
      apiKey: 'OTAzYjg1OWYtZWZkZC00YmU3LTg3OTItMDg0NzEyODFmNzY1',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
