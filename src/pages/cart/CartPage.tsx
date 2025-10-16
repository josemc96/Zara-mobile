import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import {
  removeItem,
  setQty,
  clear,
  selectCartItems,
  selectCartTotal,
} from "@/features/cart/cartSlice"
import { formatEUR } from "@/utils/money"

export default function CartPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const total = useAppSelector(selectCartTotal)

  const onChangeQty = (variantId: string, qty: number) => {
    if (Number.isNaN(qty)) return
    dispatch(setQty({ variantId, qty: Math.max(0, Math.min(99, Math.trunc(qty))) }))
  }

  if (items.length === 0) {
    return (
      <section data-testid="page-cart">
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/">Ir al catálogo</Link>
      </section>
    )
  }

  return (
    <section data-testid="page-cart" style={{ display: "grid", gap: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Carrito</h1>
        <button onClick={() => dispatch(clear())}>Vaciar</button>
      </header>

      <div style={{ display: "grid", gap: 12 }}>
        {items.map((it) => (
          <article
            key={it.variantId}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: 12,
              alignItems: "center",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 12,
            }}
          >
            {it.imageUrl ? (
              <img
                src={it.imageUrl}
                alt={it.name}
                style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
              />
            ) : (
              <div style={{ width: 80, height: 80, background: "#f3f4f6", borderRadius: 8 }} />
            )}

            <div style={{ display: "grid", gap: 4 }}>
              <strong>{it.name}</strong>
              <span style={{ color: "#6b7280" }}>{it.brand}</span>
              <small style={{ color: "#6b7280" }}>
                Color: <b>{it.color}</b> · Almacenamiento: <b>{it.capacity}</b>
              </small>

              <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
                <label>
                  Cantidad:{" "}
                  <input
                    type="number"
                    min={0}
                    max={99}
                    value={it.qty}
                    onChange={(e) => onChangeQty(it.variantId, Number(e.target.value))}
                    style={{ width: 64, padding: 4 }}
                    aria-label={`Cantidad de ${it.name} ${it.color} ${it.capacity}`}
                  />
                </label>

                <button onClick={() => onChangeQty(it.variantId, it.qty + 1)} aria-label="Aumentar">
                  +
                </button>
                <button
                  onClick={() => onChangeQty(it.variantId, it.qty - 1)}
                  aria-label="Disminuir"
                >
                  −
                </button>
                <button
                  onClick={() => dispatch(removeItem({ variantId: it.variantId }))}
                  aria-label="Eliminar"
                >
                  Eliminar
                </button>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div>Precio</div>
              <strong>{formatEUR(it.unitPrice)}</strong>
              <div style={{ color: "#6b7280", marginTop: 4 }}>Subtotal</div>
              <strong>{formatEUR(it.unitPrice * it.qty)}</strong>
            </div>
          </article>
        ))}
      </div>

      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #e5e7eb",
          paddingTop: 12,
        }}
      >
        <Link to="/">Seguir comprando</Link>
        <div style={{ display: "grid", gap: 4, textAlign: "right" }}>
          <div>Total</div>
          <strong style={{ fontSize: 20 }}>{formatEUR(total)}</strong>
          <button style={{ marginTop: 8 }}>Continuar al pago</button>
        </div>
      </footer>
    </section>
  )
}
