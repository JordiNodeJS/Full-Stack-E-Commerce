// import { DisableDraftMode } from "@/components/DisableDraftMode";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
// import { VisualEditing } from "next-sanity";
// import { draftMode } from "next/headers";
import "../globals.css";

export const metadata: Metadata = {
  title: "Ropa online - Tienda de ropa para hombre y mujer",
  description:
    "En nuestra tienda de ropa online encontrar s la  ltima moda para hombre y mujer. Desde ropa casual hasta ropa de fiesta, pasando por ropa de trabajo o ropa deportiva. En nuestra tienda de ropa encontrar s la ropa que mejor se adapte a tus necesidades y gustos.",
  keywords: [
    "ropa online",
    "tienda de ropa",
    "moda",
    "hombre",
    "mujer",
    "casual",
    "fiesta",
    "trabajo",
    "deportiva",
  ],
  authors: [{ name: "Shoper", url: "https://shoper-store.vercel.app" }],
  openGraph: {
    title: "Ropa online - Tienda de ropa para hombre y mujer",
    description:
      "En nuestra tienda de ropa online encontrar s la  ltima moda para hombre y mujer. Desde ropa casual hasta ropa de fiesta, pasando por ropa de trabajo o ropa deportiva. En nuestra tienda de ropa encontrar s la ropa que mejor se adapte a tus necesidades y gustos.",
    url: "tu-dominio.com",
    siteName: "Tu nombre",
    type: "website",
    images: [
      {
        url: "https://example.com/ropa-online.jpg",
        width: 800,
        height: 600,
        alt: "Imagen de ropa online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ropa online - Tienda de ropa para hombre y mujer",
    description:
      "En nuestra tienda de ropa online encontrar s la  ltima moda para hombre y mujer. Desde ropa casual hasta ropa de fiesta, pasando por ropa de trabajo o ropa deportiva. En nuestra tienda de ropa encontrar s la ropa que mejor se adapte a tus necesidades y gustos.",
    creator: "@tu-nombre",
    images: [
      {
        url: "https://example.com/ropa-online.jpg",
        width: 800,
        height: 600,
        alt: "Imagen de ropa online",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="es">
        <body suppressHydrationWarning>
          {/* {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )} */}
          <main className="overflow-x-hidden">
            <Header />
            {children}
            <Footer />
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
