"use client"
import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SEOHead({
  title = "E. E TECH - Créer et Diffuser votre image",
  description = "Votre partenaire de confiance pour l'imprimerie, les solutions informatiques et le commerce international à Douala, Cameroun.",
  canonical,
  ogImage = "/logo.png",
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("E. E TECH") ? title : `${title} | E. E TECH`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
