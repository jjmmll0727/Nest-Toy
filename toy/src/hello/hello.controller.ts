import {
  Controller,
  Get,
  Param,
  Logger,
  HttpCode,
  Post,
  Body,
} from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloBodyDTO } from './hello-body.dto';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  logger: Logger = new Logger(HelloController.name);

  @Get()
  @HttpCode(200)
  async showing(): Promise<string> {
    try {
      return await this.helloService.showing();
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }

  @Get('/:content')
  @HttpCode(200)
  async reShowing(@Param('content') content: string): Promise<string> {
    try {
      return await this.helloService.reShowing(content);
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }
}
