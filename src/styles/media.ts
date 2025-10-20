import { css } from "styled-components"

export const bp = {
  md: 394,
  lg: 834,
} as const

const mq =
  (px: number) =>
  (...args: Parameters<typeof css>) =>
    css`
      @media (min-width: ${px}px) {
        ${css(...args)}
      }
    `

export const media = {
  md: mq(bp.md),
  lg: mq(bp.lg),
}
