"use client"

import type { ChangeEvent, Dispatch, SetStateAction } from "react"
import type { Pokemon, PokemonData } from "../util"
import {
  Checkbox,
  Grid,
  Heading,
  Image,
  toTitleCase,
  VStack,
} from "@yamada-ui/react"
import { useCallback } from "react"
import { getPokemonOfficialArtworkUrl } from "../util"

export interface ListProps {
  data: PokemonData
  selectedIds: number[]
  setSelectedIds: Dispatch<SetStateAction<number[]>>
}

export function List({ data, selectedIds, setSelectedIds }: ListProps) {
  return (
    <Grid
      gap="md"
      templateColumns="repeat(fill, minmax(min(full, 2xs), 1fr))"
      w="full"
    >
      {Object.entries(data).map(function ([id, data]) {
        return (
          <Item
            id={id}
            key={id}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            {...data}
          />
        )
      })}
    </Grid>
  )
}

interface ItemProps extends Pokemon {
  id: number
  selectedIds: number[]
  setSelectedIds: Dispatch<SetStateAction<number[]>>
}

function Item({ id, name, selectedIds, setSelectedIds }: ItemProps) {
  const title = toTitleCase(name)
  const checked = selectedIds.includes(id)
  const src = getPokemonOfficialArtworkUrl(id)

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (ev.target.checked) {
        setSelectedIds(function (prev) {
          return [...prev, id]
        })
      } else {
        setSelectedIds(function (prev) {
          return prev.filter((selectedId) => selectedId !== id)
        })
      }
    },
    [id, setSelectedIds],
  )

  return (
    <VStack as="article" borderRadius="md" borderWidth="1px" p="md">
      <Checkbox defaultChecked={checked} onChange={onChange}>
        <Heading size="sm" flex="1" lineClamp={1} wordBreak="break-all">
          {title}
        </Heading>
      </Checkbox>

      <Image src={src} alt={title} h="auto" w="full" />
    </VStack>
  )
}
