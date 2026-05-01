import { config as configDotEnv } from "dotenv";

configDotEnv();

class DotEnv {
    static getEnv(key: string, defaultValue?: string): string {
        const value = process.env[key];

        if (value === undefined || value === "") {
            if (defaultValue !== undefined) {
                return defaultValue;
            }

            throw new Error(`Missing environment variable: ${key}`);
        }

        return value;
    }
}

const env = {
    SERVER_HOST: DotEnv.getEnv("SERVER_PORT", "0.0.0.0"),
    SERVER_PORT: DotEnv.getEnv("SERVER_PORT", "8000"),
    DATABASE_URL: DotEnv.getEnv("DATABASE_URL")
};

export default env;