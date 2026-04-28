import { Request, Response, NextFunction } from "express";
import AppError from "./app.error";

export function errorMiddleware(
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    if (err instanceof AppError) {
        return res.status(err.status).json({
            message: err.message,
            statusCode: err.status,
        });
    }

    if (err instanceof Error) {
        return res.status(500).json({
            message: err.message,
            statusCode: 500,
        });
    }

    return res.status(500).json({
        message: "Internal Server Error",
        statusCode: 500,
    });
}