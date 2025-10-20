import type { ProductSpecificationsProps } from "@/types/product"
import {
  SpecificationsContainer,
  SpecificationsTitle,
  SpecificationsTable,
  SpecRow,
  SpecLabel,
  SpecValue,
} from "./ProductSpecifications.styles"

export default function ProductSpecifications({ specs }: ProductSpecificationsProps) {
  const specEntries = [
    { label: "screen", value: specs.screen },
    { label: "resolution", value: specs.resolution },
    { label: "processor", value: specs.processor },
    { label: "main camera", value: specs.mainCamera },
    { label: "selfie camera", value: specs.selfieCamera },
    { label: "battery", value: specs.battery },
    { label: "os", value: specs.os },
    { label: "screen refresh rate", value: specs.screenRefreshRate },
  ]

  return (
    <SpecificationsContainer>
      <SpecificationsTitle>Specifications</SpecificationsTitle>
      <SpecificationsTable>
        {specEntries.map(({ label, value }) => (
          <SpecRow key={label}>
            <SpecLabel>{label}</SpecLabel>
            <SpecValue>{value}</SpecValue>
          </SpecRow>
        ))}
      </SpecificationsTable>
    </SpecificationsContainer>
  )
}
