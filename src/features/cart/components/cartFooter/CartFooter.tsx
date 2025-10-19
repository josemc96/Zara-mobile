import { formatEUR } from "@/utils/money"
import {
  Footer,
  ContinueShoppingButton,
  TotalSection,
  TotalLabel,
  TotalAmount,
  PayButton,
} from "./CartFooter.styles"

interface CartFooterProps {
  total: number
  hasItems: boolean
}

export default function CartFooter({ total, hasItems }: CartFooterProps) {
  return (
    <Footer>
      {/* Left button - Continue shopping (always visible) */}
      <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>

      {/* Right side - Total and Pay button (only when products exist) */}
      {hasItems && (
        <TotalSection>
          <TotalLabel>Total</TotalLabel>
          <TotalAmount>{formatEUR(total)}</TotalAmount>
          <PayButton>Pay</PayButton>
        </TotalSection>
      )}
    </Footer>
  )
}
