import logger from '@app/logger/index.logger'
import trpc from '../lib/trpc'
import userRouter from './users'

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

export type AppRouter = typeof appRouter
export default appRouter
