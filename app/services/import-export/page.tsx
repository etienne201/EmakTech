"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Truck, Globe, FileCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ImportExportPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const services = [
    {
      title: language === "fr" ? "Commerce International" : "International Trade",
      description:
        language === "fr"
          ? "Facilitation des échanges commerciaux entre l'Afrique et le monde"
          : "Facilitating trade between Africa and the world",
      icon: Globe,
      features: [
        language === "fr" ? "Sourcing produits" : "Product sourcing",
        language === "fr" ? "Négociation fournisseurs" : "Supplier negotiation",
        language === "fr" ? "Contrôle qualité" : "Quality control",
        language === "fr" ? "Gestion des contrats" : "Contract management",
      ],
    },
    {
      title: language === "fr" ? "Logistique & Transport" : "Logistics & Transport",
      description:
        language === "fr"
          ? "Solutions complètes de transport maritime, aérien et terrestre"
          : "Complete maritime, air and land transport solutions",
      icon: Truck,
      features: [
        language === "fr" ? "Transport maritime" : "Maritime transport",
        language === "fr" ? "Fret aérien" : "Air freight",
        language === "fr" ? "Transport routier" : "Road transport",
        language === "fr" ? "Entreposage" : "Warehousing",
      ],
    },
    {
      title: language === "fr" ? "Dédouanement" : "Customs Clearance",
      description:
        language === "fr"
          ? "Expertise en procédures douanières et réglementations internationales"
          : "Expertise in customs procedures and international regulations",
      icon: FileCheck,
      features: [
        language === "fr" ? "Déclarations douanières" : "Customs declarations",
        language === "fr" ? "Certificats d'origine" : "Certificates of origin",
        language === "fr" ? "Licences d'importation" : "Import licenses",
        language === "fr" ? "Conformité réglementaire" : "Regulatory compliance",
      ],
    },
  ]

  const destinations = [
    {
      region: language === "fr" ? "Europe" : "Europe",
      countries: ["France", "Allemagne", "Italie", "Espagne"],
      specialties: [
        language === "fr" ? "Produits agricoles" : "Agricultural products",
        language === "fr" ? "Textiles" : "Textiles",
        language === "fr" ? "Artisanat" : "Handicrafts",
      ],
      image: "/destinations-europe.jpg",
    },
    {
      region: language === "fr" ? "Asie" : "Asia",
      countries: ["Chine", "Inde", "Japon", "Corée du Sud"],
      specialties: [
        language === "fr" ? "Électronique" : "Electronics",
        language === "fr" ? "Machines" : "Machinery",
        language === "fr" ? "Composants" : "Components",
      ],
      image: "/destinations-asia.jpg",
    },
    {
      region: language === "fr" ? "Amérique" : "America",
      countries: ["États-Unis", "Canada", "Brésil", "Argentine"],
      specialties: [
        language === "fr" ? "Équipements industriels" : "Industrial equipment",
        language === "fr" ? "Technologies" : "Technologies",
        language === "fr" ? "Matières premières" : "Raw materials",
      ],
      image: "/destinations-america.jpg",
    },
    {
      region: language === "fr" ? "Afrique" : "Africa",
      countries: ["Nigeria", "Ghana", "Côte d'Ivoire", "Sénégal"],
      specialties: [
        language === "fr" ? "Produits locaux" : "Local products",
        language === "fr" ? "Ressources naturelles" : "Natural resources",
        language === "fr" ? "Produits transformés" : "Processed products",
      ],
      image: "/destinations-africa.jpg",
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "fr" ? "Consultation" : "Consultation",
      description:
        language === "fr"
          ? "Analyse de vos besoins et étude de faisabilité"
          : "Analysis of your needs and feasibility study",
    },
    {
      step: "02",
      title: language === "fr" ? "Sourcing" : "Sourcing",
      description:
        language === "fr"
          ? "Identification et sélection des fournisseurs"
          : "Identification and selection of suppliers",
    },
    {
      step: "03",
      title: language === "fr" ? "Négociation" : "Negotiation",
      description: language === "fr" ? "Négociation des prix et conditions" : "Price and terms negotiation",
    },
    {
      step: "04",
      title: language === "fr" ? "Logistique" : "Logistics",
      description:
        language === "fr"
          ? "Organisation du transport et dédouanement"
          : "Transport organization and customs clearance",
    },
    {
      step: "05",
      title: language === "fr" ? "Livraison" : "Delivery",
      description: language === "fr" ? "Livraison finale et suivi qualité" : "Final delivery and quality follow-up",
    },
  ]

  const stats = [
    { number: "500+", label: language === "fr" ? "Expéditions Réussies" : "Successful Shipments" },
    { number: "25+", label: language === "fr" ? "Pays Desservis" : "Countries Served" },
    { number: "6", label: language === "fr" ? "Années d'Expérience" : "Years of Experience" },
    { number: "99%", label: language === "fr" ? "Livraisons à Temps" : "On-Time Deliveries" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/10 text-yellow-700 border-yellow-500/20">
              {language === "fr" ? "Import & Export" : "Import & Export"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.services.trade.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {language === "fr"
                ? "Votre passerelle vers les marchés internationaux avec des solutions logistiques complètes et fiables"
                : "Your gateway to international markets with complete and reliable logistics solutions"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg bg-yellow-600 hover:bg-yellow-700">
                {language === "fr" ? "Demander un Devis" : "Request Quote"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6 text-lg bg-transparent">
                <Link href="#destinations">{language === "fr" ? "Nos Destinations" : "Our Destinations"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Nos Services Import/Export" : "Our Import/Export Services"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des solutions complètes pour faciliter vos échanges commerciaux internationaux"
                : "Complete solutions to facilitate your international trade"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Notre Processus" : "Our Process"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une approche structurée pour garantir le succès de vos opérations"
                : "A structured approach to guarantee the success of your operations"}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Nos Destinations" : "Our Destinations"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Nous couvrons les principaux marchés mondiaux avec une expertise locale"
                : "We cover major global markets with local expertise"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.region}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <h3 className="text-white font-semibold">{destination.region}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === "fr" ? "Pays principaux:" : "Main countries:"}
                    </p>
                    <p className="text-sm font-medium">{destination.countries.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === "fr" ? "Spécialités:" : "Specialties:"}
                    </p>
                    <ul className="space-y-1">
                      {destination.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-emerald-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === "fr" ? "Développez votre Commerce International" : "Develop Your International Trade"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous pour explorer de nouveaux marchés et optimiser vos opérations d'import-export"
              : "Contact us to explore new markets and optimize your import-export operations"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-6 text-lg bg-yellow-600 hover:bg-yellow-700">
              <Link href="/contact">{language === "fr" ? "Consultation Gratuite" : "Free Consultation"}</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
              {language === "fr" ? "Nos Tarifs" : "Our Rates"}
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} translations={translations} />
      <FloatingActionButtons />
    </div>
  )
}
