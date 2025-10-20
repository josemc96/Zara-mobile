// src/routes/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Layout } from "@/components"
import GlobalProvider from "@/GlobalProvider"

const ProductsListPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.ProductsListPage }))
)
const ProductDetailPage = lazy(() =>
  import("@/pages").then((module) => ({ default: module.ProductDetailsPage }))
)
const CartPage = lazy(() => import("@/pages").then((module) => ({ default: module.CartPage })))

export default function AppRouter() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  )
}
