import styled from "styled-components"
import { media } from "@/styles/media"

export const CartPageContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 104px 16px 100px;
  min-height: 100vh;

  ${media.md`
    padding: 104px 40px 100px;
  `}

  ${media.lg`
    padding: 104px 100px 100px;
  `}
`

export const CartHeader = styled.header`
  display: flex;
  justify-content: flex-start;
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
