"use client"

import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import { HeadingWithTag, Section } from "@/component"
import { Button, Grid, Text, VStack } from "@yamada-ui/react"
import { useState } from "react"

function Page() {
  const [state, setState] = useState(false)

  return (
    <A>
      <B state={state} />
      <C setState={setState} />
    </A>
  )
}

export default Page

interface AProps extends PropsWithChildren {}

function A({ children }: AProps) {
  console.log("render A")

  return (
    <Section>
      <HeadingWithTag tag="Parent">A</HeadingWithTag>

      <Grid gap="md" templateColumns="repeat(2, 1fr)">
        {children}
      </Grid>
    </Section>
  )
}

interface BProps {
  state: boolean
}

function B({ state }: BProps) {
  console.log("render B")

  return (
    <Section rounded="md">
      <HeadingWithTag colorScheme="blue" tag="Child">
        B
      </HeadingWithTag>

      <Text>{JSON.stringify(state)}</Text>
    </Section>
  )
}

interface CProps {
  setState: Dispatch<SetStateAction<boolean>>
}

function C({ setState }: CProps) {
  console.log("render C")

  return (
    <VStack as="section" borderWidth="1px" p="md" rounded="md">
      <HeadingWithTag colorScheme="blue" tag="Child">
        C
      </HeadingWithTag>

      <Button onClick={() => setState((prev) => !prev)}>Change State</Button>
    </VStack>
  )
}
