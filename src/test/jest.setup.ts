import { config } from "dotenv"

config({ path: ".env" })

if (!process.env.API_URL) {
  throw new Error(
    "API_URL is required. Please create a .env file with API_URL or set it as an environment variable."
  )
}

if (!process.env.API_KEY) {
  process.env.API_KEY = "test-api-key"
}
