"use client"

import type { Dispatch, SetStateAction } from "react"
import type { PokemonData } from "../util"
import { useCallback, useRef } from "react"
import { List } from "./list"
import { SubmitButton } from "./submit-button"

export interface FormProps {
  data: PokemonData
}

export function Form({ data }: FormProps) {
  const selectedIdsRef = useRef<number[]>([])
  const setCountRef = useRef<Dispatch<SetStateAction<number>>>(() => {})

  const onToggle = useCallback((checked: boolean, id: number) => {
    if (checked) {
      selectedIdsRef.current.push(id)
    } else {
      selectedIdsRef.current = selectedIdsRef.current.filter(
        (selectedId) => selectedId !== id,
      )
    }

    setCountRef.current(selectedIdsRef.current.length)
  }, [])

  const onSubmit = useCallback(() => {
    console.log("submitted", selectedIdsRef.current)
  }, [selectedIdsRef])

  return (
    <>
      <List data={data} onToggle={onToggle} />

      <SubmitButton ref={setCountRef} onClick={onSubmit} />
    </>
  )
}
