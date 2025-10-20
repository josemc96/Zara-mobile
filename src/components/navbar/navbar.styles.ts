import styled from "styled-components"

export const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  z-index: 100;
`

export const Inner = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: var(--page-padding-x);
  padding-right: var(--page-padding-x);
`

export const LeftLink = styled.span`
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
`

export const RightLink = styled.span`
  display: inline-flex;
  align-items: flex-end;
  gap: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
`

export const Badge = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0%;
  text-transform: uppercase;
`
