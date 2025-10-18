import styled from "styled-components"
import { media } from "@/styles/media"

export const SpecificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 393px;
  padding: 0 16px;
  margin-top: 40px;

  ${media.md`
    width: 754px;
    padding: 0;
    margin-top: 632px;
    margin-left: 40px;
  `}

  ${media.lg`
    width: 1200px;
    margin-top: 1018px;
    margin-left: 360px;
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
  gap: 16px;
`

export const SpecRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SpecLabel = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  color: #8c8c8c;
`

export const SpecValue = styled.span`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #000000;
`
