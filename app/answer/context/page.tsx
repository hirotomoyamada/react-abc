"use client"

import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import { HeadingWithTag, Section } from "@/component"
import { Button, Grid, Text, VStack } from "@yamada-ui/react"
import { createContext, use, useState } from "react"

function Page() {
  return (
    <A>
      <Provider>
        <B />
        <C />
      </Provider>
    </A>
  )
}

export default Page

const StateContext = createContext<boolean>(false)
const SetterContext = createContext<Dispatch<SetStateAction<boolean>>>(() => {})

interface ProviderProps extends PropsWithChildren {}

function Provider({ children }: ProviderProps) {
  const [state, setState] = useState(false)

  return (
    <StateContext.Provider value={state}>
      <SetterContext.Provider value={setState}>
        {children}
      </SetterContext.Provider>
    </StateContext.Provider>
  )
}

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

interface BProps {}

function B({}: BProps) {
  const state = use(StateContext)

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

interface CProps {}

function C({}: CProps) {
  const setState = use(SetterContext)

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
