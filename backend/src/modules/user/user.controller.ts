import { ApiController } from "@/utils/app.controller";
import express, { type Router, type Request, type Response } from "express";
import UserService from "./user.service";
import createUserDTO from "./dtos/create-user-dto";

export default function createUserRouter(
    userService: UserService
): Router {
    const router: Router = express.Router();

    router.post("/register", ApiController({
        handler: async (req: Request, res: Response) => {
            const body: createUserDTO = req.body;

            await userService.register(body);
        },
        message: "Usuário registrado",
        statusCode: 201
    }));

    return router;
}