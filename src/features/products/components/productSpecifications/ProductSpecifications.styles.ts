import styled from "styled-components"
import { media } from "@/styles/media"

export const SpecificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
    margin: 24px auto 0;
  `}
`

export const SpecificationsTitle = styled.h2`
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000000;
`

export const SpecificationsTable = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid #000000;
  border-bottom: 0.5px solid #000000;
`

export const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 12px 0;
  gap: 48px;
  border-bottom: 0.5px solid #000000;

  &:last-child {
    border-bottom: none;
  }
`

export const SpecLabel = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000000;
`

export const SpecValue = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #000000;
`
