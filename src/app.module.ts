import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MoviesModule } from "./movies/movies.module";
import { UserModule } from "./user/user.module";



@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        database: 'postgres',
        entities: [],
        synchronize: true
    }), 
    UserModule, 
    MoviesModule],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}