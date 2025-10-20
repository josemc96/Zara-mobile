import { request, HttpError } from "@/api/http"

global.fetch = jest.fn()

describe("request() wrapper", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("devuelve JSON con x-api-key enviada", async () => {
    const mockResponse = {
      items: [{ id: "1", name: "Test" }],
      total: 1,
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
    })

    interface ProductResponse {
      items: unknown[]
      total: number
    }
    const data = await request<ProductResponse>("/products?limit=20")
    expect(Array.isArray(data.items)).toBe(true)
    expect(typeof data.total).toBe("number")
  })

  test("404 convierte en HttpError con status", async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: "Not Found",
      text: jest.fn().mockResolvedValue("Not found"),
    }

    ;(global.fetch as jest.Mock).mockResolvedValue(mockResponse)

    await expect(request("/products/999999")).rejects.toBeInstanceOf(HttpError)
    await expect(request("/products/999999")).rejects.toMatchObject({ status: 404 })
  })
})
