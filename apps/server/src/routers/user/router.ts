import logger from '@app/logger/index.logger'
import trpc, { adminProcedure } from '../../lib/trpc'
import {
    getUserRequest,
    getUserResponse,
    updateUserRequest,
    updateUserResponse,
} from './model'
import { getAllUsers, getUserById } from './usertrans'

const userProcedure = trpc.procedure

export const userRouter = trpc.router({
    get: userProcedure
        .input(getUserRequest)
        .output(getUserResponse)
        .query(({ input: { id } }) => getUserById(id)),
    getAll: adminProcedure.output(getUserResponse.array()).query(({ ctx }) => {
        logger.info(ctx.user)
        return getAllUsers()
    }),
    update: userProcedure
        .input(updateUserRequest)
        .output(updateUserResponse)
        .mutation((req) => {
            const { input } = req

            logger.info(`Updating user ${input.id} to have name ${input.name}`)

            return {
                id: input.id,
                name: input.name,
                password: 'SecurePassword',
            }
        }),
})

export default userRouter
