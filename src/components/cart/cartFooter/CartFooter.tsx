import CartFooterMobile from "./CartFooterMobile"
import CartFooterDesktop from "./CartFooterDesktop"
import type { CartFooterProps } from "@/types/CartFooter.types"

export default function CartFooter({ total, hasItems }: CartFooterProps) {
  return (
    <>
      {/* Mobile footer - visible only on mobile */}
      <CartFooterMobile total={total} hasItems={hasItems} />

      {/* Desktop/Tablet footer - visible only on tablet+ */}
      <CartFooterDesktop total={total} hasItems={hasItems} />
    </>
  )
}
