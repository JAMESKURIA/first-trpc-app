import { TRPCError, inferAsyncReturnType, initTRPC } from '@trpc/server'
import createContext from './context'

const trpc = initTRPC
    .context<inferAsyncReturnType<typeof createContext>>()
    .create()

const isAdminMiddleware = trpc.middleware(({ ctx, next }) => {
    if (!ctx.isAdmin) {
        throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({ ctx: { user: { id: 1 } } })
})

export const adminProcedure = trpc.procedure.use(isAdminMiddleware)

export default trpc
