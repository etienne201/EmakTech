"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Shield, Clock, ArrowRight, Building, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const teamMembers = [
    {
      name: "Emmanuel TECK",
      role: language === "fr" ? "Directeur Général" : "General Manager",
      image: "/team-ceo-professional.jpg",
      description:
        language === "fr"
          ? "Visionnaire et leader avec plus de 15 ans d'expérience dans le secteur des services intégrés."
          : "Visionary leader with over 15 years of experience in the integrated services sector.",
    },
    {
      name: "Marie NGONO",
      role: language === "fr" ? "Directrice Technique" : "Technical Director",
      image: "/team-technical-director.jpg",
      description:
        language === "fr"
          ? "Experte en solutions informatiques et gestion de projets complexes."
          : "Expert in IT solutions and complex project management.",
    },
    {
      name: "Jean KAMGA",
      role: language === "fr" ? "Responsable Commercial" : "Sales Manager",
      image: "/team-sales-manager.jpg",
      description:
        language === "fr"
          ? "Spécialiste en développement commercial et relations clients internationales."
          : "Specialist in business development and international client relations.",
    },
    {
      name: "Sarah MBALLA",
      role: language === "fr" ? "Chef de Projet" : "Project Manager",
      image: "/team-project-manager.jpg",
      description:
        language === "fr"
          ? "Coordinatrice experte en gestion de projets multi-sectoriels."
          : "Expert coordinator in multi-sector project management.",
    },
  ]

  const milestones = [
    {
      year: "2014",
      title: language === "fr" ? "Création de E. E TECH" : "E. E TECH Founded",
      description:
        language === "fr"
          ? "Lancement de l'entreprise avec une vision claire : offrir des services intégrés de qualité."
          : "Company launch with a clear vision: providing quality integrated services.",
    },
    {
      year: "2016",
      title: language === "fr" ? "Expansion des Services" : "Service Expansion",
      description:
        language === "fr"
          ? "Ajout des solutions informatiques et développement de notre expertise technique."
          : "Addition of IT solutions and development of our technical expertise.",
    },
    {
      year: "2018",
      title: language === "fr" ? "Certification Qualité" : "Quality Certification",
      description:
        language === "fr"
          ? "Obtention de certifications internationales pour nos processus qualité."
          : "Obtaining international certifications for our quality processes.",
    },
    {
      year: "2020",
      title: language === "fr" ? "Digitalisation" : "Digitalization",
      description:
        language === "fr"
          ? "Transformation digitale complète et lancement de services cloud."
          : "Complete digital transformation and launch of cloud services.",
    },
    {
      year: "2022",
      title: language === "fr" ? "Expansion Régionale" : "Regional Expansion",
      description:
        language === "fr"
          ? "Extension de nos activités dans toute la région Afrique Centrale."
          : "Extension of our activities throughout the Central Africa region.",
    },
    {
      year: "2024",
      title: language === "fr" ? "Innovation Continue" : "Continuous Innovation",
      description:
        language === "fr"
          ? "Lancement de nouvelles solutions IA et services personnalisés."
          : "Launch of new AI solutions and personalized services.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: language === "fr" ? "Excellence" : "Excellence",
      description:
        language === "fr"
          ? "Nous visons l'excellence dans chaque projet, chaque service et chaque interaction client."
          : "We aim for excellence in every project, every service and every client interaction.",
    },
    {
      icon: Heart,
      title: language === "fr" ? "Passion" : "Passion",
      description:
        language === "fr"
          ? "Notre passion pour l'innovation et la qualité guide toutes nos décisions."
          : "Our passion for innovation and quality guides all our decisions.",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Intégrité" : "Integrity",
      description:
        language === "fr"
          ? "Nous agissons avec transparence et honnêteté dans toutes nos relations."
          : "We act with transparency and honesty in all our relationships.",
    },
    {
      icon: Users,
      title: language === "fr" ? "Collaboration" : "Collaboration",
      description:
        language === "fr"
          ? "Nous croyons en la force du travail d'équipe et des partenariats durables."
          : "We believe in the power of teamwork and lasting partnerships.",
    },
  ]

  const achievements = [
    {
      number: "500+",
      label: language === "fr" ? "Clients Satisfaits" : "Satisfied Clients",
      description: language === "fr" ? "Entreprises qui nous font confiance" : "Companies that trust us",
    },
    {
      number: "1000+",
      label: language === "fr" ? "Projets Réalisés" : "Completed Projects",
      description: language === "fr" ? "Solutions livrées avec succès" : "Solutions delivered successfully",
    },
    {
      number: "10+",
      label: language === "fr" ? "Années d'Expérience" : "Years of Experience",
      description: language === "fr" ? "Expertise reconnue sur le marché" : "Recognized market expertise",
    },
    {
      number: "24/7",
      label: language === "fr" ? "Support Client" : "Customer Support",
      description: language === "fr" ? "Assistance disponible en permanence" : "Assistance available 24/7",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              {language === "fr" ? "Notre Histoire" : "Our Story"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.about.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t.about.mission}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.about.missionText}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">{t.about.vision}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.about.visionText}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{t.about.values}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.about.valuesText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Nos Valeurs Fondamentales" : "Our Core Values"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Les principes qui guident notre action quotidienne et nos relations avec nos clients"
                : "The principles that guide our daily actions and relationships with our clients"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <value.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Notre Parcours" : "Our Journey"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une décennie d'innovation et de croissance continue"
                : "A decade of innovation and continuous growth"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-4"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Notre Équipe" : "Our Team"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des professionnels passionnés et expérimentés à votre service"
                : "Passionate and experienced professionals at your service"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Nos Réalisations" : "Our Achievements"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des chiffres qui témoignent de notre engagement et de notre expertise"
                : "Numbers that testify to our commitment and expertise"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === "fr"
                  ? "Prêt à collaborer avec nous ? Contactez-nous dès aujourd'hui"
                  : "Ready to collaborate with us? Contact us today"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-primary" />
                    {language === "fr" ? "Informations Générales" : "General Information"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Terminus Saint Michel</p>
                      <p className="text-sm text-muted-foreground">Douala, Cameroun</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">679 75 18 83</p>
                      <p className="text-sm text-muted-foreground">693 35 11 53</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <p className="font-medium">emaktech237@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    {language === "fr" ? "Horaires d'Ouverture" : "Opening Hours"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === "fr" ? "Lundi - Vendredi" : "Monday - Friday"}
                    </span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === "fr" ? "Samedi" : "Saturday"}</span>
                    <span className="font-medium">9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === "fr" ? "Dimanche" : "Sunday"}</span>
                    <span className="font-medium">{language === "fr" ? "Fermé" : "Closed"}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      {language === "fr" ? "Support d'urgence disponible 24/7" : "Emergency support available 24/7"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="px-8 py-6 text-lg">
                <Link href="/contact">
                  {language === "fr" ? "Démarrer un Projet" : "Start a Project"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
