import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

export const metadata: Metadata = {
  title: "Best Practices with useSyncExternalStore",
}

interface LayoutProps extends PropsWithChildren {}

async function Layout({ children }: LayoutProps) {
  return children
}

export default Layout
