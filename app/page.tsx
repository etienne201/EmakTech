"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Quote,
  Target,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const services = [
    {
      key: "printing",
      title: t.services.printing.title,
      description: "Infographie, sérigraphie, graphic design",
      image: "/imprimerie.png",
      href: "/services/imprimerie",
      color: "bg-primary",
      features: [
        "Infographie professionnelle",
        "Sérigraphie haute qualité",
        "Design graphique créatif",
        "Impression grand format",
        "Cartes de visite",
        "Flyers et brochures",
      ],
      projects: "200+ projets réalisés",
    },
    {
      key: "it",
      title: t.services.it.title,
      description: "Web, web design, QA, mobile, cloud",
      image: "/solutioninfotmatique.png",
      href: "/services/informatique",
      color: "bg-secondary",
      features: [
        "Développement web moderne",
        "Applications mobiles natives",
        "Solutions cloud sécurisées",
        "Assurance qualité (QA)",
        "E-commerce sur mesure",
        "Maintenance et support",
      ],
      projects: "150+ applications développées",
    },
    {
      key: "prestations",
      title: t.services.business.title,
      description: "Services personnalisés pour votre entreprise",
      image: "/prestavtionservice.png",
      href: "/services/prestations",
      color: "bg-accent",
      features: [
        "Conseil stratégique",
        "Formation professionnelle",
        "Support technique 24/7",
        "Maintenance préventive",
        "Audit et optimisation",
        "Gestion de projet",
      ],
      projects: "300+ clients accompagnés",
    },
    {
      key: "importExport",
      title: t.services.trade.title,
      description: "Commerce international et logistique",
      image: "/import&export.png",
      href: "/services/import-export",
      color: "bg-foreground",
      features: [
        "Commerce international",
        "Logistique optimisée",
        "Dédouanement rapide",
        "Transport sécurisé",
        "Sourcing produits",
        "Négociation fournisseurs",
      ],
      projects: "500+ expéditions réussies",
    },
  ]


  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Entreprise ABC",
      text:
        language === "fr"
          ? "E. E TECH a transformé notre présence digitale. Leur expertise technique et leur service client sont exceptionnels."
          : "E. E TECH transformed our digital presence. Their technical expertise and customer service are exceptional.",
      rating: 5,
    },
    {
      name: "Jean-Paul Kamga",
      company: "Import Solutions",
      text:
        language === "fr"
          ? "Grâce à E. E TECH, nos opérations d'import-export sont devenues plus fluides et efficaces. Je recommande vivement."
          : "Thanks to E. E TECH, our import-export operations have become smoother and more efficient. I highly recommend.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "Creative Studio",
      text:
        language === "fr"
          ? "L'équipe d'imprimerie de E. E TECH a donné vie à nos créations avec une qualité remarquable."
          : "E. E TECH's printing team brought our creations to life with remarkable quality.",
      rating: 5,
    },
  ]

  const whyChooseUs = [
    {
      icon: Target,
      title: language === "fr" ? "Expertise Reconnue" : "Recognized Expertise",
      description:
        language === "fr"
          ? "Plus de 10 ans d'expérience dans nos domaines de spécialisation"
          : "Over 10 years of experience in our areas of specialization",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Qualité Garantie" : "Guaranteed Quality",
      description:
        language === "fr"
          ? "Processus rigoureux et contrôle qualité à chaque étape"
          : "Rigorous processes and quality control at every step",
    },
    {
      icon: Clock,
      title: language === "fr" ? "Délais Respectés" : "Deadlines Met",
      description:
        language === "fr"
          ? "Livraison dans les temps, respect des engagements pris"
          : "On-time delivery, keeping our commitments",
    },
    {
      icon: TrendingUp,
      title: language === "fr" ? "Innovation Continue" : "Continuous Innovation",
      description:
        language === "fr"
          ? "Adoption des dernières technologies et meilleures pratiques"
          : "Adoption of latest technologies and best practices",
    },
  ]

  const recentProjects = [
    {
      title: language === "fr" ? "Site E-commerce Moderne" : "Modern E-commerce Site",
      category: language === "fr" ? "Développement Web" : "Web Development",
      image: "/modern-ecommerce-website.png",
      description:
        language === "fr"
          ? "Plateforme de vente en ligne complète avec paiement sécurisé"
          : "Complete online sales platform with secure payment",
    },
    {
      title: language === "fr" ? "Identité Visuelle Complète" : "Complete Visual Identity",
      category: language === "fr" ? "Design Graphique" : "Graphic Design",
      image: "/brand-identity-design-logo.jpg",
      description:
        language === "fr"
          ? "Logo, charte graphique et supports de communication"
          : "Logo, graphic charter and communication materials",
    },
    {
      title: language === "fr" ? "Logistique Internationale" : "International Logistics",
      category: "Import/Export",
      image: "/international-shipping-containers.jpg",
      description:
        language === "fr"
          ? "Gestion complète d'une chaîne d'approvisionnement internationale"
          : "Complete management of an international supply chain",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
                {language === "fr" ? "Votre Partenaire de Confiance" : "Your Trusted Partner"}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-6 text-lg bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Link href="/contact">{t.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/HomeEmak.png"
                  alt={language === "fr" ? "E. E TECH - Services Intégrés" : "E. E TECH - Integrated Services"}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.nav.services}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des solutions complètes et innovantes pour répondre à tous vos besoins professionnels"
                : "Complete and innovative solutions to meet all your professional needs"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.key}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 cursor-pointer block"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                </div>


                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Pourquoi Choisir E. E TECH ?" : "Why Choose E. E TECH?"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Notre engagement envers l'excellence nous distingue de la concurrence"
                : "Our commitment to excellence sets us apart from the competition"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Projets Récents" : "Recent Projects"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Découvrez quelques-unes de nos réalisations les plus récentes"
                : "Discover some of our most recent achievements"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Témoignages Clients" : "Client Testimonials"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Ce que nos clients disent de nos services"
                : "What our clients say about our services"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === "fr" ? "Prêt à démarrer votre projet ?" : "Ready to start your project?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé gratuit."
              : "Contact us today to discuss your needs and get a free personalized quote."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">{language === "fr" ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8 py-6 text-lg bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/about">{language === "fr" ? "En savoir plus sur nous" : "Learn more about us"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t.newsletter.title}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Restez informé de nos dernières actualités, offres spéciales et conseils d'experts"
              : "Stay informed about our latest news, special offers and expert advice"}
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input placeholder={t.newsletter.placeholder} className="flex-1" />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              {t.newsletter.subscribe}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
