// src/api/products.ts
import { request } from "@/api/http"
import type { Product, ProductListItem, ProductListResponse } from "@/types/product"

// Posibles formas crudas que devuelve la API hoy
type RawList = ProductListItem[] // ← array plano
type RawEnvelope = { items: ProductListItem[]; total?: number } // ← { items, total } opcional

export async function getProducts(
  q?: string,
  limit = 20,
  options?: { signal?: AbortSignal }
): Promise<ProductListResponse> {
  const qs = new URLSearchParams()
  if (q) qs.set("q", q)
  if (limit) qs.set("limit", String(limit))

  const path = `/products${qs.toString() ? `?${qs.toString()}` : ""}`

  // Pedimos lo crudo sin asumir forma:
  const raw = await request<RawList | RawEnvelope>(path, { signal: options?.signal })

  // Normalizamos a { items, total }
  const items: ProductListItem[] = Array.isArray(raw)
    ? raw
    : Array.isArray(raw.items)
    ? raw.items
    : []

  const total: number = Array.isArray(raw)
    ? raw.length
    : typeof raw.total === "number"
    ? raw.total
    : items.length

  return { items, total }
}

export function getProduct(id: string, options?: { signal?: AbortSignal }) {
  if (!id) throw new Error('getProduct: "id" es requerido')
  return request<Product>(`/products/${id}`, { signal: options?.signal })
}
