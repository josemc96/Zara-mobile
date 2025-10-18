import { useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProduct } from "@/api/products"
import { qk } from "@/api/keys"
import { getImageForColor, getPriceForStorage, capacities } from "@/utils/product-mappers"
import { useAppDispatch } from "@/store/hooks"
import { addItem } from "@/features/cart/cartSlice"
import {
  BackButton,
  BackArrow,
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
} from "./ProductDetailPage.styles"

export default function ProductDetailPage() {
  const { id = "" } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: qk.product(id),
    queryFn: () => getProduct(id),
    enabled: Boolean(id),
    staleTime: 5 * 60_000,
  })

  const [color, setColor] = useState("")
  const [capacity, setCapacity] = useState("")
  const [hoveredColor, setHoveredColor] = useState<string | null>(null)

  const img = useMemo(() => (product ? getImageForColor(product, color) : ""), [product, color])
  const price = useMemo(
    () => (product ? getPriceForStorage(product, capacity) : 0),
    [product, capacity]
  )

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
    // (Opcional) mostrar un toast o navegación al carrito
  }

  if (isLoading) return <p>Cargando…</p>
  if (isError || !product) return <p role="alert">No se pudo cargar el producto</p>

  return (
    <article>
      <BackButton to="/" aria-label="Back to products">
        <BackArrow aria-hidden />
        BACK
      </BackButton>
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

          <button onClick={handleAdd} disabled={!canAdd}>
            Añadir al carrito
          </button>
        </InfoContainer>
      </ProductDetailsContainer>
    </article>
  )
}
