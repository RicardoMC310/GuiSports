import { Injectable } from "@nestjs/common";
import argon from "argon2";

@Injectable()
export default class PasswordService {
    async hash(password: string): Promise<string> {
        return await argon.hash(password, {
            type: argon.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 6,
            parallelism: 3
        });
    }

    async compare(hash: string, password: string): Promise<boolean> {
        return await argon.verify(hash, password);
    }
}