import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "@/styles/media"

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 393px;
  height: 44px;
  padding: 12px 16px;
  margin-top: 12px;
  color: #000000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;

  /* Hidden only in tablet */
  ${media.md`
    display: none;
  `}

  /* Visible again in desktop */
  ${media.lg`
    display: flex;
    width: 1920px;
    padding: 12px 100px;
    margin-top: 12px;
  `}

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 160ms ease;
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
  }
`

export const BackArrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 6px 4px 0;
  border-color: transparent #000000 transparent transparent;
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 393px;
  padding: 0 16px;
  margin-top: 12px;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;
    width: 754px;
    height: 416px;
    padding: 0;
    margin-top: 128px;
    margin-left: 40px;
  `}

  ${media.lg`
    width: 1200px;
    height: 630px;
    margin-top: 234px;
    margin-left: 360px;
  `}
`

export const ImageContainer = styled.div`
  width: 260px;
  height: 273px;

  ${media.md`
    width: 337px;
    height: 416px;
  `}

  ${media.lg`
    width: 510px;
    height: 630px;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 361px;

  ${media.md`
    width: 362px;
  `}

  ${media.lg`
    width: 380px;
    gap: 64px;
  `}
`

export const TitlePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 181px;
  height: 52px;

  ${media.md`
    width: 181px;
    height: 52px;
  `}

  ${media.lg`
    width: 380px;
    height: 64px;
  `}
`

export const ProductTitle = styled.h1`
  margin: 0;
  width: 181px;
  height: 24px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: #000000;

  ${media.md`
    width: 181px;
    height: 24px;
    font-size: 20px;
  `}

  ${media.lg`
    width: 380px;
    height: 29px;
    font-size: 24px;
  `}
`

export const ProductPrice = styled.p`
  margin: 0;
  width: 98px;
  height: 17px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: capitalize;
  color: #000000;

  ${media.md`
    width: 98px;
    height: 17px;
    font-size: 14px;
  `}

  ${media.lg`
    width: 168px;
    height: 24px;
    font-size: 20px;
  `}
`

export const StorageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StorageLabel = styled.label`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  text-transform: uppercase;
`

export const StorageButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const StorageButton = styled.button<{ $selected: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${(props) => (props.$selected ? "#000000" : "#e5e7eb")};
  background: ${(props) => (props.$selected ? "#000000" : "#ffffff")};
  color: ${(props) => (props.$selected ? "#ffffff" : "#000000")};
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  transition: all 160ms ease;

  &:hover {
    border-color: #000000;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
  }
`
