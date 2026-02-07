
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ✅ RootLayout.tsx
import "./globals.css";
import { ReactNode } from "react";



// ✅ Google Fonts
import { Space_Grotesk, Archivo_Black, Poppins } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ✅ SEO metadata
export const metadata = {
  title: "MkayMedia - Digital Agency",
  description:
    "MkayMedia is a digital agency specializing in web development, branding, and digital marketing solutions for businesses of all sizes.",
  alternates: {
    canonical: "https://www.mkaymedia.com/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${archivo.variable} ${poppins.variable}`}
    >
      <head>
        {/* ✅ Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Favicons */}
        <link
          rel="icon"
          href="/images/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/hireyourmate_favicon2.png" />

        {/* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mkaymedia.com/" />
        <meta property="og:title" content="MkayMedia - Digital Agency" />
        <meta
          property="og:description"
          content="MkayMedia is a digital agency specializing in web development, branding, and digital marketing solutions for businesses of all sizes."
        />
        <meta property="og:image" content="https://www.mkaymedia.com/images/og-image.png" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.mkaymedia.com/" />
        <meta name="twitter:title" content="MkayMedia - Digital Agency" />
        <meta
          name="twitter:description"
          content="MkayMedia is a digital agency specializing in web development, branding, and digital marketing solutions for businesses of all sizes."
        />
        <meta name="twitter:image" content="https://www.mkaymedia.com/images/og-image.png" />

        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MkayMedia",
              url: "https://www.mkaymedia.com",
              logo: "https://www.mkaymedia.com/images/og-image.png",
              sameAs: [
                "https://twitter.com/mkaymedia",
                "https://www.linkedin.com/company/mkaymedia",
                "https://www.instagram.com/mkaymedia"
              ]
            }),
          }}
        />
      </head>

      <body className="font-sans text-lg text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer  />
      </body>
    </html>
  );
}

