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
      <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>

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
