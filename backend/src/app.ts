import express, { type Express } from "express";
import cors from "cors";
import AppRouter from "./router";
import loggerMiddleware from "./utils/logger.middleware";
import { errorMiddleware } from "./utils/error.middleware";
import cookieParser from "cookie-parser";

export default class App {
    private app: Express;
    private port: number;
    private host: string;
    private appRouter: AppRouter;

    constructor(appRouter: AppRouter, host: string = "0.0.0.0", port: number = 8000) {
        this.app = express();
        this.port = port;
        this.host = host;
        this.appRouter = appRouter;

        this.configureServer();
    }

    run(): void {
        this.app.listen(this.port, this.host, () => {
            console.log(`Servidor rodando em ${this.host}:${this.port}`);
        });
    }

    private configureServer(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(loggerMiddleware);
        this.app.use(cookieParser());
        
        this.app.on("mount", (err) => {
            console.error(err);
        });
        
        this.appRouter.activeRouter(this.app);
        this.app.use(errorMiddleware);
    }
}