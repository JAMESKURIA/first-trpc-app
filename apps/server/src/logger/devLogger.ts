import { createLogger, format, transports } from 'winston'

const { combine, timestamp, printf, colorize } = format

// eslint-disable-next-line @typescript-eslint/no-shadow
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp}  [${level}]: ${message}`
})

export default function devLogger() {
    return createLogger({
        level: 'debug',
        format: combine(
            colorize(),
            timestamp({ format: 'HH:mm:ss' }),
            myFormat
        ),
        // defaultMeta: { service: 'user-service' },
        transports: [new transports.Console()],
    })
}
