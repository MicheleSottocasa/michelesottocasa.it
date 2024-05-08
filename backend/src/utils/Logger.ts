export enum LogLevel {
    info = "INFO",
    debug = "DEBUG",
    error = "ERROR",
    warn = "WARN",
    success = "SUCCESS",
}

export default class Logger {
    constructor(private enableDebug: boolean){}
    private log(message: string, level: LogLevel, color: Colors) {
        console.log(
            `[${color}${level}${Colors.Reset}] [${new Date().toLocaleTimeString()}] ${level == LogLevel.error || level == LogLevel.debug || level == LogLevel.warn? color : ''} ${message}`,
            Colors.Reset
        );
    }

    public info(message: string) {
        this.log(message, LogLevel.info, Colors.Blue);
    }

    public debug(message: string) {
        if (this.enableDebug) this.log(message, LogLevel.debug, Colors.Dim);
    }

    public error(message: string) {
        this.log(message, LogLevel.error, Colors.Red);
    }

    public warn(message: string) {
        this.log(message, LogLevel.warn, Colors.Yellow);
    }

    public success(message: string) {
        this.log(message, LogLevel.success, Colors.Green);
    }
}

enum Colors {
    Black = "\x1b[30m",
    Red = "\x1b[31m",
    Green = "\x1b[32m",
    Yellow = "\x1b[33m",
    Blue = "\x1b[34m",
    Magenta = "\x1b[35m",
    Cyan = "\x1b[36m",
    White = "\x1b[37m",
    Gray = "\x1b[90m",

    Reset = "\x1b[0m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",
}