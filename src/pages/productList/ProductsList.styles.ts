import styled from "styled-components"
import { media } from "@/styles/media"

export const Page = styled.section`
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  gap: 24px;
  padding-top: 180px;

  ${media.md`
    gap: 24px;
  `}

  ${media.lg`
    gap: 48px;
  `}
`

export const HeaderBar = styled.header`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px 16px;
  background: #ffffff;
  z-index: 99;

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
  width: 68px;
  height: 15px;
  font-size: 12px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: #000000;
  white-space: nowrap;
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

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 16px;
  text-align: center;

  ${media.md`
    padding: 64px 40px;
  `}

  ${media.lg`
    padding: 80px 100px;
  `}
`

export const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fee2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #dc2626;
`

export const ErrorText = styled.p`
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #374151;
  line-height: 1.5;

  ${media.md`
    font-size: 18px;
  `}
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 16px;
  text-align: center;
  grid-column: 1 / -1;

  ${media.md`
    padding: 64px 40px;
  `}

  ${media.lg`
    padding: 80px 100px;
  `}
`

export const EmptyIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #6b7280;
`

export const EmptyText = styled.p`
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #6b7280;
  line-height: 1.5;

  ${media.md`
    font-size: 18px;
  `}
`
