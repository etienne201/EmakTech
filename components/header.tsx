"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Globe, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const t = translations[language]

  // Appliquer le dark mode sur <html>
  useEffect(() => {
    try {
      if (typeof document !== "undefined") {
        if (isDark) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    } catch (error) {
      console.warn("Erreur lors de l'application du dark mode:", error)
    }
  }, [isDark])

  const services = [
    {
      key: "printing",
      title: t.services.printing.title,
      description: "Infographie, sérigraphie, graphic design",
      icon: "🖨️",
      href: "/services/imprimerie",
    },
    {
      key: "it",
      title: t.services.it.title,
      description: "Web, web design, QA, mobile, cloud",
      icon: "💻",
      href: "/services/informatique",
    },
    {
      key: "prestations",
      title: t.services.business.title,
      description: "Services personnalisés pour votre entreprise",
      icon: "🤝",
      href: "/services/prestations",
    },
    {
      key: "importExport",
      title: t.services.trade.title,
      description: "Commerce international et logistique",
      icon: "🌍",
      href: "/services/import-export",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="E. E TECH Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">E. E TECH</h1>
              <p className="text-sm text-muted-foreground">{t.footer.slogan}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t.nav.home}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>{t.nav.services}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service.key} asChild>
                    <Link href={service.href} className="cursor-pointer">
                      <span className="mr-2">{service.icon}</span>
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-sm text-muted-foreground">{service.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    setLanguage("fr")
                    setIsMenuOpen(false)
                  }}
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setLanguage("en")
                    setIsMenuOpen(false)
                  }}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                {t.nav.home}
              </Link>
              <div>
                <div className="font-medium text-foreground mb-2">{t.nav.services}</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link key={service.key} href={service.href} className="flex items-center space-x-2">
                      <span>{service.icon}</span>
                      <div>
                        <div className="text-sm font-medium">{service.title}</div>
                        <div className="text-xs text-muted-foreground">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                {t.nav.contact}
              </Link>

              {/* Mobile Language Switch */}
              <div className="mt-4 flex space-x-2">
                <Button onClick={() => setLanguage("fr")} size="sm" className="flex-1">
                  FR
                </Button>
                <Button onClick={() => setLanguage("en")} size="sm" className="flex-1">
                  EN
                </Button>
              </div>

              {/* Mobile Dark Mode */}
              <Button onClick={() => setIsDark(!isDark)} size="sm" className="mt-2">
                {isDark ? "🌙 Dark" : "☀️ Light"}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
