"use client"

import type { PokemonData } from "../util"
import { useCallback, useState } from "react"
import { List } from "./list"
import { SubmitButton } from "./submit-button"

export interface FormProps {
  data: PokemonData
}

export function Form({ data }: FormProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const onSubmit = useCallback(() => {
    console.log("submitted", selectedIds)
  }, [selectedIds])

  return (
    <>
      <List
        data={data}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />

      <SubmitButton count={selectedIds.length} onClick={onSubmit} />
    </>
  )
}
