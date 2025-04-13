"use client"

import type { UsageTheme } from "@yamada-ui/react"
import { extendTheme } from "@yamada-ui/react"

const customTheme: UsageTheme = {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
}

export const theme = extendTheme(customTheme)()
