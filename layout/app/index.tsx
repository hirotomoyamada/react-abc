import type { PropsWithChildren } from "react"
import { NextLink } from "@/component"
import { Center, Heading, HStack, Spacer, Text, VStack } from "@yamada-ui/react"
import { ColorModeToggleButton } from "./color-mode-toggle-button"

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <VStack gap="0" minH="100dvh">
      <HStack as="header" p="md">
        <NextLink href="/">
          <Heading>React ABC Questions</Heading>
        </NextLink>

        <Spacer />

        <ColorModeToggleButton />
      </HStack>

      <Center as="main" flex="1" flexDirection="column" gap="md" p="md">
        {children}
      </Center>

      <Center as="footer" p="md">
        <Text as="small" color="muted">
          Created by Hirotomo Yamada
        </Text>
      </Center>
    </VStack>
  )
}
