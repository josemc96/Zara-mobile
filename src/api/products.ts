import { request } from "@/api/http"
import type { Product } from "@/types/product"
import type { ProductListItem } from "@/types/product"

export async function getProducts(
  q = "",
  limit = 20,
  page = 1,
  options?: { signal?: AbortSignal }
): Promise<ProductListItem[]> {
  const qs = new URLSearchParams()

  if (q) {
    qs.set("q", q)
    qs.set("search", q)
  }

  if (limit) qs.set("limit", String(limit))
  if (page) qs.set("page", String(page))

  const query = qs.toString()
  const path = `/products${query ? `?${query}` : ""}`

  return request<ProductListItem[]>(path, { signal: options?.signal })
}

export function getProduct(id: string, options?: { signal?: AbortSignal }) {
  if (!id) throw new Error('getProduct: "id" es requerido')
  return request<Product>(`/products/${id}`, { signal: options?.signal })
}
