import { IsArray, IsEmail, IsString } from 'class-validator'

export class Signin {
    @IsString()
    username: string;
    
    @IsString()
    password: string;
    
    
}

export class Signup {
    @IsEmail()
    email: string; 
    @IsString()
    username: string;
    @IsString()
    password: string; 
    @IsArray()
    favorites: string[]; 
}


export class User {
    @IsEmail()
    email: string; 
    @IsString()
    username: string;
    @IsArray()
    favorites: string[]; 
}