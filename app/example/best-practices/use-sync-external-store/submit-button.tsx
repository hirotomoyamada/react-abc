import type { ButtonProps } from "@yamada-ui/react"
import { Button } from "@yamada-ui/react"
import { useCallback, useSyncExternalStore } from "react"
import { store } from "./store"

export interface SubmitButtonProps extends ButtonProps {}

export function SubmitButton({ ...rest }: SubmitButtonProps) {
  const selectedIdMap = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
  )
  const count = Object.values(selectedIdMap).filter(Boolean).length

  const onSubmit = useCallback(() => {
    console.log(
      "submitted",
      Object.entries(selectedIdMap)
        .filter(([_, checked]) => checked)
        .map(([id]) => Number(id)),
    )
  }, [selectedIdMap])

  return (
    <Button
      colorScheme="primary"
      size="lg"
      bottom="md"
      position="sticky"
      rounded="full"
      {...rest}
      onClick={onSubmit}
    >
      Submit ({count})
    </Button>
  )
}
