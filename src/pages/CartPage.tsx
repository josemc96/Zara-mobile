import { Link } from "react-router-dom"

export default function CartPage() {
  return (
    <section data-testid="page-cart">
      <h1>Carrito</h1>
      <p>Tu carrito está vacío.</p>
      <Link to="/">Continuar comprando</Link>
    </section>
  )
}
