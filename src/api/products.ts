// src/api/products.ts
import { request } from "@/api/http"
import type { Product } from "@/types/product"

// Posibles formas crudas que devuelve la API hoy
// type RawList = ProductListItem[] // ← array plano
// type RawEnvelope = { items: ProductListItem[]; total?: number } // ← { items, total } opcional

import type { ProductListItem } from "@/types/product"

/**
 * Pide al servidor el listado filtrado.
 * El FILTRO se hace pasando `q` en la URL. <- AQUÍ está el "paso 1"
 */
export async function getProducts(
  q = "", // término de búsqueda
  limit = 20, // cuántos traer
  page = 1, // página (si la tienes; si no, deja 1)
  options?: { signal?: AbortSignal }
): Promise<ProductListItem[]> {
  const qs = new URLSearchParams()

  // 👇 ESTE ES EL PUNTO CLAVE: enviar el término al servidor
  // Si tu backend espera otro nombre (p.ej., 'search'), cambia 'q' por 'search'
  if (q) {
    qs.set("q", q)
    // Also try 'search' parameter in case the API expects that
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
