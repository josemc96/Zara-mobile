import { css } from "styled-components"

/** Breakpoints según tu Figma */
export const bp = {
  md: 394, // tablet ≥394px
  lg: 834, // desktop ≥834px
} as const

/** Helper curried para media queries */
const mq =
  (px: number) =>
  (...args: Parameters<typeof css>) =>
    css`
      @media (min-width: ${px}px) {
        ${css(...args)}
      }
    `

/** Uso: ${media.md` ... `}, ${media.lg` ... `} */
export const media = {
  md: mq(bp.md),
  lg: mq(bp.lg),
}
