import { useAppSelector } from "@/store/hooks"
import { clear, selectCartItems, selectCartTotal } from "@/features/cart/cartSlice"
import { useAppDispatch } from "@/store/hooks"
import { CartPageContainer, CartHeader, CartTitle, ClearButton } from "./CartPage.styles"
import CartProductCard from "@/features/cart/components/CartProductCard"
import CartFooter from "@/features/cart/components/CartFooter"

export default function CartPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)

  if (items.length === 0) {
    return (
      <CartPageContainer>
        <CartTitle>CART</CartTitle>
        <p>Your cart is empty.</p>
      </CartPageContainer>
    )
  }

  return (
    <CartPageContainer>
      {/* 1. Cart Counter */}
      <CartHeader>
        <CartTitle>CART ({items.length})</CartTitle>
        <ClearButton onClick={() => dispatch(clear())}>Clear</ClearButton>
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

      {/* 3. Footer with 2 buttons */}
      <CartFooter total={total} />
    </CartPageContainer>
  )
}
