import styled from "styled-components"
import { media } from "@/styles/media"

export const SimilarProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 0 16px;
  margin-top: 24px;

  ${media.md`
    padding: 0 40px;
  `}

  ${media.lg`
    padding: 0 100px;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lg`
    grid-template-columns: repeat(5, 1fr);
  `}
`
