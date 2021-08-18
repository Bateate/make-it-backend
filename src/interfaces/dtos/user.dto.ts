import { IsEmail, IsString } from 'class-validator'

export class Signin {
    @IsString()
    username: string; 
    @IsString()
    password: string; 
}

export class Signout {
    @IsEmail()
    email: string; 
    @IsString()
    username: string; 
    @IsString()
    password: string; 
}