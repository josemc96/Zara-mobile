import { useEffect, useState, useDeferredValue } from "react"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/api/products"
import { qk } from "@/api/keys"
import type { ProductListItem } from "@/types/product"
// import ProductCard from '@/features/products/components/ProductCard';

function useDebounce(value: string, delay = 350) {
  const [v, setV] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return v
}

export default function ProductsListPage() {
  const [rawTerm, setRawTerm] = useState("")
  const term = useDebounce(rawTerm, 350)
  const deferredTerm = useDeferredValue(term)

  const { data, isFetching, isError } = useQuery({
    queryKey: qk.products(deferredTerm, 20),
    // queryKey: ['products', { q: deferredTerm, limit: 20 }], // ← alternativa sin qk
    queryFn: ({ signal }) => getProducts(deferredTerm, 20, { signal }),
    retry: 0,
    placeholderData: (prev) => prev,
    staleTime: 10_000,
  })
  return (
    <section>
      <header style={{ display: "flex", gap: 12 }}>
        <input
          type="search"
          placeholder="Buscar móviles…"
          aria-label="Buscar móviles"
          onChange={(e) => setRawTerm(e.target.value)}
        />
        <p role="status">
          {isFetching ? "Buscando…" : `${Array.isArray(data) ? data.length : 0} resultados`}
        </p>
      </header>

      {isError && <p role="alert">No se pudo buscar ahora</p>}

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          padding: "20px",
        }}
      >
        {Array.isArray(data) && data.length ? (
          data.slice(0, 20).map((p: ProductListItem) => (
            <div
              key={p.id}
              style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
            >
              <h3>{p.name}</h3>
              <p>
                <strong>Brand:</strong> {p.brand}
              </p>
              <p>
                <strong>Price:</strong> €{p.basePrice}
              </p>
              <p>
                <strong>ID:</strong> {p.id}
              </p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </section>
  )
}
