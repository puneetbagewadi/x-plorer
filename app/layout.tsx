import type { Metadata } from "next"
import { M_PLUS_2 } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import "./globals.css"
import AppLayout from "./AppLayout"
import ThemeProvider from "@/context/ThemeProvider"
import { ReduxProvider } from "@/redux/provider"
import { Web3Provider } from "@/components/Web3Provider"

const m_plus_2 = M_PLUS_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-m_plus_2",
})

export const metadata: Metadata = {
  title: "X-Plorer",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={m_plus_2.className}>
      <body className={m_plus_2.className}>
        <Web3Provider>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <ReduxProvider>
            <ThemeProvider>
              <AppLayout>{children}</AppLayout>
            </ThemeProvider>
          </ReduxProvider>
        </Web3Provider>
      </body>
    </html>
  )
}
