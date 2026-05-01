import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import AppError from "../../valueObjects/AppError";
import { Response } from "express";

@Catch(AppError)
export default class AppErrorFilter implements ExceptionFilter {
    catch(exception: AppError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let statusCode = exception.statusCode ?? 500;

        response.status(statusCode).json({
            message: exception.message
        });
    }

}