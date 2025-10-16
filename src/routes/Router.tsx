// src/routes/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Layout from "./Layout"

const ProductsListPage = lazy(() => import("@/pages/ProductsListPage"))
const ProductDetailPage = lazy(() => import("@/pages/ProductDetailPage"))
const CartPage = lazy(() => import("@/pages/cart/CartPage"))

//TODO DESPUES DE CREAR EL CONTEXT/PROVIDER DE REDUX METER EN UN GENERAL PROVIDER  LOS 2
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // reintenta fallos puntuales
      staleTime: 30_000, // 30s de datos “frescos”
      refetchOnWindowFocus: false, // no refrescar al volver a la pestaña
    },
  },
})

export default function AppRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<p>Cargando…</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ProductsListPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
