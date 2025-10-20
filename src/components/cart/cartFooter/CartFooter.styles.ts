import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "@/styles/media"

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  padding: 16px;
  background: #ffffff;
  z-index: 100;
  box-sizing: border-box;

  &:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 12px;

    ${media.md`
      display: none;
    `}
  }

  &:last-of-type {
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    ${media.md`
      display: flex;
    `}
  }
`

export const ContinueShoppingButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
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
  white-space: nowrap;

  footer:first-of-type & {
    flex: 1;
  }

  footer:last-of-type & {
    width: auto;
    padding: 12px 24px;
  }

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`

export const TotalSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  footer:first-of-type & {
    justify-content: center;
    width: 100%;
  }

  footer:last-of-type & {
    justify-content: flex-start;
    gap: 16px;
    width: auto;
  }
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;

  footer:first-of-type & {
    display: flex;
  }

  footer:last-of-type & {
    display: none;
  }
`

export const TotalLabel = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000000;

  ${media.md`
    font-size: 14px;
  `}
`

export const TotalAmount = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000000;

  ${media.md`
    font-size: 18px;
  `}
`

export const PayButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 160ms ease;
  white-space: nowrap;

  footer:first-of-type & {
    flex: 1;
  }

  footer:last-of-type & {
    padding: 12px 80px;
    font-size: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`
