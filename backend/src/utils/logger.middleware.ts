import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {

    const start = Date.now();

    res.on("finish", () => {
        const ms = Date.now() - start;

        const method = colorMethod(req.method);
        const status = colorStatus(res.statusCode);
        const url = req.originalUrl;

        const time = colorTime(ms);

        console.log(`${method} ${formatUrl(url, 40)} ${status} ${time}`);
    });

    next();
}

function colorMethod(method: string): string {
    const map: Record<string, (m: string) => string> = {
        GET: m => chalk.bgYellow.black(` ${m} `),
        POST: m => chalk.bgGreen.black(` ${m} `),
        PUT: m => chalk.bgBlue.white(` ${m} `),
        PATCH: m => chalk.bgCyan.black(` ${m} `),
        DELETE: m => chalk.bgRed.white(` ${m} `),
        OPTIONS: m => chalk.bgGray.white(` ${m} `),
        HEAD: m => chalk.bgMagenta.white(` ${m} `),
    };

    return map[method]?.(pad(method, 7)) ?? pad(method, 7);
}

function colorStatus(code: number): string {
    const str = ` ${code} `;

    if (code >= 500) return chalk.bgRed.white(str);
    if (code >= 400) return chalk.bgYellow.black(str);
    if (code >= 300) return chalk.bgCyan.black(str);
    if (code >= 200) return chalk.bgGreen.black(str);

    return code.toString();
}

function colorTime(ms: number): string {
    if (ms > 1000) return chalk.bgRed.white(` ${ms}ms `);
    if (ms > 500) return chalk.bgYellow.black(` ${ms}ms `);
    return chalk.bgBlackBright.white(` ${ms}ms `);
}

function pad(str: string, len: number): string {
    return str.padEnd(len, " ");
}

function formatUrl(url: string, max = 40): string {
    if (url.length > max) {
        return url.slice(0, max - 3) + "...";
    }
    return url.padEnd(max, " ");
}