import { Link } from "react-router-dom"
import { useAppSelector } from "@/store/hooks"
import { selectCartItems } from "@/features/cart/cartSlice"
import { Bar, Inner, LeftLink, RightLink, Badge } from "./navbar.styles"

export default function Navbar() {
  const count = useAppSelector(selectCartItems).length

  return (
    <Bar>
      <Inner>
        {/* Izquierda: Home */}
        <Link to="/">
          <LeftLink>Home</LeftLink>
        </Link>

        {/* Derecha: Cart con contador */}
        <Link to="/cart" aria-label={`Carrito (${count})`}>
          <RightLink>
            Cart
            <Badge aria-hidden>{count}</Badge>
          </RightLink>
        </Link>
      </Inner>
    </Bar>
  )
}
