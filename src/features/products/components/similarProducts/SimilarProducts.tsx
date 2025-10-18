import type { SimilarProduct } from "@/types/product"
import ProductCard from "../productCard/ProductCard"
import {
  SimilarProductsContainer,
  SimilarProductsTitle,
  SimilarProductsGrid,
  CardWrapper,
} from "./SimilarProducts.styles"

interface SimilarProductsProps {
  products: SimilarProduct[]
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  if (!products || products.length === 0) return null

  return (
    <SimilarProductsContainer>
      <SimilarProductsTitle>Similar Products</SimilarProductsTitle>
      <SimilarProductsGrid>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <ProductCard {...product} />
          </CardWrapper>
        ))}
      </SimilarProductsGrid>
    </SimilarProductsContainer>
  )
}
