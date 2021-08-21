import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetMovieByIdDto, SearchMovieByStringDto } from 'src/dtos/movies.dto';
import { MoviesService } from './movies.service';
import { AxiosResponse } from 'axios'
import { HttpService } from '@nestjs/axios';


@Controller('movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService, 
        private readonly http: HttpService
        ) { }


    @Get()
    getAllMovies() {
        const res = this.moviesService.getAll(); 
        return res;
    }
    
    @Get('/:id')
    async getMovieById(@Param('id') id: string) {
        return await this.moviesService.getById(id);       
    }
    
    @Post('/search')
    async searchMovieByString(@Body() body: any) {
        // this.moviesService.testDb()
        return await this.moviesService.getByString(body.query);
    }

    @Post('/rate')
    rateMovie() {
        return 'Rate movie';
    }

    @Post('/comment')
    commentMovie() {
        return 'Comment movie';
    }

}
