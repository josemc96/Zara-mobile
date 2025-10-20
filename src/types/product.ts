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
  name: string
  hexCode: string
  imageUrl: string
}

export interface StorageOption {
  capacity: string
  price: number
}

export interface SimilarProduct {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}

export interface Product {
  id: string
  brand: string
  name: string
  description: string
  basePrice: number
  rating: number
  specs: Specs
  colorOptions: ColorOption[]
  storageOptions: StorageOption[]
  similarProducts: SimilarProduct[]
}

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
  imageUrl: string
  onClick?: () => void
}

export interface ProductSpecificationsProps {
  specs: Specs
}
