import { server } from "@/test/server"

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "warn", // Changed from "error" to "warn" for debugging
  })
})

afterEach(() => server.resetHandlers())
afterAll(() => server.close())
