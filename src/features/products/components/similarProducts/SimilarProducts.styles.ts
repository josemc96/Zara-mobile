import styled from "styled-components"
import { media } from "@/styles/media"

export const SimilarProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 393px;
  padding: 0 16px;
  margin: 24px auto 0;

  ${media.md`
    max-width: 754px;
    padding: 0;
    margin: 24px auto 0;
  `}

  ${media.lg`
    max-width: 1200px;
    padding: 0;
    margin: 24px auto 0;
  `}
`

export const SimilarProductsTitle = styled.h2`
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000000;
`

export const SimilarProductsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const CardWrapper = styled.div`
  flex-shrink: 0;
  scroll-snap-align: start;
  width: 280px;

  ${media.md`
    width: 344px;
  `}

  ${media.lg`
    width: 344px;
  `}
`
