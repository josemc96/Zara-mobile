import {
  getDefaultImage,
  getImageForColor,
  getPriceForStorage,
  capacities,
  colors,
} from "@/utils/product-mappers"
import type { Product } from "@/types/product"

const product: Product = {
  id: "1",
  brand: "Google",
  name: "Pixel 8",
  description: "Buen teléfono",
  basePrice: 699,
  rating: 4.5,
  specs: {
    screen: '6.2"',
    resolution: "1080x2400",
    processor: "Tensor",
    mainCamera: "50MP",
    selfieCamera: "10MP",
    battery: "4500mAh",
    os: "Android",
    screenRefreshRate: "120Hz",
  },
  colorOptions: [
    { name: "black", hexCode: "#000000", imageUrl: "img-black.png" },
    { name: "white", hexCode: "#ffffff", imageUrl: "img-white.png" },
  ],
  storageOptions: [
    { capacity: "128GB", price: 699 },
    { capacity: "256GB", price: 799 },
  ],
  similarProducts: [],
}

describe("product-mappers", () => {
  test("getDefaultImage usa la primera imagen", () => {
    expect(getDefaultImage(product)).toBe("img-black.png")
  })

  test("getImageForColor devuelve imagen del color y cae a default si no existe", () => {
    expect(getImageForColor(product, "white")).toBe("img-white.png")
    expect(getImageForColor(product, "red")).toBe("img-black.png") // fallback
    expect(getImageForColor({ ...product, colorOptions: [] }, "black")).toBe("")
  })

  test("getPriceForStorage usa price final por capacidad o basePrice", () => {
    expect(getPriceForStorage(product, "256GB")).toBe(799)
    expect(getPriceForStorage(product, "512GB")).toBe(699) // fallback
    expect(getPriceForStorage({ ...product, storageOptions: [] }, "128GB")).toBe(699)
  })

  test("capacities y colors devuelven listas correctas", () => {
    expect(capacities(product)).toEqual(["128GB", "256GB"])
    expect(colors(product)).toEqual(["black", "white"])
  })
})
