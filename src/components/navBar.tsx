import { NavLink } from "react-router-dom"

type Props = { count?: number }

export default function Navbar({ count = 0 }: Props) {
  return (
    <header
      role="banner"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav
        aria-label="navegación principal"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Izquierda: Inicio */}
        <NavLink
          to="/"
          end
          aria-label="Ir a inicio"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#111827" : "#374151",
            fontWeight: 700,
          })}
        >
          Inicio
        </NavLink>

        {/* Separador flexible */}
        <div style={{ flex: 1 }} />

        {/* Derecha: Carrito con contador */}
        <NavLink
          to="/cart"
          aria-label={`Ir al carrito. ${count} artículo${count === 1 ? "" : "s"}`}
          style={({ isActive }) => ({
            position: "relative",
            textDecoration: "none",
            color: isActive ? "#111827" : "#374151",
            fontWeight: 600,
          })}
        >
          Carrito
          <span
            aria-hidden="true"
            style={{
              marginLeft: 8,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 20,
              height: 20,
              padding: "0 6px",
              borderRadius: 999,
              background: "#111827",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {count}
          </span>
        </NavLink>
      </nav>
    </header>
  )
}
