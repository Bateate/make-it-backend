import { IsEmail, IsString } from 'class-validator'

export class Signin {
    @IsEmail()
    email: string;
    
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
    
    @IsString()
    first_name: string;
    
    @IsString()
    last_name: string;
}