import { NextLinkButton } from "@/component"
import { ButtonGroup, Heading, VStack } from "@yamada-ui/react"

function Page() {
  return (
    <VStack maxW="md">
      <Heading as="h2" size="md">
        Answer
      </Heading>

      <ButtonGroup as="nav" flexDirection="column" gap="md">
        <NextLinkButton href="/answer/basic">Basic</NextLinkButton>

        <NextLinkButton href="/answer/context">Context</NextLinkButton>

        <NextLinkButton href="/answer/use-sync-external-store">
          useSyncExternalStore
        </NextLinkButton>

        <NextLinkButton href="/answer/use-imperative-handle">
          useImperativeHandle
        </NextLinkButton>
      </ButtonGroup>

      <Heading as="h2" size="md">
        Example
      </Heading>

      <ButtonGroup as="nav" flexDirection="column" gap="md">
        <NextLinkButton href="/example/basic">Basic</NextLinkButton>

        <NextLinkButton href="/example/best-practices/use-imperative-handle">
          Best Practices with useImperativeHandle
        </NextLinkButton>

        <NextLinkButton href="/example/best-practices/use-sync-external-store">
          Best Practices with useSyncExternalStore
        </NextLinkButton>

        <NextLinkButton href="/example/best-practices/zustand">
          Best Practices with Zustand
        </NextLinkButton>
      </ButtonGroup>
    </VStack>
  )
}

export default Page
