import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class UserEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 64 })
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password_hash!: string;
}