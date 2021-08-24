import { HttpService } from '@nestjs/axios';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from 'src/dtos/user.dto';
import { UserService } from 'src/user/user.service';
import { Repository } from "typeorm";
import { MoviesEntity } from "./movies.entity";


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
        const comments = await this.moviesRepository.find({ provider_id: id });
        return this.mapingMovie(res.data, false, comments); 
    } 
    
    public async getByString(query: string){
        const res = await this.http.get(`https://api.tvmaze.com/search/shows?q=:${query}`).toPromise();
        // console.log("STRING IS SENDET: ", res);
        
        return this.mapingMovie(res.data, true); 
    } 

    create(user_id: string, provider_id: string, comments: string){
        const user = this.moviesRepository.create({user_id, provider_id, comments});
        return this.moviesRepository.save(user)
    }
    
    private mapingMovie (movie: any, isArray: boolean, comments: any = ''):any  {
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
                    officialSite: m.show.officialSite,
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
                officialSite: movie.officialSite,
                comments: comments,
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