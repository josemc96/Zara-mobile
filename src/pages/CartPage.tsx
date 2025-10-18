import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { removeItem, clear, selectCartItems, selectCartTotal } from "@/features/cart/cartSlice"
import { formatEUR } from "@/utils/money"
import {
  CartPageContainer,
  CartHeader,
  CartTitle,
  ClearButton,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDetails,
  ProductPrice,
  RemoveButton,
  CartFooter,
  ContinueShoppingButton,
  TotalSection,
  TotalLabel,
  TotalAmount,
  PayButton,
} from "./CartPage.styles"

export default function CartPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)

  if (items.length === 0) {
    return (
      <CartPageContainer>
        <CartTitle>Carrito</CartTitle>
        <p>Tu carrito está vacío.</p>
        <ContinueShoppingButton to="/">Ir al catálogo</ContinueShoppingButton>
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
        <ProductCard key={it.variantId}>
          <ProductImage src={it.imageUrl} alt={it.name} />
          <ProductInfo>
            <div>
              <ProductName>{it.name}</ProductName>
              <ProductDetails>
                {it.capacity} | {it.color}
              </ProductDetails>
              <ProductPrice>{formatEUR(it.unitPrice)}</ProductPrice>
            </div>
            <RemoveButton onClick={() => dispatch(removeItem({ variantId: it.variantId }))}>
              Remove
            </RemoveButton>
          </ProductInfo>
        </ProductCard>
      ))}

      {/* 3. Footer with 2 buttons */}
      <CartFooter>
        {/* Left button - Continue shopping (always visible) */}
        <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>

        {/* Right side - Total and Pay button (only when products exist) */}
        <TotalSection>
          <TotalLabel>Total</TotalLabel>
          <TotalAmount>{formatEUR(total)}</TotalAmount>
          <PayButton>Pay</PayButton>
        </TotalSection>
      </CartFooter>
    </CartPageContainer>
  )
}
