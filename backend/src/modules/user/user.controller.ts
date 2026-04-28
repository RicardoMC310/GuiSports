import { ApiController } from "@/utils/app.controller";
import express, { type Router, type Request, type Response } from "express";

export default function createUserRouter(): Router {
    const router: Router = express.Router();

    router.post("/register", ApiController({
        handler: async (req: Request, res: Response) => {},
        message: "Usuário registrado",
        statusCode: 201
    }));

    return router;
}