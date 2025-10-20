import { useAppSelector } from "@/store/hooks"
import { selectCartItems } from "@/features/cart/cartSlice"
import { CartHeader, CartPageContainer, CartTitle } from "./CartPage.styles"
import CartProductCard from "@/components/cart/cartProductCard/CartProductCard"

export default function CartPage() {
  const items = useAppSelector(selectCartItems)

  if (items.length === 0) {
    return (
      <CartPageContainer>
        <CartTitle>CART</CartTitle>
      </CartPageContainer>
    )
  }

  return (
    <CartPageContainer>
      {/* 1. Cart Counter */}
      <CartHeader>
        <CartTitle>CART ({items.length})</CartTitle>
      </CartHeader>

      {/* 2. Product Info Section */}
      {items.map((it) => (
        <CartProductCard
          key={it.variantId}
          variantId={it.variantId}
          imageUrl={it.imageUrl || ""}
          name={it.name}
          capacity={it.capacity}
          color={it.color}
          unitPrice={it.unitPrice}
        />
      ))}
    </CartPageContainer>
  )
}
