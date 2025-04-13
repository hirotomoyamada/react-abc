import type { HeadingProps, TagProps } from "@yamada-ui/react"
import type { ReactNode } from "react"
import { Heading, Tag } from "@yamada-ui/react"

export interface HeadingWithTagProps extends HeadingProps {
  colorScheme?: TagProps["colorScheme"]
  tag?: ReactNode
  tagProps?: TagProps
}

export function HeadingWithTag({
  colorScheme = "orange",
  children,
  tag,
  tagProps,
  ...rest
}: HeadingWithTagProps) {
  return (
    <Heading size="md" alignItems="center" display="inline-flex" {...rest}>
      {children}
      <Tag colorScheme={colorScheme} size="sm" ms="sm" {...tagProps}>
        {tag}
      </Tag>
    </Heading>
  )
}
