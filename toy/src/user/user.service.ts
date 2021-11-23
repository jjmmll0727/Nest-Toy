import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    async showing(): Promise<string> {
        return 'here is for hello page';
    }
    async reShowing(content: string): Promise<string> {
        return `${content} is re showing !!!`;
    }
    async returing(content: string): Promise<string> {
        return `${content} is returing by post method !! `;
    }
    async signup(email: string): Promise<User> {
        return this.userRepository.findOne(email);
    }
}
