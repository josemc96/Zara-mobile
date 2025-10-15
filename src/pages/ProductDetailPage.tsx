import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProduct } from "@/api/products"
import { qk } from "@/api/keys" // si no lo usas, reemplaza por ['product', id]
import { getImageForColor, getPriceForStorage, capacities, colors } from "@/utils/product-mappers"
import { formatEUR } from "@/utils/money"

export default function ProductDetailPage() {
  const { id = "" } = useParams<{ id: string }>()

  // 1) Fetch del detalle con React Query
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: qk.product(id), // ['product','v1', id]
    queryFn: () => getProduct(id), // tu servicio con fetch wrapper
    enabled: Boolean(id), // no dispares si no hay id
    staleTime: 5 * 60_000, // 5 min “fresco” (detalle cambia poco)
    retry: 2, // reintenta fallos puntuales
  })

  // 2) Estado UI (selecciones del usuario)
  const [color, setColor] = useState("")
  const [capacity, setCapacity] = useState("")

  // 3) Derivados (imagen y precio) con helpers
  const img = useMemo(() => (product ? getImageForColor(product, color) : ""), [product, color])
  const price = useMemo(
    () => (product ? getPriceForStorage(product, capacity) : 0),
    [product, capacity]
  )
  const canAdd = Boolean(color && capacity)

  if (isLoading) return <p>Cargando…</p>
  if (isError || !product) return <p role="alert">No se pudo cargar el producto</p>

  return (
    <article>
      {img && <img src={img} alt={`${product.name}${color ? " " + color : ""}`} />}
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <label>
        Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Selecciona</option>
          {colors(product).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label>
        Almacenamiento
        <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
          <option value="">Selecciona</option>
          {capacities(product).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <p>
        <strong>{formatEUR(price)}</strong>
      </p>
      <button disabled={!canAdd}>Añadir al carrito</button>
    </article>
  )
}
