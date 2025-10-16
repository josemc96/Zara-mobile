import React from "react"
import { createGlobalStyle } from "styled-components"
import { media } from "./media"

/**
 * Variables CSS globales de layout (mobile-first).
 * Cada vista usa: var(--grid-columns), var(--grid-gap), var(--page-padding-x).
 */
const GridGlobals = createGlobalStyle`
  :root {
    --container-max: 1920px;

    /* Mobile base (<394px) */
    --grid-columns: 4;
    --grid-gap: 16px;
    --page-padding-x: 16px;
  }

  /* Tablet (≥394px) */
  ${media.md`
    :root {
      --grid-columns: 8;
      --grid-gap: 40px;
      --page-padding-x: 40px;
    }
  `}

  /* Desktop (≥834px) */
  ${media.lg`
    :root {
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
