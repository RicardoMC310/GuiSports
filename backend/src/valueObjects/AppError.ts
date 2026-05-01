export default class AppError extends Error {
    constructor(
        public message: string,
        public statusCode: number = 200
    ) {
        super(message);
    }
}