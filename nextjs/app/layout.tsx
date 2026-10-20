import type { Metadata, Viewport } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "IICE WAALL – Premium Marine Proteins from Nordic Waters",
  description:
    "IICE WAALL premium marine proteins: anchovy, herring, tuna and salmon protein and marine collagen peptides from pure Nordic waters, packed in 50 kg drums.",
  icons: {
    icon: [
      { url: `${base}/assets/favicon-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${base}/assets/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${base}/assets/apple-touch-icon.png`,
  },
  openGraph: {
    type: "website",
    title: "IICE WAALL – Premium Marine Proteins",
    description: "Anchovy, herring, tuna and salmon protein and marine collagen peptides from pure Nordic waters.",
    images: [`${base}/assets/hero.webp`],
  },
};

export const viewport: Viewport = { themeColor: "#0b3a7a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Outfit:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
