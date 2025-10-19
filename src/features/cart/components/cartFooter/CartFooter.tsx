import { formatEUR } from "@/utils/money"
import {
  Footer,
  FooterContent,
  ContinueShoppingButton,
  TotalSection,
  TotalLabel,
  TotalAmount,
  PayButton,
  ButtonsContainer,
} from "./CartFooter.styles"

interface CartFooterProps {
  total: number
  hasItems: boolean
}

export default function CartFooter({ total, hasItems }: CartFooterProps) {
  return (
    <Footer>
      <FooterContent>
        {/* Total at the top on mobile, inline on tablet+ */}
        {hasItems && (
          <TotalSection>
            <TotalLabel>Total</TotalLabel>
            <TotalAmount>{formatEUR(total)}</TotalAmount>
          </TotalSection>
        )}

        {/* Buttons below total on mobile, inline on tablet+ */}
        <ButtonsContainer>
          <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
          {hasItems && <PayButton>Pay</PayButton>}
        </ButtonsContainer>
      </FooterContent>
    </Footer>
  )
}
