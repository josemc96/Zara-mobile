import styled from "styled-components"
import { media } from "@/styles/media"

/* ===== Lienzo ===== */
export const CartPage = styled.section`
  max-width: 440px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.bg};

  ${media.md` max-width: 834px; `}
  ${media.lg` max-width: 1920px; `}
`

/* ===== Header interno del carrito (no navbar) ===== */
export const Header = styled.header`
  height: 80px;
  padding: 24px 16px;
  display: flex;
  align-items: center;
  background: #fff;

  ${media.md`
    padding: 24px 40px;
    justify-content: space-between;
  `}
  ${media.lg`
    padding: 24px 100px;
  `}
`

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.01em;
`

/* ===== Barra de carga (solo desktop) ===== */
export const LoadingBar = styled.div`
  display: none;
  ${media.lg`
    display: block;
    height: 1px;
    background: #000;
    margin-top: 80px; /* distancia desde el header, según Figma */
  `}
`

/* ===== Contenido ===== */
export const Content = styled.div`
  /* mobile */
  padding: 24px 16px 0 16px;
  display: grid;
  gap: 24px;

  ${media.md`
    /* tablet */
    padding: 80px 40px 0 40px;
    gap: 48px;
  `}
  ${media.lg`
    /* desktop */
    padding: 128px 100px 0 100px;
  `}
`

/* ===== Footer común (empty/filled) ===== */
export const Footer = styled.footer`
  margin-top: 24px;
  border-top: 0.5px solid ${({ theme }) => theme.color.border};
  background: #fff;

  /* mobile: columna */
  padding: 24px 16px;
  display: grid;
  gap: 24px;

  ${media.md`
    /* tablet */
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 112px; /* “Hug (112px)” */
  `}
  ${media.lg`
    /* desktop */
    padding: 24px 100px 56px 100px; /* top / sides / bottom */
    min-height: 136px;              /* “Hug (136px)” */
  `}
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .amount {
    font-size: 14px;
    font-weight: 600;
  }

  ${media.md`
    min-width: 220px;
    justify-content: center;
    gap: 16px;
    order: 1; /* centrado entre botones en tablet/desktop */
  `}
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  ${media.md` display: contents; `}
`

export const GhostButton = styled.button`
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: #fff;
  font-weight: 600;
  cursor: pointer;

  ${media.md` width: 240px; order: 0; `}
`

export const PrimaryButton = styled.button`
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  border: 0;
  background: ${({ theme }) => theme.color.text};
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  ${media.md` width: 200px; order: 2; `}
`

/* ===== Line item ===== */
export const LineItem = styled.article`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 16px;

  ${media.md`
    grid-template-columns: 140px 1fr;
    gap: 24px;
  `}
`

export const ImageBox = styled.div`
  width: 96px;
  height: 96px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  display: grid;
  place-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.md` width: 140px; height: 140px; `}
`

export const ItemInfo = styled.div`
  display: grid;
  gap: 6px;

  .name {
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
  }
  .meta,
  .price,
  .remove {
    font-size: 12px;
  }
  .meta {
    color: ${({ theme }) => theme.color.muted};
  }
  .price {
    margin-top: 4px;
    font-weight: 600;
  }
  .remove {
    margin-top: 6px;
    color: #e11d48;
    cursor: pointer;
  }

  ${media.md`
    .name { font-size: 14px; }
    .meta, .price, .remove { font-size: 13px; }
  `}
`
