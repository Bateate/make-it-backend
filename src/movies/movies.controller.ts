import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService, 
        private readonly http: HttpService
        ) { }
    @Get()
    getAllMovies() {
        return this.moviesService.getAll();
    }
    
    @Get('/:id')
    async getMovieById(@Param('id') id: string) {        
        const res = await this.moviesService.getById(id)
        return res;
    }
    
    @Post('/search')
    async searchMovieByString(@Body() body: any) {
        const res = await this.moviesService.getByString(body.query);
        return res;
    }

    @Post('/rate')
    rateMovie() {
        return 'Rate movie';
    }

    @Post('/comment')
    commentMovie(@Body() body: {user_id: string, movie_id: string, comments: string}) {
        
        return this.moviesService.create(body.user_id, body.movie_id, body.comments);;
    }

}
