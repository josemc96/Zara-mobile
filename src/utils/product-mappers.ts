import { Product } from "@/types/product"

/** Devuelve la primera imagen disponible como “default” */
export const getDefaultImage = (p: Product) => p.colorOptions?.[0]?.imageUrl ?? ""

/** Imagen según color elegido; si no existe, cae al default */
export const getImageForColor = (p: Product, color?: string) =>
  p.colorOptions?.find((c) => c.name === color)?.imageUrl ?? getDefaultImage(p)

/** Precio final según capacidad; si no hay selección o no existe, basePrice */
export const getPriceForStorage = (p: Product, capacity?: string) => {
  const opt = p.storageOptions?.find((s) => s.capacity === capacity)
  return opt ? opt.price : p.basePrice
}

/** Listas “planas” para selects */
export const capacities = (p: Product) => p.storageOptions?.map((s) => s.capacity) ?? []

export const colors = (p: Product) => p.colorOptions?.map((c) => c.name) ?? []
