import {
    Controller,
    Get,
    Param,
    Logger,
    HttpCode,
    Post,
    Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserBodyDTO } from './dto/user-body.dto';

@Controller('hello')
export class UserController {
    constructor(private readonly userService: UserService) {}
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

    @Post('/content')
    async returing(@Body() body: UserBodyDTO) {
        try {
            const content = body.content;
            console.log(content);
            return this.userService.returing(content);
        } catch (error) {
            this.logger.error(error?.message ?? '');
            throw error;
        }
    }
}
