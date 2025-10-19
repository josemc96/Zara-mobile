import { CartItem } from "./cartSlice"

const CART_STORAGE_KEY = "zara-cart"

export const loadCartFromStorage = (): Record<string, CartItem> => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (!stored) return {}

    const parsed = JSON.parse(stored)
    return parsed
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error)
    return {}
  }
}

export const saveCartToStorage = (items: Record<string, CartItem>): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error)
  }
}

export const clearCartFromStorage = (): void => {
  try {
    localStorage.removeItem(CART_STORAGE_KEY)
  } catch (error) {
    console.error("Failed to clear cart from localStorage:", error)
  }
}
