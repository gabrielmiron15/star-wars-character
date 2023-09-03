import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Star Wars Character Explorer',
  description: `A Star Wars character explorer, which display information of all starwars character from https://swapi.dev/.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
