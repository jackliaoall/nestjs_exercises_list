import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Optional() @Inject('HANDSOME_MAN') private readonly handsomeMan = { name: '' }
    ) {
      console.log(this.handsomeMan);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}