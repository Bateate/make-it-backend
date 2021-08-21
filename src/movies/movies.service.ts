import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MoviesEntity } from "./movies.entity";
import { HttpService } from '@nestjs/axios';
import { first } from "rxjs";
import axios from "axios";


@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesEntity) private readonly moviesRepository: Repository<MoviesEntity>,
        private readonly http: HttpService
    ) { }

    public async getAll(){
        const res = await this.http.get('https://api.tvmaze.com/shows').toPromise();
        return this.getAllMaping(res.data);
    } 
    
    
    public async getById(id: string){
        const res = await this.http.get(`https://api.tvmaze.com/shows/${id}`).toPromise();
        return this.mapingMovie(res.data, false); 
    } 
    
    public async getByString(query: string){
        const res = await this.http.get(`https://api.tvmaze.com/search/shows?q=:${query}`).toPromise();
        return this.mapingMovie(res.data, true); 
    } 
    
    private mapingMovie (movie: any, isArray: boolean):any  {
        if(isArray){
            return movie.map(m => {
                return {
                    id: m.show.id,
                    name: m.show.name,
                    lenguage: m.show.lenguage,
                    genres: m.show.genres,
                    runtime: m.show.runtime,
                    premiered: m.show.premiered,
                    rating: m.show.rating,
                    image: m.show.image, 
                    summary: m.show.summary,
                    officialSite: m.show.officialSite
                }
            })
        }else{
            return {
                id: movie.id,
                name: movie.name,
                lenguage: movie.lenguage,
                genres: movie.genres,
                runtime: movie.runtime,
                premiered: movie.premiered,
                rating: movie.rating,
                image: movie.image, 
                summary: movie.summary,
                officialSite: movie.officialSite
            }
        }
    }

    private getAllMaping(movie: any){
        return movie.map(m => {
            return {
                id: m.id,
                name: m.name,
                lenguage: m.lenguage,
                genres: m.genres,
                runtime: m.runtime,
                premiered: m.premiered,
                rating: m.rating,
                image: m.image, 
                summary: m.summary,
                officialSite: m.officialSite
            }
        })
    }
}