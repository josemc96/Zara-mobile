import { request } from "./http"
import type { Product, ProductListResponse } from "../types/product"

/**
 * Obtiene el listado de productos con búsqueda y límite.
 * - q: texto a buscar en nombre/marca (opcional)
 * - limit: número de items a devolver (por defecto 20)
 * Devuelve { items, total } según el contrato de la API.
 */
export function getProducts(
  q?: string,
  limit = 20,
  options?: { signal?: AbortSignal } // opcional: permite cancelar desde la UI
) {
  const qs = new URLSearchParams()
  if (q) qs.set("q", q)
  if (limit) qs.set("limit", String(limit))

  const query = qs.toString() // "q=pixel&limit=20"
  const path = `/products${query ? `?${query}` : ""}`

  // Pasamos la signal si la UI nos la dio (no es obligatorio)
  return request<ProductListResponse>(path, { signal: options?.signal })
}

/**
 * Obtiene el detalle de un producto por id.
 * Devuelve un Product con:
 * - specs, colorOptions, storageOptions (precio final por capacidad)
 * - similarProducts (ya viene en el detalle)
 */
export function getProduct(id: string, options?: { signal?: AbortSignal }) {
  if (!id) throw new Error('getProduct: "id" es requerido')
  return request<Product>(`/products/${id}`, { signal: options?.signal })
}
