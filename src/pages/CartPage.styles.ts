import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "@/styles/media"

export const CartPageContainer = styled.section`
  width: 100%;
  max-width: 548px;
  margin: 0 auto;
  padding: 24px 16px;

  ${media.md`
    padding: 24px 40px;
  `}

  ${media.lg`
    padding: 24px 100px;
  `}
`

export const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const CartTitle = styled.h1`
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000000;
`

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: #000000;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`

export const ProductCard = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 16px;
  border: 0.5px solid #000000;
  margin-bottom: 24px;
`

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const CartFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`

export const ContinueShoppingButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: 0.5px solid #000000;
  background: transparent;
  color: #000000;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 160ms ease;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`

export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`

export const TotalLabel = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000000;
`

export const TotalAmount = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`

export const PayButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  background: #333333;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 160ms ease;

  &:hover {
    background: #000000;
  }
`
