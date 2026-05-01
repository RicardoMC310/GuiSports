import { type Router } from "express";
import App from "./app";
import AppRouter from "./router";
import createUserRouter from "./modules/user/user.controller";
import env from "./shared/env.config";
import IUserRepository from "./modules/user/user.respository.interface";
import UserRepositoryImpl from "./modules/user/user.repository";
import UserService from "./modules/user/user.service";

const appRouter: AppRouter = new AppRouter();

const userRepository: IUserRepository = new UserRepositoryImpl(); 
const userService: UserService = new UserService(userRepository);
const userRouter: Router = createUserRouter(userService);

appRouter.registerRoute("/user", userRouter);

const parsed = parseInt(env.SERVER_PORT);
const port = isNaN(parsed) ? 8000 : parsed;

const app: App = new App(appRouter, env.SERVER_HOST, port);

app.run();