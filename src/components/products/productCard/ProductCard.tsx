// import { Link } from "react-router-dom";
import { ProductCardProps } from "@/types/product"
import {
  Card,
  ClickArea,
  ImageWrap,
  Img,
  Info,
  BrandNameWrapper,
  Brand,
  Name,
  Price,
} from "./ProductCard.styles"

export default function ProductCard({ id, brand, name, basePrice, imageUrl }: ProductCardProps) {
  return (
    <Card>
      <ClickArea to={`/products/${id}`} aria-label={`${brand} ${name}`}>
        <ImageWrap>
          <Img src={imageUrl} alt={`${brand} ${name}`} loading="lazy" />
        </ImageWrap>

        <Info>
          <BrandNameWrapper>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
          </BrandNameWrapper>
          <Price>{basePrice} EUR</Price>
        </Info>
      </ClickArea>
    </Card>
  )
}
