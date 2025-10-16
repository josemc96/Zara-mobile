// import { Link } from "react-router-dom";
import { ProductCardProps } from "@/types/product"
import {
  Card,
  ClickArea,
  ImageWrap,
  Img,
  Info,
  Brand,
  Name,
  Price,
  Overlay,
} from "./ProductCard.styles"

export default function ProductCard({ id, brand, name, basePrice, imageUrl }: ProductCardProps) {
  return (
    <Card>
      <ClickArea to={`/products/${id}`} aria-label={`${brand} ${name}`}>
        <ImageWrap>
          <Img src={imageUrl} alt={`${brand} ${name}`} loading="lazy" />
        </ImageWrap>

        <Info>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          <Price>{basePrice} EUR</Price>
        </Info>

        {/* velo negro que aparece desde abajo */}
        <Overlay aria-hidden />
      </ClickArea>
    </Card>
  )
}
