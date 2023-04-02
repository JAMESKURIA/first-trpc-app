import trpc from '../lib/trpc'
import { userRouter } from './user'

const appRouter = trpc.router({
    users: userRouter,
})

export type AppRouter = typeof appRouter

export default appRouter
