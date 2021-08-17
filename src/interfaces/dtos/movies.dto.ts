import { IsString } from 'class-validator'

export class GetMovieByIdDto {
    @IsString()
    id: string; 
}

export class SearchMovieByStringDto {
    @IsString()
    query: string; 
}