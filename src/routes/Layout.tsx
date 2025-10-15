import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"
import { useAppSelector } from "@/store/hooks"
import { selectCartCount } from "@/features/cart/cartSlice"

export default function Layout() {
  const count = useAppSelector(selectCartCount)

  return (
    <>
      <Navbar count={count} />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
        <Outlet />
      </main>
    </>
  )
}
