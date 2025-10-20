import { config } from "dotenv"

config({ path: ".env" })

if (!process.env.API_URL) {
  throw new Error("API_URL is not defined in .env file")
}

if (!process.env.API_KEY) {
  process.env.API_KEY = "test-api-key"
}
