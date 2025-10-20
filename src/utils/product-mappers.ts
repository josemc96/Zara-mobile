import { Product } from "@/types/product"

export const getDefaultImage = (p: Product) => p.colorOptions?.[0]?.imageUrl ?? ""

export const getImageForColor = (p: Product, color?: string) =>
  p.colorOptions?.find((c) => c.name === color)?.imageUrl ?? getDefaultImage(p)

export const getPriceForStorage = (p: Product, capacity?: string) => {
  const opt = p.storageOptions?.find((s) => s.capacity === capacity)
  return opt ? opt.price : p.basePrice
}

export const capacities = (p: Product) => p.storageOptions?.map((s) => s.capacity) ?? []

export const colors = (p: Product) => p.colorOptions?.map((c) => c.name) ?? []
