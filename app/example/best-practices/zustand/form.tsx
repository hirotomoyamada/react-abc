"use client"

import type { PokemonData } from "../../util"
import { List } from "./list"
import { SubmitButton } from "./submit-button"

export interface FormProps {
  data: PokemonData
}

export function Form({ data }: FormProps) {
  return (
    <>
      <List data={data} />

      <SubmitButton />
    </>
  )
}
