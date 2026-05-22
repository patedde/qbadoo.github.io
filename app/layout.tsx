import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QbaDoo — Narrazione AR per i siti del patrimonio culturale",
  description:
    "QbaDoo aiuta siti archeologici, musei e operatori culturali a creare esperienze di narrazione in realtà aumentata coinvolgenti per famiglie, giovani turisti e scuole.",
  keywords: [
    "narrazione AR",
    "patrimonio culturale",
    "siti archeologici",
    "innovazione museale",
    "turismo per famiglie",
    "visite didattiche",
    "turismo in realtà aumentata"
  ],
  openGraph: {
    title: "QbaDoo — Dai vita ai siti culturali con la narrazione AR",
    description:
      "Un livello narrativo AR coinvolgente per siti archeologici, parchi del patrimonio, musei e itinerari culturali."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
