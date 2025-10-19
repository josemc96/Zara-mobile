import styled from "styled-components"
import { media } from "@/styles/media"

export const ProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
  margin-bottom: 24px;
  width: 100%;

  /* Tablet: horizontal layout */
  ${media.md`
    grid-template-columns: auto 1fr;
    gap: 16px;
  `}

  /* Desktop: horizontal layout */
  ${media.lg`
    grid-template-columns: auto 1fr;
    gap: 40px;
    width: 100%;
  `}
`

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  justify-self: center;

  /* Tablet: fixed size */
  ${media.md`
    width: 200px;
    height: 200px;
    justify-self: start;
  `}

  /* Desktop: larger size */
  ${media.lg`
    width: 250px;
    height: 250px;
  `}
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
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
  align-self: flex-start;

  &:hover {
    opacity: 0.7;
  }
`
