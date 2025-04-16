import type { ButtonProps } from "@yamada-ui/react"
import type { Dispatch, RefObject, SetStateAction } from "react"
import { Button } from "@yamada-ui/react"
import { useImperativeHandle, useState } from "react"

export interface SubmitButtonProps extends ButtonProps {
  ref: RefObject<Dispatch<SetStateAction<number>>>
}

export function SubmitButton({ ref, ...rest }: SubmitButtonProps) {
  const [count, setCount] = useState(0)

  useImperativeHandle(ref, () => setCount)

  return (
    <Button
      colorScheme="primary"
      size="lg"
      bottom="md"
      position="sticky"
      rounded="full"
      {...rest}
    >
      Submit ({count})
    </Button>
  )
}
