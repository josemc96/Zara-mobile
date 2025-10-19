import { useAppDispatch } from "@/store/hooks"
import { removeItem } from "@/features/cart/cartSlice"
import { formatEUR } from "@/utils/money"
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDetails,
  ProductPrice,
  RemoveButton,
} from "./CartProductCard.styles"

interface CartProductCardProps {
  variantId: string
  imageUrl: string
  name: string
  capacity: string
  color: string
  unitPrice: number
}

export default function CartProductCard({
  variantId,
  imageUrl,
  name,
  capacity,
  color,
  unitPrice,
}: CartProductCardProps) {
  const dispatch = useAppDispatch()

  const handleRemove = () => {
    dispatch(removeItem({ variantId }))
  }

  return (
    <ProductCard>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfo>
        <div>
          <ProductName>{name}</ProductName>
          <ProductDetails>
            {capacity} | {color}
          </ProductDetails>
          <ProductPrice>{formatEUR(unitPrice)}</ProductPrice>
        </div>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </ProductInfo>
    </ProductCard>
  )
}
