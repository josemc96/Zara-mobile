import CartFooterMobile from "./CartFooterMobile"
import CartFooterDesktop from "./CartFooterDesktop"
import type { CartFooterProps } from "@/types/CartFooter.types"

export default function CartFooter({ total, hasItems }: CartFooterProps) {
  return (
    <>
      <CartFooterMobile total={total} hasItems={hasItems} />

      <CartFooterDesktop total={total} hasItems={hasItems} />
    </>
  )
}
