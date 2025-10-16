import styled from "styled-components"
import { media } from "@/styles/media"

export const Page = styled.section`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--page-padding-x);
  display: grid;
  gap: 16px;
`

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;

  ${media.lg` padding-top: 24px; `}
`

export const SearchInput = styled.input.attrs({ type: "search" })`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font: inherit;

  &:focus {
    outline: 2px solid #111;
    outline-offset: 2px;
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
  gap: var(--grid-gap);

  /* 1 columna en móvil */
  grid-template-columns: repeat(1, minmax(0, 1fr));

  /* 2 columnas en tablet (≥394px) */
  ${media.md`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  /* 5 columnas en desktop (≥834px) */
  ${media.lg`
    grid-template-columns: repeat(5, minmax(0, 1fr));
  `}
`

export const Cell = styled.div`
  /* cada tarjeta ocupa 1 columna en todos los tamaños */
  grid-column: span 1;
`
