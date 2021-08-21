import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MoviesEntity } from "./movies/movies.entity";
import { MoviesModule } from "./movies/movies.module";
import { UserEntity } from "./user/user.entity";
import { UserModule } from "./user/user.module";

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123',
            database: 'postgres',
            autoLoadEntities: true,
            synchronize: true,
            entities: [MoviesEntity, UserEntity]
        }),
        UserModule,
        MoviesModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule { }