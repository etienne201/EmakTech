import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "E. E TECH - Créer et Diffuser votre image",
    template: "%s | E. E TECH",
  },
  description:
    "E. E TECH - Votre partenaire de confiance pour l'imprimerie, les solutions informatiques et le commerce international. Prestations de services professionnelles à Douala, Cameroun.",
  keywords: [
    "imprimerie Douala",
    "solutions informatiques Cameroun",
    "import export Afrique",
    "prestations services",
    "développement web Douala",
    "sérigraphie Cameroun",
    "infographie professionnelle",
    "commerce international",
    "E. E TECH",
    "Terminus Saint Michel",
  ],
  authors: [{ name: "E. E TECH", url: "https://eeteck.com" }],
  creator: "E. E TECH",
  publisher: "E. E TECH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eeteck.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-CM": "/",
      "en-CM": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CM",
    alternateLocale: ["en_CM"],
    url: "https://eeteck.com",
    siteName: "E. E TECH",
    title: "E. E TECH - Créer et Diffuser votre image",
    description:
      "Votre partenaire de confiance pour l'imprimerie, les solutions informatiques et le commerce international à Douala, Cameroun.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "E. E TECH - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E. E TECH - Créer et Diffuser votre image",
    description: "Imprimerie, Solutions informatiques, Import & Export - Douala, Cameroun",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "E. E TECH",
              alternateName: "EMAK TECH",
              url: "https://eeteck.com",
              logo: "https://eeteck.com/logo.png",
              description: "Prestations de services, Import & Export, Imprimerie, Solutions informatiques",
              slogan: "Créer et Diffuser votre image",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Terminus Saint Michel",
                addressLocality: "Douala",
                addressCountry: "CM",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+237679751883",
                  contactType: "customer service",
                  availableLanguage: ["French", "English"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+237693351153",
                  contactType: "technical support",
                  availableLanguage: ["French", "English"],
                },
              ],
              email: "emaktech237@gmail.com",
              sameAs: ["https://wa.me/237679751883"],
              areaServed: {
                "@type": "Country",
                name: "Cameroon",
              },
              serviceType: ["Printing Services", "IT Solutions", "Import Export", "Business Consulting"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorBoundary>
          <Suspense fallback={null}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <LanguageProvider>{children}</LanguageProvider>
            </ThemeProvider>
          </Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
