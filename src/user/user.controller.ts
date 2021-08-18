import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Signin, Signout } from 'src/interfaces/dtos/user.dto';

@Controller('user')
export class UserController {
    @Post('/signup')
    signup(@Body() body: Signout) {
        console.log(body);
        return 'signup';
    }

    @Post('/signin')
    signin(@Body() body: Signin) {
        console.log(body);
        return 'signin';
    }
    
    @Put()
    editAccount() {
        return 'Edit account';
    }
    
    @Delete()
    deleteAccount() {
        return 'Delete account';
    }
    
    @Get('/favorites')
    getInFavorites() {
        return 'GET favorites';
    }
    
    @Post('/favorites')
    addInFavorites(@Body() body: string) {
        console.log(body);
        return 'ADD favorites';
    }
    
    @Delete('/favorites')
    deletefromFavorites(@Body() body: string) {
        console.log(body);
        return 'DEL favorites';
    }
}
