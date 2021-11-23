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
    @HttpCode(200)
    async showing(): Promise<string> {
        try {
            return await this.userService.showing();
        } catch (error) {
            this.logger.error(error?.message ?? '');
            throw error;
        }
    }

    @Get('/:content')
    @HttpCode(200)
    async reShowing(@Param('content') content: string): Promise<string> {
        try {
            return await this.userService.reShowing(content);
        } catch (error) {
            this.logger.error(error?.message ?? '');
            throw error;
        }
    }

    @Post('/content')
    @HttpCode(201)
    async returing(@Body() body: UserBodyDTO): Promise<string> {
        try {
            const content = body.content;
            console.log(content);
            return await this.userService.returing(content);
        } catch (error) {
            this.logger.error(error?.message ?? '');
            throw error;
        }
    }
}
