import { Link } from "react-router-dom"
import { useAppSelector } from "@/store/hooks"
import { selectCartItems } from "@/features/cart/cartSlice"
import { Bar, Inner, LeftLink, RightLink, Badge } from "./navbar.styles"

interface NavbarProps {
  isCartPage?: boolean
}

export default function Navbar({ isCartPage = false }: NavbarProps) {
  const count = useAppSelector(selectCartItems).length

  return (
    <Bar>
      <Inner>
        {/* Izquierda: Home */}
        <Link to="/">
          <LeftLink>
            <img src="/image/mbstIcon.png" alt="MBST" width="74" height="24" />
          </LeftLink>
        </Link>

        {/* Derecha: Cart con contador */}
        {!isCartPage && (
          <Link to="/cart" aria-label={`Carrito (${count})`}>
            <RightLink>
              <img src="/image/bagIcon.png" alt="Cart" width="18" height="18" />
              <Badge aria-hidden>{count}</Badge>
            </RightLink>
          </Link>
        )}
      </Inner>
    </Bar>
  )
}
