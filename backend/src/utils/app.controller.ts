import { Request, Response, NextFunction } from "express";

type ApiResult<T = any> = {
    data?: T;
    message?: string;
    statusCode?: number;
};

type ApiControllerOptions<T = any> = {
    handler: (req: Request, res: Response) => Promise<T | ApiResult<T>> | T | ApiResult<T>;
    message?: string;
    statusCode?: number;
};

// type guard
function isApiResult<T = any>(obj: unknown): obj is ApiResult<T> {
    return (
        typeof obj === "object" &&
        obj !== null &&
        ("data" in obj || "message" in obj || "statusCode" in obj)
    );
}

export function ApiController<T = any>({
    handler,
    message = "OK",
    statusCode = 200,
}: ApiControllerOptions<T>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await handler(req, res);

            if (res.headersSent) return;

            if (isApiResult<T>(result)) {
                const finalStatus = result.statusCode ?? statusCode;
                const finalMessage = result.message ?? message;

                return res.status(finalStatus).json({
                    success: true,
                    message: finalMessage,
                    statusCode: finalStatus,
                    data: result.data,
                });
            }

            return res.status(statusCode).json({
                success: true,
                message,
                statusCode,
                data: result,
            });
        } catch (err) {
            next(err);
        }
    };
}