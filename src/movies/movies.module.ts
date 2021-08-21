import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesEntity } from './movies.entity';
import { MoviesService } from './movies.service';

@Module({
    imports: [TypeOrmModule.forFeature([MoviesEntity]), HttpModule],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule { }
