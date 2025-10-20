import { Outlet, useLocation } from "react-router-dom"
import Navbar from "@/components/navbar/Navbar"
import CartFooter from "@/components/cart/cartFooter/CartFooter"
import { useAppSelector } from "@/store/hooks"
import { selectCartTotal, selectCartItems } from "@/features/cart/cartSlice"

export default function Layout() {
  const location = useLocation()
  const isCartPage = location.pathname === "/cart"

  const total = useAppSelector(selectCartTotal)
  const items = useAppSelector(selectCartItems)

  return (
    <>
      <Navbar isCartPage={isCartPage} />
      <Outlet />
      {isCartPage && <CartFooter total={total} hasItems={items.length > 0} />}
    </>
  )
}
