import trpc from '@app/lib/trpc'

const indexRouter = trpc.router({
    getUser: trpc.procedure.query(() => {
        return {
            id: 1,
            name: 'James',
        }
    }),
})

export default indexRouter
