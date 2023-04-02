import trpc from '../lib/trpc'

const userRouter = trpc.router({
    getUser: trpc.procedure.query(() => {
        return {
            id: 1,
            name: 'James',
        }
    }),
})

export default userRouter
