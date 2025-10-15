// src/routes/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
// import Layout from './Layout';

const ProductsListPage = lazy(() => import("@/pages/ProductsListPage"))
const ProductDetailPage = lazy(() => import("@/pages/ProductDetailPage"))
const CartPage = lazy(() => import("@/pages/CartPage"))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Cargando…</p>}>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<ProductsListPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
