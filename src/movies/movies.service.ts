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

    async testDb() {
        // const res = await this.http.get('https://api.tvmaze.com/shows/82').pipe(first()) as any;
        // const res = await axios.get('https://api.tvmaze.com/search/shows?q= ') as any;
        // console.log(res.data);
        return await this.http.get('https://api.tvmaze.com/shows')
        .subscribe(i => {
            return i
        });
        
        // return res;
    }

    public async getAll(){
        const res = await this.http.get('https://api.tvmaze.com/shows')
        .subscribe(i => {
            console.log(i);
            return i;
        });
        console.log("END: ============================================");
        
        return res;
    } 


    public async getById(id: string){
        const res = await this.http.get('https://api.tvmaze.com/shows/'+id)
        .subscribe(i => {
            return i.data
        });
        return await res;
    } 

    public async getByString(query: string){
        return await this.http.get(`https://api.tvmaze.com/search/shows?q=:${query}`)
        .subscribe(i => {
            return i.data[0]
        });
    } 
}