import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';

@Module({
  providers: [HelloService],
})
export class HelloModule {}
