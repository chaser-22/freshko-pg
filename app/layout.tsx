import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#101114",
};

export const metadata: Metadata = {
  title: {
    default: "Freshko — Dubinsko čišćenje u Podgorici",
    template: "%s | Freshko",
  },
  description:
    "Freshko — premium dubinsko čišćenje namještaja, tepiha, madraca i enterijera vozila u Podgorici.",
  openGraph: {
    title: "Freshko — Čistoća koja izgleda svježe",
    description: "Dubinsko čišćenje sa pažnjom prema materijalu i detalju.",
    type: "website",
    locale: "sr_ME",
  },
  icons: { icon: "/mark.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
