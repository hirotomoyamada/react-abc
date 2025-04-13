"use client"

import type { IconButtonProps } from "@yamada-ui/react"
import { MoonIcon, SunIcon } from "@yamada-ui/lucide"
import { IconButton, useColorMode } from "@yamada-ui/react"
import { useMemo } from "react"

interface ColorModeToggleButtonProps extends IconButtonProps {}

export function ColorModeToggleButton(props: ColorModeToggleButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  const Icon = useMemo(
    () => (colorMode === "dark" ? SunIcon : MoonIcon),
    [colorMode],
  )

  return (
    <IconButton
      variant="ghost"
      aria-label="Toggle dark mode"
      icon={<Icon fontSize="2xl" />}
      onClick={toggleColorMode}
      {...props}
    />
  )
}
