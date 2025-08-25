import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Referensprojekt - FixaBygglov",
  description: "Se våra genomförda referensprojekt för Skanska, NCC, Veidekke och PEAB. Från passivhus till kommersiella komplex och kulturskyddade byggnader.",
}

export default function ProjektLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
