import argon from "argon2";

export async function hash(password: string): Promise<string> {
    return await argon.hash(password, {
        type: argon.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 6,
        parallelism: 3
    });
}   

export async function verigy(password: string, hash: string): Promise<boolean> {
    return await argon.verify(hash, password);
}   