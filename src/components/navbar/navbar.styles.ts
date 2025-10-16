import styled from "styled-components"

export const Bar = styled.header`
  /* ocupa todo el ancho, fondo blanco y línea inferior muy sutil */
  width: 100%;
  background: #fff;
  border-bottom: 0.5px solid #e5e7eb;
  position: sticky; /* quítalo si no quieres que quede fija */
  top: 0;
  z-index: 100;
`

export const Inner = styled.div`
  /* medidas de Figma */
  height: 80px; /* Fixed(80px) */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* centrado del contenido + paddings responsivos
     (vienen del GridProvider) */
  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: var(--page-padding-x);
  padding-right: var(--page-padding-x);
`

/* enlaces simples; sustituye por iconos cuando quieras */
export const LeftLink = styled.span`
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
`

export const RightLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;
`

export const Badge = styled.span`
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 999px;
  background: #111;
  color: #fff;
  font-size: 11px;
  line-height: 18px;
  text-align: center;
`
