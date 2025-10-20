import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/store"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { GridProvider } from "@/styles/grid"

type Props = {
  children: React.ReactNode
  devtools?: boolean
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    },
  },
})

export default function GlobalProvider({ children }: Props) {
  return (
    <GridProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ReduxProvider>
    </GridProvider>
  )
}
