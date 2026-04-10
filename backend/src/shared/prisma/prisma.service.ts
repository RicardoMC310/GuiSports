import { PrismaClient } from "@prisma/client";
import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()
export default class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    constructor (
        private readonly configService: ConfigService
    ){
        const { Pool } = pg;
        const pool = new Pool({
            connectionString: configService.get<string>("DATABASE_URL") ?? ""
        });
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    async onModuleInit() {
        await this.$connect();
    }

}