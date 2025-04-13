import type { StackProps } from "@yamada-ui/react"
import { VStack } from "@yamada-ui/react"

export interface SectionProps extends StackProps {}

export function Section(props: SectionProps) {
  return (
    <VStack
      as="section"
      borderWidth="1px"
      gap="md"
      maxW="3xl"
      p="md"
      rounded="lg"
      {...props}
    />
  )
}
