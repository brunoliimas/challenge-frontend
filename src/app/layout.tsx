
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "Mission - Challenge Frontend",
  description: "Desafio Front End",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ToastContainer autoClose={1000} theme="dark" limit={3}/>
        {children}
      </body>
    </html>
  )
}
