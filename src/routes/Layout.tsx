import Navbar from "@/components/NavBar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Navbar count={0} />
      <main
        role="main"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 16,
          minHeight: "calc(100dvh - 64px)",
        }}
      >
        <Outlet />
      </main>
    </>
  )
}
