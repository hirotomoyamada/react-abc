"use client"

import type { Pokemon, PokemonData } from "../../util"
import {
  Box,
  Checkbox,
  Grid,
  Heading,
  Image,
  toTitleCase,
  VStack,
} from "@yamada-ui/react"
import { useSyncExternalStore } from "react"
import { getPokemonOfficialArtworkUrl } from "../../util"
import { store } from "./store"

export interface ListProps {
  data: PokemonData
}

export function List({ data }: ListProps) {
  return (
    <Grid
      gap="md"
      templateColumns="repeat(fill, minmax(min(full, 2xs), 1fr))"
      w="full"
    >
      {Object.entries(data).map(function ([id, data]) {
        return <Item id={id} key={id} {...data} />
      })}
    </Grid>
  )
}

interface ItemProps extends Pokemon {
  id: number
}

function Item({ id, name }: ItemProps) {
  const title = toTitleCase(name)
  const src = getPokemonOfficialArtworkUrl(id)
  const checked = useSyncExternalStore(
    store.subscribe,
    store.getSnapshotWithId(id),
    store.getSnapshotWithId(id),
  )

  console.log("render", id)

  return (
    <Box as="article" borderRadius="md" borderWidth="1px">
      <VStack as="label" htmlFor={id.toString()} p="md">
        <Checkbox
          id={id.toString()}
          checked={checked}
          labelProps={{ as: "span" }}
          onChange={(ev) =>
            store.setState((prevState) => {
              return { ...prevState, [id]: ev.target.checked }
            })
          }
        >
          <Heading size="sm" flex="1" lineClamp={1} wordBreak="break-all">
            {title}
          </Heading>
        </Checkbox>

        <Image src={src} alt={title} h="auto" w="full" />
      </VStack>
    </Box>
  )
}
