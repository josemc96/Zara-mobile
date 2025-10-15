import React from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppRouter from "./routes/Router"
// import { GlobalStyle } from './components/style/generalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

const container = document.getElementById("root")
if (!container) {
  throw new Error("No se encontró el elemento #root en index.html")
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <GlobalStyle /> */}
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
