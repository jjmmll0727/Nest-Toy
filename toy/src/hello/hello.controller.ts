import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly appService: HelloService) {}

  @Get()
  showing(): string {
    return this.appService.showing();
  }
}
