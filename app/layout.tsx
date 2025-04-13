import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { AppLayout } from "@/layout"
import { theme } from "@/theme"
import { ColorModeScript, UIProvider } from "@yamada-ui/react"
import { Inter } from "next/font/google"
import { ReactScan } from "./react-scan"

const inter = Inter({
  style: "normal",
  display: "block",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  description: "React ABC Questions",
  title: "React ABC Questions",
}

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactScan />

      <body className={inter.className} suppressHydrationWarning>
        <ColorModeScript />

        <UIProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </UIProvider>
      </body>
    </html>
  )
}

export default Layout
