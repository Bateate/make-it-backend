import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAllMovies() {
        return "Get all movies";
    }

    @Get('/:id')
    getMovieById(@Param('id') id: any) {
        console.log(id);
        
        return 'Get movie by id';
    }

    @Post('/search')
    searchMovieByString(@Body() body: string) {
        console.log(body);
        
        return 'Searched movies';
    }

    @Post()
    addMoviesInFavorites(@Body() body: any) {
        console.log("BODY: ", body);

        return 'Added in favorites';
    }

}
