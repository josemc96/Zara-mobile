// src/styles/media.ts
import { css } from "styled-components"

/**
 * Breakpoints mobile-first:
 * - md: ≥768px (tablet)
 * - lg: ≥1024px (desktop)
 * - xl: ≥1440px (desktop amplio)
 */
export const media = {
  md: (...args: Parameters<typeof css>) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  lg: (...args: Parameters<typeof css>) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `,
  xl: (...args: Parameters<typeof css>) => css`
    @media (min-width: 1440px) {
      ${css(...args)}
    }
  `,
}
