import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { User } from "src/dtos/user.dto";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    create(email: string, username: string, password: string, favorites: string[]){
        const user = this.userRepository.create({email, username, password, favorites});
        return this.userRepository.save(user)
    }

    getByEmail(username: string, password: string){
        return this.userRepository.findOne({ username: username, password: password });
    }

    async addInFavorites(movie_id: string, user_id: string){
        let user = await this.findOne(user_id)
        console.log("USER: ", user);
        if(!user){
            throw new Error('user not found');
        }
        user.favorites.push(movie_id)
        return this.userRepository.save(user);
    }

    async removeFromFavorites(movie_id: string, user_id: string){
        let user = await this.findOne(user_id)
        console.log("USER: ", user);
        if(!user){
            throw new Error('user not found');
        }
        let newFavorites = user.favorites.map((movie) => {
            if(movie != movie_id){
                return movie
            }
        })
        console.log("newFavorites", newFavorites);
        
        user.favorites = newFavorites;
        console.log("USER: ", user);
        // user.favorites.push(movie_id)
        return this.userRepository.save(user);
    }

    async findOneUsername(id: string) {
        console.log("HERE");
        
        const res = await this.userRepository.findOne(id);
         
        return res;
    }

    async findOne(id: string) {
        const res = await this.userRepository.findOne(id);
        return res;
    }

    find() {}

 
}