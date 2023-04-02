import { createExpressMiddleware } from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'
import { CORS_WHITELISTED_URLS } from './lib/config'
import createContext from './lib/context'
import logger from './logger/index.logger'
import appRouter from './routers'

const app = express()

const whitelist = CORS_WHITELISTED_URLS

const corsOptions: cors.CorsOptions = {
    origin(origin, callback) {
        if (!origin) return

        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}

app.use(cors(corsOptions))

app.use(
    '/trpc',
    createExpressMiddleware({
        router: appRouter,
        createContext,
    })
)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`))
