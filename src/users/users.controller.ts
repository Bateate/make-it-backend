import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post('/register')
    register(@Body() body: string) {
        console.log(body);
        return 'Register';
    }

    @Post('/login')
    login(@Body() body: string) {
        console.log(body);
        return 'Login';
    }

    @Put()
    editAccount() {
        return 'Edit account';
    }

    @Delete()
    deleteAccount() {
        return 'Delete account';
    }

}
