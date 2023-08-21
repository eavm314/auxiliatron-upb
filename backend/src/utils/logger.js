const winston = require("winston");
const logger = winston.createLogger({
    // Level en .env
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({timestamp, level, message}) => {
            return `[${timestamp}] ${level}: ${message}`
        })
    )
});

module.exports = logger;