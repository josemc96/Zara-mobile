import { useEffect, useState, useDeferredValue } from "react"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/api/products"
import { qk } from "@/api/keys"
import type { ProductListItem } from "@/types/product"

import ProductCard from "@/features/products/components/ProductCard"
import { Page, HeaderBar, SearchInput, Status, Grid, Cell } from "./ProductsList.styles"

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
    <Page>
      <HeaderBar>
        <SearchInput
          placeholder="Buscar móviles…"
          aria-label="Buscar móviles"
          value={rawTerm}
          onChange={(e) => setRawTerm(e.target.value)}
        />
        <Status role="status">{isFetching ? "Buscando…" : `${data.length} resultados`}</Status>
      </HeaderBar>

      {isError && <p role="alert">No se pudo cargar el listado.</p>}

      <Grid>
        {data.length
          ? data.slice(0, 20).map((p, i) => (
              <Cell key={`${p.id}-${i}`}>
                {" "}
                {/* evita colisión si llegan ids duplicados */}
                <ProductCard
                  id={p.id}
                  brand={p.brand}
                  name={p.name}
                  basePrice={p.basePrice}
                  imageUrl={p.imageUrl}
                />
              </Cell>
            ))
          : !isFetching && <p>No products found</p>}
      </Grid>
    </Page>
  )
}
