import { useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProduct } from "@/api/products"
import { qk } from "@/api/keys"
import { getImageForColor, getPriceForStorage, capacities, colors } from "@/utils/product-mappers"
import { useAppDispatch } from "@/store/hooks"
import { addItem } from "@/features/cart/cartSlice"
import { BackButton, BackArrow } from "./ProductDetailPage.styles"

export default function ProductDetailPage() {
  const { id = "" } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

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

  const [color, setColor] = useState("")
  const [capacity, setCapacity] = useState("")

  const img = useMemo(() => (product ? getImageForColor(product, color) : ""), [product, color])
  const price = useMemo(
    () => (product ? getPriceForStorage(product, capacity) : 0),
    [product, capacity]
  )

  const canAdd = Boolean(product && color && capacity && price > 0)

  const handleAdd = () => {
    if (!product || !canAdd) return
    dispatch(
      addItem({
        productId: product.id,
        name: product.name,
        brand: product.brand,
        color,
        capacity,
        unitPrice: price,
        imageUrl: img,
        qty: 1,
      })
    )
    // (Opcional) mostrar un toast o navegación al carrito
  }

  if (isLoading) return <p>Cargando…</p>
  if (isError || !product) return <p role="alert">No se pudo cargar el producto</p>

  return (
    <article>
      <BackButton to="/" aria-label="Back to products">
        <BackArrow aria-hidden />
        BACK
      </BackButton>
      {img && <img src={img} alt={`${product.name}${color ? " " + color : ""}`} />}
      <h1>{product.name}</h1>

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
        <strong>€{price}</strong>
      </p>
      <button onClick={handleAdd} disabled={!canAdd}>
        Añadir al carrito
      </button>
    </article>
  )
}
