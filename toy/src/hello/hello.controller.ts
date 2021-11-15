import { Controller, Get, Param, Post } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {} // 반드시 있어야 service를 가져올 수 있아

  @Get()
  async showing(): Promise<string> {
    return this.helloService.showing();
  }

  @Get('/:content')
  async reShowing(@Param('content') content: string): Promise<string> {
    return this.helloService.reShowing(content);
  }
}
