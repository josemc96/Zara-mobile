// CartProductCard.styles.ts
import styled from "styled-components"
import { media } from "@/styles/media"

export const ProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 8px;
  margin-bottom: 24px;
  width: 100%;

  /* Tablet: dos columnas, la primera reserva espacio generoso a la imagen */
  ${media.md`
    grid-template-columns: 200px 1fr;
    gap: 16px;
    padding: 16px;
  `}

  /* Desktop: imagen más protagonista, sin width/height fijos en la card */
  ${media.lg`
    grid-template-columns: 260px 1fr;
    gap: 40px;
    width: 100%;
    padding: 16px;
  `}
`

export const ProductImage = styled.img`
  width: 100%;
  height: auto; /* Mantén proporción real de la imagen */
  aspect-ratio: 1 / 1; /* Opcional: la hace cuadrada de forma responsiva */
  object-fit: contain;
  justify-self: center;

  ${media.md`
    justify-self: start;
  `}

  ${media.lg`
    justify-self: start;
  `}
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  height: 100%;
`

export const ProductName = styled.strong`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 4px;
`

export const ProductDetails = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #8c8c8c;
  margin-bottom: 4px;
`

export const ProductPrice = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 8px;
`

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #ff0000;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  margin-top: 16px;

  &:hover {
    opacity: 0.7;
  }
`
