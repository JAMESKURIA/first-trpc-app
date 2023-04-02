import { z } from 'zod'

export const getUserRequest = z.object({
    id: z.number(),
})

export const getUserResponse = z.object({
    id: z.number(),
    name: z.string(),
})
