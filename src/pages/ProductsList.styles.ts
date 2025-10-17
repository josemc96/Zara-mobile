import styled from "styled-components"
import { media } from "@/styles/media"

export const Page = styled.section`
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  gap: 24px;
  padding-top: 24px;

  ${media.md`
    gap: 24px;
  `}

  ${media.lg`
    gap: 48px;
    padding-top: 48px;
  `}
`

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px 16px;

  ${media.md`
    padding: 12px 40px;
  `}

  ${media.lg`
    padding: 12px 100px;
  `}
`

export const SearchInput = styled.input.attrs({ type: "search" })`
  width: 100%;
  height: 27px;
  padding: 0;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 0;
  font: inherit;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid #111;
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const Status = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`

export const Grid = styled.div`
  display: grid;
  gap: 0;
  padding: 0 16px;

  /* 1 columna en móvil */
  grid-template-columns: repeat(1, minmax(0, 1fr));

  /* 2 columnas en tablet (≥394px) */
  ${media.md`
    padding: 0 40px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  /* 5 columnas en desktop (≥834px) */
  ${media.lg`
    padding: 0 100px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  `}
`

export const Cell = styled.div`
  /* cada tarjeta ocupa 1 columna en todos los tamaños */
  grid-column: span 1;
`
