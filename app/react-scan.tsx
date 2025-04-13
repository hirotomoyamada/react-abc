"use client"

import { useEffect } from "react"
import { scan } from "react-scan"

export function ReactScan() {
  useEffect(() => {
    scan({
      enabled: true,
    })
  }, [])

  return null
}
