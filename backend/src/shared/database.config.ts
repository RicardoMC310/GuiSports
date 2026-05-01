import env from "./env.config";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";

const db: NeonQueryFunction<any, boolean> = neon(env.DATABASE_URL);

export default db;
