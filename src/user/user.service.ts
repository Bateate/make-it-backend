import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    create(email: string, password: string, username: string, first_name: string, last_name: string){
        const user = this.userRepository.create({email, username, password, first_name, last_name});

        return this.userRepository.save(user)
    }
 
}