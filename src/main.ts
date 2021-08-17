import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MoviesModule } from './movies/movies.module'

async function bootstrap() {
    const app = await NestFactory.create(MoviesModule);
    app.useGlobalPipes(
        new ValidationPipe()
    );
    await app.listen(3000);
}
bootstrap();
