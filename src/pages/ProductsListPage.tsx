// src/pages/ProductsListPage.tsx
import { useEffect, useState, useDeferredValue } from "react"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/api/products"
import { qk } from "@/api/keys"
import type { ProductListItem } from "@/types/product"
import { Link } from "react-router-dom"

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

  const {
    data = [],
    isFetching,
    isError,
  } = useQuery<ProductListItem[]>({
    queryKey: qk.products(deferredTerm, 20),
    queryFn: ({ signal }) => getProducts(deferredTerm, 20, 1, { signal }),
    retry: 1,
    placeholderData: (prev) => prev,
    staleTime: 10_000,
  })

  return (
    <section>
      <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <input
          type="search"
          placeholder="Buscar móviles…"
          aria-label="Buscar móviles"
          value={rawTerm}
          onChange={(e) => setRawTerm(e.target.value)}
          style={{ padding: 8, flex: 1 }}
        />
        <p role="status" style={{ margin: 0 }}>
          {isFetching ? "Buscando…" : `${data.length} resultados`}
        </p>
      </header>

      {isError && <p role="alert">No se pudo cargar el listado.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
          padding: 20,
        }}
      >
        {data.length
          ? data.slice(0, 20).map((p, i) => (
              <Link
                key={`${p.id}-${i}`} // mantiene duplicados sin warning
                to={`/products/${p.id}`}
                aria-label={`Ver ${p.brand} ${p.name}`}
                style={{
                  display: "grid",
                  gap: 8,
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: 12,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <strong>{p.name}</strong>
                <span>{p.brand}</span>
                <span>€{p.basePrice}</span>
                <small style={{ color: "#9ca3af" }}>ID: {p.id}</small>
              </Link>
            ))
          : !isFetching && <p>No products found</p>}
      </div>
    </section>
  )
}
