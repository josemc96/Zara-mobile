export class HttpError extends Error {
  constructor(public status: number, public statusText: string, public body?: string) {
    super(`HTTP ${status} ${statusText}`)
  }
}

const API = process.env.API_URL as string
const KEY = process.env.API_KEY as string

function withTimeout<T>(p: Promise<T>, ms = 8000) {
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), ms)
  return {
    promise: (async () => {
      try {
        const r = await p
        return r
      } finally {
        clearTimeout(t)
      }
    })(),
    signal: ac.signal,
  }
}

export async function request<T>(
  path: string,
  init: RequestInit = {},
  timeoutMs = 8000
): Promise<T> {
  if (!API) throw new Error("API_URL is not defined")
  if (!KEY) throw new Error("API_KEY is not defined")

  const { signal } = withTimeout(Promise.resolve(), timeoutMs) // solo para obtener la signal

  const res = await fetch(`${API}${path}`, {
    ...init,
    signal,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": KEY,
      ...(init.headers || {}),
    },
  })

  const text = await res.text().catch(() => "")
  if (!res.ok) throw new HttpError(res.status, res.statusText, text)
  return (text ? JSON.parse(text) : ({} as T)) as T
}
