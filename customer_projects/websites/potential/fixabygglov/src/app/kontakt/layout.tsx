import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - Ark-kon",
  description: "Kontakta oss för gratis offert och konsultation. Vi besöker dig på plats. Telefon: 0768 68 59 02, Email: info@ark-kon.com",
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
