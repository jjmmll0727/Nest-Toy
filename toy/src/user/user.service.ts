import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable() // 다음 데코레이터를 통해 다른 어떤 컴포넌트에서 주입 받을 수 있다.
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {} // 의존성 주입을 받았다.
    showing() {
        return 'here is for hello page';
    }
    reShowing(content: string): string {
        return `${content} is re showing !!!`;
    }
    returing(content: string): string {
        return `${content} is returing by post method !! `;
    }
    async signup(email: string): Promise<User> {
        return this.userRepository.findOne(email);
    }
}
