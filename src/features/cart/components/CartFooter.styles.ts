import styled from "styled-components"
import { Link } from "react-router-dom"

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
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
