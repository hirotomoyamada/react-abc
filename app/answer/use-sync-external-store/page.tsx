"use client"

import type { PropsWithChildren } from "react"
import { HeadingWithTag, Section } from "@/component"
import { Button, Grid, Text, VStack } from "@yamada-ui/react"
import { useSyncExternalStore } from "react"

function createStore<Y>(initialState: Y) {
  let state = initialState
  const listeners = new Set<() => void>()

  return {
    getSnapshot: function () {
      return state
    },
    setState: function (newState: Y) {
      state = newState
      listeners.forEach((listener) => listener())
    },
    subscribe: function (listener: () => void) {
      listeners.add(listener)

      return function () {
        listeners.delete(listener)
      }
    },
  }
}

const store = createStore(false)

function Page() {
  return (
    <A>
      <B />
      <C />
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

interface BProps {}

function B({}: BProps) {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)

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
  console.log("render C")

  return (
    <VStack as="section" borderWidth="1px" p="md" rounded="md">
      <HeadingWithTag colorScheme="blue" tag="Child">
        C
      </HeadingWithTag>

      <Button onClick={() => store.setState(!store.getSnapshot())}>
        Change State
      </Button>
    </VStack>
  )
}
