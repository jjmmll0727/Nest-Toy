import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async showing(): Promise<string> {
    return 'here is for hello page';
  }
  async reShowing(content: string): Promise<string> {
    return `${content} is re showing !!!`;
  }
}
