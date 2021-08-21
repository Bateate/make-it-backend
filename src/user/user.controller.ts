import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Signin, Signout } from 'src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   constructor(private userService: UserService){}
   
    @Post('/signup')
    signup(@Body() body: Signout) {
        this.userService.create(body.email, body.username, body.password, body.first_name, body.last_name);
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
