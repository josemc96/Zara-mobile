import styled from "styled-components"
import { media } from "@/styles/media"

export const CartPageContainer = styled.section`
  width: 100%;
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
  width: 100%;
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
