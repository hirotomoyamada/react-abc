import type { ButtonProps } from "@yamada-ui/react"
import { Button } from "@yamada-ui/react"

export interface SubmitButtonProps extends ButtonProps {
  count: number
}

export function SubmitButton({ count, ...rest }: SubmitButtonProps) {
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
