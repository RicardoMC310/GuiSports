import express, { type Router, type Express } from "express";

export default class AppRouter {
    private router: Router;
    private routes: Map<string, Router>;

    constructor() {
        this.router = express.Router();
        this.routes = new Map<string, Router>();
    }

    registerRoute(prefix: string, router: Router): void {
        this.routes.set(prefix, router);
    }

    activeRouter(app: Express): void {
        this.registerAllRoutes();

        app.use(this.router);
    }

    private registerAllRoutes(): void {
        for (const [prefix, router] of this.routes) {
            this.router.use(prefix, router);
        }
    }
}