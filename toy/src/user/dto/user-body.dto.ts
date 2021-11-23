import { IsDefined, IsNotEmpty } from 'class-validator';

export class UserBodyDTO {
    @IsDefined()
    @IsNotEmpty()
    content!: string;
}
