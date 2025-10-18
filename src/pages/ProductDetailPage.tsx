import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProduct } from "@/api/products"
import { qk } from "@/api/keys"
import { BackButton, BackArrow } from "./ProductDetailPage.styles"
import ProductDetails from "@/features/products/components/ProductDetails"

export default function ProductDetailPage() {
  const { id = "" } = useParams<{ id: string }>()

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: qk.product(id),
    queryFn: () => getProduct(id),
    enabled: Boolean(id),
    staleTime: 5 * 60_000,
  })

  if (isLoading) return <p>Cargando…</p>
  if (isError || !product) return <p role="alert">No se pudo cargar el producto</p>

  return (
    <>
      <BackButton to="/" aria-label="Back to products">
        <BackArrow aria-hidden />
        BACK
      </BackButton>
      <ProductDetails product={product} />
    </>
  )
}
