import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Signin, Signup } from 'src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   constructor(private userService: UserService){}
   
    @Post('/signup')
    signup(@Body() body: Signup) {
        const res = this.userService.create(body.email, body.username, body.password, body.favorites);
        return res;
    }
    
    @Post('/signin')
    signin(@Body() body: Signin) {
        const res = this.userService.getByEmail(body.username, body.password)
        return res;
    }
    
    @Put()
    editAccount() {
        return 'Edit account';
    }

    @Get("/:id")
    getUserById(@Query('id') id: string) {
        console.log("getUserById ID: ", id);
        return this.userService.findOne(id)

    }

    @Get("/:username_id")
    getUsernameById(@Query('username_id') username_id: string) {
        console.log("getUsernameById ID: ", username_id);
        return (this.userService.findOneUsername(username_id))

    }
    
    @Delete()
    deleteAccount() {
        return 'Delete account';
    }
    
    @Get('/favorites')
    getInFavorites() {
        console.log("Favorites");
        
        return 'GET favorites';
    }
    
    @Post('/favorites')
    addInFavorites(@Body() body: {movie_id: string, user_id: string}) {
        const res = this.userService.addInFavorites(body.movie_id, body.user_id)
        return res;
    }
    
    @Delete('/favorites')
    deletefromFavorites(@Body() body: {movie_id: string, user_id: string}) {
        return this.userService.removeFromFavorites(body.movie_id, body.user_id);
    }
}
