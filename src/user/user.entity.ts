import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column("simple-array")
    favorites?: string[];
}