import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MoviesEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    provider_id: string;

    @Column()
    comments: string;
}