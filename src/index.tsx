import React from "react"
import { createRoot } from "react-dom/client"
import AppRouter from "./routes/Router"

const container = document.getElementById("root")
if (!container) {
  throw new Error("No se encontró el elemento #root en index.html")
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
