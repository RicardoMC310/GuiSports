
export default class AppError extends Error {
    public readonly isAppError = true;

    constructor(
        message: string,
        public status: number = 500
    ) {
        super(message);
    }

}