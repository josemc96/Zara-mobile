import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "@/styles/media"

export const Card = styled.article`
  --brand: #8c8c8c;
  --name: #111111;
  --price: #000000;

  --bgY: 100%;

  --bgDur: 520ms;
  --bgEase: cubic-bezier(0.22, 1, 0.36, 1);

  width: 100%;
  background: #fff;
  border: 0.5px solid #000000;
  position: relative;
  overflow: hidden;

  &:hover {
    --brand: #e6e6e6;
    --name: #ffffff;
    --price: #ffffff;
    --bgY: 0%;
  }
`

export const ClickArea = styled(Link)`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;
  padding: 16px;
  color: inherit;
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #000;
    transform: translateY(var(--bgY, 100%));
    will-change: transform;
    z-index: 0;

    @media (prefers-reduced-motion: no-preference) {
      transition: transform var(--bgDur) var(--bgEase);
    }
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: -2px;

    --brand: #e6e6e6;
    --name: #ffffff;
    --price: #ffffff;
    --bgY: 0%;
  }
`

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.2 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${media.md` aspect-ratio: 1.19 / 1; `}
  ${media.lg` aspect-ratio: 1.2 / 1; `}
`

export const Img = styled.img`
  display: block;
  max-width: 180px;
  max-height: 180px;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;

  ${media.md` max-width: 200px; max-height: 200px; `}
  ${media.lg` max-width: 180px; max-height: 180px; `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 31px;
  gap: 4px;
  position: relative;
  z-index: 1;
`

export const BrandNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-height: 31px;
`

export const Brand = styled.span`
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--brand);
  text-transform: uppercase;

  @media (prefers-reduced-motion: no-preference) {
    transition: color var(--bgDur) var(--bgEase);
  }
`

export const Name = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--name);

  @media (prefers-reduced-motion: no-preference) {
    transition: color var(--bgDur) var(--bgEase);
  }
`

export const Price = styled.span`
  width: 54px;
  height: 15px;
  font-size: 12px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  text-transform: capitalize;
  color: var(--price);
  white-space: nowrap;
  align-self: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    transition: color var(--bgDur) var(--bgEase);
  }
`
