import React from "react"
import { createGlobalStyle } from "styled-components"
import { media } from "./media"

const GridGlobals = createGlobalStyle`
  * {
    font-family:  Helvetica, Arial, sans-serif;
  }

  html, body {
    overflow-x: hidden;
  }

  :root {
    --container-max: 100%;

    --grid-columns: 4;
    --grid-gap: 16px;
    --page-padding-x: 16px;
  }

  ${media.md`
    :root {
      --container-max: 834px;
      --grid-columns: 8;
      --grid-gap: 40px;
      --page-padding-x: 40px;
    }
  `}

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
