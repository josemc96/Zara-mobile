export const theme = {
  color: {
    bg: "#ffffff",
    text: "#111111",
    border: "#e5e7eb",
    muted: "#6b7280",
  },
  radius: { sm: 6, md: 10 },
  shadow: { md: "0 1px 6px rgba(0,0,0,.08)" },
  font: { size: { md: "14px" } },
} as const

export type AppTheme = typeof theme
