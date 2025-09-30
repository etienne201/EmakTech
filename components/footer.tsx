"use client"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    { key: "printing", title: t.services.printing.title, href: "/services/imprimerie" },
    { key: "it", title: t.services.it.title, href: "/services/informatique" },
    { key: "prestations", title: t.services.business.title, href: "/services/prestations" },
    { key: "importExport", title: t.services.trade.title, href: "/services/import-export" },
  ]

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="E. E TECH Logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">E. E TECH</h3>
                <p className="text-sm text-muted-foreground">{t.footer.slogan}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === "fr"
                ? "Votre partenaire de confiance pour tous vos besoins en imprimerie, solutions informatiques et commerce international."
                : "Your trusted partner for all your printing, IT solutions and international trade needs."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.key}>
                  <Link href={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.contact.title}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>679 75 18 83</p>
              <p>693 35 11 53</p>
              <p>emaktech237@gmail.com</p>
              <p>{t.footer.address}</p>
              <p>Douala, Cameroun</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 E. E TECH. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
