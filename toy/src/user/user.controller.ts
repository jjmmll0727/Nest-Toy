import { Controller, Get, Param, Logger } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('hello')
export class UserController {
    constructor(private readonly userService: UserService) {} // userService라른 provider를 주입 받는다. userService를 객체멤버변수라고 한다.
    logger: Logger = new Logger(UserController.name);

    @Get()
    async showing() {
        try {
            return this.userService.showing();
        } catch (error) {
            this.logger.error(error?.message ?? '');
            throw error;
        }
    }

    @Get('/:content')
    async reShowing(@Param('content') content: string) {
        try {
            return this.userService.reShowing(content);
        } catch (error) {
            this.logger.error(error?.message ?? '');
            throw error;
        }
    }
}
