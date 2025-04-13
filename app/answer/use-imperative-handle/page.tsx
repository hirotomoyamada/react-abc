"use client"

import type {
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
} from "react"
import { HeadingWithTag, Section } from "@/component"
import { Button, Grid, Text, VStack } from "@yamada-ui/react"
import { useImperativeHandle, useRef, useState } from "react"

function Page() {
  const ref = useRef<Dispatch<SetStateAction<boolean>>>(() => {})

  return (
    <A>
      <B ref={ref} />
      <C ref={ref} />
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
  ref: RefObject<Dispatch<SetStateAction<boolean>>>
}

function B({ ref }: BProps) {
  const [state, setState] = useState(false)

  useImperativeHandle(ref, () => setState)

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
  ref: RefObject<Dispatch<SetStateAction<boolean>>>
}

function C({ ref }: CProps) {
  console.log("render C")

  return (
    <VStack as="section" borderWidth="1px" p="md" rounded="md">
      <HeadingWithTag colorScheme="blue" tag="Child">
        C
      </HeadingWithTag>

      <Button onClick={() => ref.current((prev) => !prev)}>Change State</Button>
    </VStack>
  )
}
