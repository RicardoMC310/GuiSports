import { type Router } from "express";
import App from "./app";
import AppRouter from "./router";
import createUserRouter from "./modules/user/user.controller";
import env from "./shared/env.config";

const appRouter: AppRouter = new AppRouter();

const userRouter: Router = createUserRouter();

appRouter.registerRoute("/user", userRouter);

const parsed = parseInt(env.SERVER_PORT);
const port = isNaN(parsed) ? 8000 : parsed;

const app: App = new App(appRouter, env.SERVER_HOST, port);

app.run();