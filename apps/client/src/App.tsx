import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { SERVER_URL } from './utils/config'
import { trpc } from './utils/trpc'

export default function App() {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                loggerLink(),
                httpBatchLink({
                    url: SERVER_URL,
                }),
            ],
        })
    )

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {/* Your app here */}
                {/* <Product /> */}
                <Dashboard />
            </QueryClientProvider>
        </trpc.Provider>
    )
}
