"use client"

import type { ChangeEvent } from "react"
import type { Pokemon, PokemonData } from "../util"
import {
  Checkbox,
  Grid,
  Heading,
  Image,
  toTitleCase,
  VStack,
} from "@yamada-ui/react"
import { useCallback, useState } from "react"
import { getPokemonOfficialArtworkUrl } from "../util"

export interface ListProps {
  data: PokemonData
  onToggle: (checked: boolean, id: number) => void
}

export function List({ data, onToggle }: ListProps) {
  return (
    <Grid
      gap="md"
      templateColumns="repeat(fill, minmax(min(full, 2xs), 1fr))"
      w="full"
    >
      {Object.entries(data).map(function ([id, data]) {
        return <Item id={id} key={id} {...data} onToggle={onToggle} />
      })}
    </Grid>
  )
}

interface ItemProps extends Pokemon {
  id: number
  onToggle: (checked: boolean, id: number) => void
}

function Item({ id, name, onToggle }: ItemProps) {
  const title = toTitleCase(name)
  const src = getPokemonOfficialArtworkUrl(id)
  const [checked, setChecked] = useState(false)

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setChecked(ev.target.checked)
      onToggle(ev.target.checked, id)
    },
    [id, onToggle],
  )

  console.log("render", id)

  return (
    <VStack as="article" borderRadius="md" borderWidth="1px" p="md">
      <Checkbox checked={checked} onChange={onChange}>
        <Heading size="sm" flex="1" lineClamp={1} wordBreak="break-all">
          {title}
        </Heading>
      </Checkbox>

      <Image src={src} alt={title} h="auto" w="full" />
    </VStack>
  )
}
