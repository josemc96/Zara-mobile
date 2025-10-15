import { formatEUR } from "../money"

test("formatEUR formatea cantidades en EUR (es-ES)", () => {
  const out = formatEUR(799)
  expect(out).toMatch(/799/) // contiene el número
  expect(out).toMatch(/[€]|EUR/) // símbolo o código
})
