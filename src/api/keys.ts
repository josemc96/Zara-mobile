export const qk = {
  products: (q = "", limit = 20, page = 1) => ["products", "v1", { q, limit, page }] as const,
  product: (id: string) => ["product", "v1", id] as const,
}
