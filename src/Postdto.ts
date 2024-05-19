import {
    Contains,
    IsInt, IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    MinLength,
    MaxLength,
    ValidateNested
} from 'class-validator';
import { Tag } from './Tag';


export class Post {
    // @Length(10, 20)
    // title: string;
    @MinLength(10, {
        message: 'Title is too short',
    })
    @MaxLength(50, {
        message: 'Title is too long',
    })
    title: string;

    @Contains('hello')
    text: string;

    @IsInt()
    @Min(0)
    @Max(10)
    rating: number;

    @IsEmail()
    email: string;

    @IsFQDN()
    site: string;

    @IsDate()
    createDate: Date;

    @MaxLength(20, {
        each: true,
    })
    tags: string[];

    @ValidateNested()
    user: Tag;
}
