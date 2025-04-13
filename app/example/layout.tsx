import type { PropsWithChildren } from "react"
import { Link } from "@/component"

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}

      <Link href="/">Go to back</Link>
    </>
  )
}

export default Layout
