import { configureStore, Middleware } from "@reduxjs/toolkit"
import cartReducer, { CartState } from "@/features/cart/cartSlice"
import { loadCartFromStorage, saveCartToStorage } from "@/features/cart/cartStorage"

// Load cart from localStorage on app initialization
const preloadedState = {
  cart: {
    items: loadCartFromStorage(),
  } as CartState,
}

// Middleware to save cart to localStorage after every action
const cartPersistenceMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)

  // Save cart state to localStorage after the action is dispatched
  const state = store.getState()
  saveCartToStorage(state.cart.items)

  return result
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartPersistenceMiddleware),
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
