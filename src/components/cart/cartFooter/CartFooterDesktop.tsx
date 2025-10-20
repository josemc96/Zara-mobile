import { formatEUR } from "@/utils/money"
import {
  Footer,
  ContinueShoppingButton,
  TotalSection,
  TotalLabel,
  TotalAmount,
  PayButton,
} from "./CartFooter.styles"
import type { CartFooterDesktopProps } from "../../../types/CartFooter.types"

export default function CartFooterDesktop({ total, hasItems }: CartFooterDesktopProps) {
  return (
    <Footer>
      {/* Left side - Continue Shopping button */}
      <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>

      {/* Right side - Total and Pay button */}
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
