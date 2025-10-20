import { formatEUR } from "@/utils/money"
import {
  Footer,
  ContinueShoppingButton,
  TotalSection,
  TotalLabel,
  TotalAmount,
  PayButton,
  ButtonsRow,
} from "./CartFooter.styles"
import type { CartFooterMobileProps } from "../../../types/CartFooter.types"

export default function CartFooterMobile({ total, hasItems }: CartFooterMobileProps) {
  return (
    <Footer>
      {hasItems && (
        <TotalSection>
          <TotalLabel>Total</TotalLabel>
          <TotalAmount>{formatEUR(total)}</TotalAmount>
        </TotalSection>
      )}

      <ButtonsRow>
        <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
        {hasItems && <PayButton>Pay</PayButton>}
      </ButtonsRow>
    </Footer>
  )
}
