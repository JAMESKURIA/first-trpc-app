import { createExpressMiddleware } from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'
import { CORS_WHITELISTED_URLS } from './lib/config'
import trpc from './lib/trpc'
import logger from './logger/index.logger'
import userRouter from './routers/users'

const appRouter = trpc.router({
    sayHi: trpc.procedure.query(() => {
        return 'Hello World!'
    }),
    log: trpc.procedure
        .input((input) => {
            if (typeof input !== 'string')
                throw Error('Invalid input: Expected string')

            return input
        })
        .mutation((req) => {
            logger.info(`Client says: ${req.input}`)
            return true
        }),
    users: userRouter,
})

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

app.use('/trpc', createExpressMiddleware({ router: appRouter }))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`))

export type AppRouter = typeof appRouter
