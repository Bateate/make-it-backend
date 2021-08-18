import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GetMovieByIdDto, SearchMovieByStringDto } from 'src/interfaces/dtos/movies.dto';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies() {
        return "GET all movies";
    }

    @Get('/:id')
    getMovieById(@Param('id') id: GetMovieByIdDto) {
        console.log(id);
        return "GET movie by id"        
    }

    @Post('/search')
    searchMovieByString(@Body() body: SearchMovieByStringDto) {
        console.log(body);
        return 'Searched movies by string';
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
