import IUserRepository from "./user.respository.interface";
import db from "@/shared/database.config";

export default class UserRepositoryImpl implements IUserRepository {
    async register(name: string, email: string, passwordHash: string): Promise<void> {
        const result = await db`INSERT INTO users(name, email, password_hash) VALUES(${name}, ${email}, ${passwordHash})`;

        console.log(result);
    }

}