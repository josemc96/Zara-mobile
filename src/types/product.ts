export interface Specs {
  screen: string
  resolution: string
  processor: string
  mainCamera: string
  selfieCamera: string
  battery: string
  os: string
  screenRefreshRate: string
}

export interface ColorOption {
  name: string // p.ej. "black"
  hexCode: string // p.ej. "#000000"
  imageUrl: string // imagen específica de ese color
}

export interface StorageOption {
  capacity: string // p.ej. "128GB"
  price: number // precio final para esa capacidad (NO delta)
}

export interface SimilarProduct {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}

// Detalle de producto
export interface Product {
  id: string
  brand: string
  name: string
  description: string
  basePrice: number
  rating: number
  specs: Specs
  colorOptions: ColorOption[]
  storageOptions: StorageOption[] // ojo: price final, no incrementos
  similarProducts: SimilarProduct[] // ya viene en el detalle
}

// Para el listado, muchas APIs devuelven un subconjunto.
// Si el listado de tu /products devuelve objetos “similares” a SimilarProduct:
export interface ProductListItem {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}

export interface ProductListResponse {
  items: ProductListItem[]
  total: number
}
export type ProductCardProps = Pick<
  ProductListItem,
  "id" | "brand" | "name" | "basePrice" | "imageUrl"
> & {
  imageUrl: string // si el listado no la trae, la añades aquí
  onClick?: () => void
}

export interface ProductSpecificationsProps {
  specs: Specs
}
