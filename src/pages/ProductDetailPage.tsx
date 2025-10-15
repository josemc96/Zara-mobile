import { useParams } from "react-router-dom"

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  return (
    <section data-testid="page-product-detail">
      <h1>Detalle de producto</h1>
      <p>
        ID: <strong>{id}</strong>
      </p>
      <p>Pronto: colorOptions, storageOptions y precio dinámico.</p>
    </section>
  )
}
