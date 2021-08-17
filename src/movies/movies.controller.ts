import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GetMovieByIdDto, SearchMovieByStringDto } from 'src/interfaces/dtos/movies.dto';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies() {
        return "Get all movies";
    }

    @Get('/:id')
    getMovieById(@Param('id') id: GetMovieByIdDto) {
        console.log(id);        
        // return this.httpService.get('http://localhost:3000/cats');
    }

    @Post('/search')
    searchMovieByString(@Body() body: SearchMovieByStringDto) {
        console.log(body);
        return 'Searched movies';
    }

    @Post('/favorites')
    addMoviesInFavorites(@Body() body: any) {
        console.log("BODY: ", body);
        return 'Added in favorites';
    }

    @Delete('/favorites')
    removeMoviesFromFavorites(@Body() body: any) {
        console.log("BODY: ", body);
        return 'Remove from favorites';
    }

}
