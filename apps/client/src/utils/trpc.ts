/* eslint-disable import/no-relative-packages */
import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '../../../server/src'

export const trpc = createTRPCReact<AppRouter>()
