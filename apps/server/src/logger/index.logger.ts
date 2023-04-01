import winston from 'winston'
import devLogger from './devLogger'
import productionLogger from './productionLogger'

let logger: winston.Logger | null = null

if (process.env.NODE_ENV === 'production') {
    logger = productionLogger()
}

if (process.env.NODE_ENV !== 'production') {
    logger = devLogger()
}

export default logger as winston.Logger
