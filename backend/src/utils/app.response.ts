import { Response } from "express";

export default class AppResponse {
    constructor(
        private readonly responser: Response
    ) {}

    response(message: string, statusCode: number = 200, data: Object | Array<any> = []): void {
        this.responser.status(statusCode).json({
            message,
            statusCode,
            data
        });
    }
}