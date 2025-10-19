import styled from "styled-components"
import { Link } from "react-router-dom"
import { media } from "@/styles/media"

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 393px;
  height: 44px;
  padding: 12px 16px;
  margin: 24px auto 0;
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
    max-width: 1200px;
    padding: 12px 0;
    margin: 24px auto 0;
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
