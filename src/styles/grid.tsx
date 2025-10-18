import React from "react"
import { createGlobalStyle } from "styled-components"
import { media } from "./media"

/**
 * Variables CSS globales de layout (mobile-first).
 * Cada vista usa: var(--grid-columns), var(--grid-gap), var(--page-padding-x).
 */
const GridGlobals = createGlobalStyle`
  * {
    font-family:  Helvetica, Arial, sans-serif;
  }

  :root {
    --container-max: 100%;

    /* Mobile base (<394px) */
    --grid-columns: 4;
    --grid-gap: 16px;
    --page-padding-x: 16px;
  }

  /* Tablet (≥394px) */
  ${media.md`
    :root {
      --container-max: 834px;
      --grid-columns: 8;
      --grid-gap: 40px;
      --page-padding-x: 40px;
    }
  `}

  /* Desktop (≥834px) */
  ${media.lg`
    :root {
      --container-max: 100%;
      --grid-columns: 12;
      --grid-gap: 48px;
      --page-padding-x: 100px;
    }
  `}
`

export function GridProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GridGlobals />
      {children}
    </>
  )
}
