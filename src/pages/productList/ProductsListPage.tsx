import { useEffect, useState, useDeferredValue } from "react"
import { useQuery } from "@tanstack/react-query"
import { getProducts, qk } from "@/api"
import type { ProductListItem } from "@/types/product"
import { ProductCard } from "@/components"
import {
  Page,
  HeaderBar,
  SearchInput,
  Status,
  Grid,
  Cell,
  ErrorMessage,
  ErrorIcon,
  ErrorText,
  EmptyState,
  EmptyIcon,
  EmptyText,
} from "./ProductsList.styles"

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

      {isError && (
        <ErrorMessage role="alert">
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorText>No se pudo cargar el listado. Por favor, intenta de nuevo.</ErrorText>
        </ErrorMessage>
      )}

      <Grid>
        {data.length
          ? data.slice(0, 20).map((p, i) => (
              <Cell key={`${p.id}-${i}`}>
                {" "}
                <ProductCard
                  id={p.id}
                  brand={p.brand}
                  name={p.name}
                  basePrice={p.basePrice}
                  imageUrl={p.imageUrl}
                />
              </Cell>
            ))
          : !isFetching && (
              <EmptyState>
                <EmptyIcon>🔍</EmptyIcon>
                <EmptyText>No se encontraron productos</EmptyText>
              </EmptyState>
            )}
      </Grid>
    </Page>
  )
}
