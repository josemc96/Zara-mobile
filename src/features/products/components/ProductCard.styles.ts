import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "@/styles/media"

/* Contenedor raíz */
export const Card = styled.article`
  width: 100%;
  background: #fff;
  border: 0.5px solid #000000;
  position: relative;
  overflow: hidden;
  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 160ms ease, box-shadow 160ms ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`

/* Hacemos clickable toda la tarjeta */
export const ClickArea = styled(Link)`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;
  padding: 16px;
  color: inherit;
  text-decoration: none;
  position: relative;

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: -2px;
  }
`

/* Imagen wrapper */
export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 257px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${media.md`
    height: 290px;
  `}

  ${media.lg`
    height: 257px;
  `}
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

/* Info de texto */
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-height: 31px;

  @media (prefers-reduced-motion: no-preference) {
    transition: color 160ms ease;
  }
`

export const Brand = styled.span`
  font-size: 10px;
  letter-spacing: 0.04em;
  color: #8c8c8c;
  text-transform: uppercase;
`

export const Name = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #111;
`

export const Price = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: #111;
`

/* Velo negro que sube desde abajo en hover/focus */
export const Overlay = styled.i`
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.56) 35%, rgba(0, 0, 0, 0) 70%);
  transform: translateY(100%);
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 220ms ease, opacity 220ms ease;
  }

  ${Card}:hover &,
  ${ClickArea}:focus-visible & {
    transform: translateY(0%);
    opacity: 1;
  }

  /* cuando el overlay está visible, blanqueamos los textos */
  ${Card}:hover ${Info},
  ${ClickArea}:focus-visible ${Info} {
    color: #fff;

    ${Brand} {
      color: #e6e6e6;
    }
    ${Name} {
      color: #fff;
    }
    ${Price} {
      color: #fff;
    }
  }
`
