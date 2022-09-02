import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('ALIAS_APP_SERVICE') private readonly alias: AppService
  ) {
    console.log(this.alias === this.appService); // 進行比對
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}