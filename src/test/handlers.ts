import { http, HttpResponse, delay } from "msw"

const API = process.env.API_URL || "https://prueba-tecnica-api-tienda-moviles.onrender.com"

export const handlers = [
  http.get(`${API}/products`, async ({ request }) => {
    const url = new URL(request.url)
    const q = (url.searchParams.get("q") || "").toLowerCase()

    const all = [
      {
        id: "1",
        brand: "Google",
        name: "Pixel 8",
        basePrice: 699,
        imageUrl: "https://example.com/pixel.png",
      },
      {
        id: "2",
        brand: "Apple",
        name: "iPhone 15",
        basePrice: 999,
        imageUrl: "https://example.com/iphone.png",
      },
    ]
    const items = all.filter((p) => (p.name + p.brand).toLowerCase().includes(q))
    return HttpResponse.json({ items, total: items.length })
  }),

  http.get(`${API}/products/:id`, async ({ params }) => {
    if (params.id === "1") {
      return HttpResponse.json({
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
          { name: "black", hexCode: "#000000", imageUrl: "https://example.com/pixel-black.png" },
          { name: "white", hexCode: "#ffffff", imageUrl: "https://example.com/pixel-white.png" },
        ],
        storageOptions: [
          { capacity: "128GB", price: 699 },
          { capacity: "256GB", price: 799 },
        ],
        similarProducts: [
          {
            id: "2",
            brand: "Apple",
            name: "iPhone 15",
            basePrice: 999,
            imageUrl: "https://example.com/iphone.png",
          },
        ],
      })
    }
    return new HttpResponse("Not found", { status: 404 })
  }),

  http.get(`${API}/__slow`, async () => {
    await delay(9000)
    return HttpResponse.json({ ok: true })
  }),
]
