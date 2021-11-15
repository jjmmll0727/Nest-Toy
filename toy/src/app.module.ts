import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [HelloModule],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {}
