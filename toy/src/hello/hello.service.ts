import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  showing(): string {
    return 'here is for hello page';
  }
}
