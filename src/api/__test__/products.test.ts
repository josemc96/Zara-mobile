import { getProducts, getProduct } from "@/api/products"

jest.mock("@/api/http", () => ({
  request: jest.fn(),
}))

import { request } from "@/api/http"
const mockRequest = request as jest.MockedFunction<typeof request>

describe("services: products", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("getProducts aplica q y limit", async () => {
    mockRequest.mockResolvedValueOnce([
      { id: "1", brand: "Google", name: "Pixel 8", basePrice: 699, imageUrl: "pixel.png" },
      { id: "2", brand: "Apple", name: "iPhone 15", basePrice: 999, imageUrl: "iphone.png" },
    ])

    mockRequest.mockResolvedValueOnce([
      { id: "1", brand: "Google", name: "Pixel 8", basePrice: 699, imageUrl: "pixel.png" },
    ])

    const r1 = await getProducts("", 20)
    expect(Array.isArray(r1)).toBe(true)
    expect(r1.length).toBe(2)

    const r2 = await getProducts("pixel", 20)
    expect(Array.isArray(r2)).toBe(true)
    expect(r2.length).toBe(1)
    expect(r2[0].name).toMatch(/pixel/i)
  })

  test("getProduct 1 devuelve opciones de color y almacenamiento con precio final", async () => {
    mockRequest.mockResolvedValue({
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
      similarProducts: [
        { id: "2", brand: "Apple", name: "iPhone 15", basePrice: 999, imageUrl: "iphone.png" },
      ],
    })

    const p = await getProduct("1")
    expect(p.colorOptions.length).toBeGreaterThan(0)
    expect(
      p.storageOptions.some(
        (s: { capacity: string; price: number }) => s.capacity === "256GB" && s.price === 799
      )
    ).toBe(true)
    expect(p.similarProducts.length).toBeGreaterThan(0)
  })
})
