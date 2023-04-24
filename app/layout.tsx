import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import './globals.css'
import Modal from "./components/modals/Modal";
import ClientOnly from "./components/ClientOnly";  //fix for potential hydration issue on load

export const metadata = {
  title: 'AirBnb Clone',
  description: 'AirBnb Clone Powered by Next.js',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="submit" title="hello" isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
