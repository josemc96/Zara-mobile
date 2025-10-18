import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@/store/hooks"
import { addItem } from "@/features/cart/cartSlice"
import { getImageForColor, getPriceForStorage, capacities } from "@/utils/product-mappers"
import type { Product } from "@/types/product"
import {
  ProductDetailsContainer,
  ImageContainer,
  InfoContainer,
  TitlePriceContainer,
  ProductTitle,
  ProductPrice,
  StorageContainer,
  StorageLabel,
  StorageButtons,
  StorageButton,
  ColorContainer,
  ColorLabel,
  ColorSwatches,
  ColorSwatch,
  ColorName,
  AddToCartButton,
} from "./ProductDetails.styles"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [color, setColor] = useState("")
  const [capacity, setCapacity] = useState("")
  const [hoveredColor, setHoveredColor] = useState<string | null>(null)

  const img = useMemo(() => getImageForColor(product, color), [product, color])
  const price = useMemo(() => getPriceForStorage(product, capacity), [product, capacity])

  const canAdd = Boolean(product && color && capacity && price > 0)

  const handleAdd = () => {
    if (!product || !canAdd) return
    dispatch(
      addItem({
        productId: product.id,
        name: product.name,
        brand: product.brand,
        color,
        capacity,
        unitPrice: price,
        imageUrl: img,
        qty: 1,
      })
    )
    navigate("/cart")
  }

  return (
    <ProductDetailsContainer>
      <ImageContainer>
        {img && <img src={img} alt={`${product.name}${color ? " " + color : ""}`} />}
      </ImageContainer>
      <InfoContainer>
        <TitlePriceContainer>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>From {price} EUR</ProductPrice>
        </TitlePriceContainer>

        <StorageContainer>
          <StorageLabel>Storage</StorageLabel>
          <StorageButtons>
            {capacities(product).map((c) => (
              <StorageButton key={c} $selected={capacity === c} onClick={() => setCapacity(c)}>
                {c}
              </StorageButton>
            ))}
          </StorageButtons>
        </StorageContainer>

        <ColorContainer>
          <ColorLabel>Color</ColorLabel>
          <ColorSwatches>
            {product.colorOptions?.map((colorOption) => (
              <ColorSwatch
                key={colorOption.name}
                $selected={color === colorOption.name}
                $color={colorOption.hexCode}
                onClick={() => setColor(colorOption.name)}
                onMouseEnter={() => setHoveredColor(colorOption.name)}
                onMouseLeave={() => setHoveredColor(null)}
              />
            ))}
          </ColorSwatches>
          <ColorName $visible={color !== "" || hoveredColor !== null}>
            {color || hoveredColor || product.colorOptions?.[0]?.name}
          </ColorName>
        </ColorContainer>

        <AddToCartButton onClick={handleAdd} disabled={!canAdd}>
          AÑADIR
        </AddToCartButton>
      </InfoContainer>
    </ProductDetailsContainer>
  )
}
