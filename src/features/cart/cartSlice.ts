import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type CartItem = {
  productId: string
  variantId: string // productId__color__capacity
  name: string
  brand: string
  color: string
  capacity: string
  unitPrice: number
  imageUrl?: string
  qty: number
}

type CartState = {
  items: Record<string, CartItem> // key = variantId
}

const initialState: CartState = { items: {} }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, "variantId"> & { variantId?: string }>) {
      const { productId, color, capacity, unitPrice, name, brand, imageUrl } = action.payload
      const variantId = action.payload.variantId ?? `${productId}__${color}__${capacity}`
      const existing = state.items[variantId]
      if (existing) {
        existing.qty += 1
      } else {
        state.items[variantId] = {
          productId,
          variantId,
          color,
          capacity,
          unitPrice,
          name,
          brand,
          imageUrl,
          qty: 1,
        }
      }
    },
    removeItem(state, action: PayloadAction<{ variantId: string }>) {
      delete state.items[action.payload.variantId]
    },
    setQty(state, action: PayloadAction<{ variantId: string; qty: number }>) {
      const it = state.items[action.payload.variantId]
      if (!it) return
      if (action.payload.qty <= 0) delete state.items[action.payload.variantId]
      else it.qty = action.payload.qty
    },
    clear(state) {
      state.items = {}
    },
  },
})

export const { addItem, removeItem, setQty, clear } = cartSlice.actions

export const selectCartItems = (s: { cart: CartState }) => Object.values(s.cart.items)
export const selectCartCount = (s: { cart: CartState }) =>
  Object.values(s.cart.items).reduce((acc, it) => acc + it.qty, 0)

export default cartSlice.reducer
