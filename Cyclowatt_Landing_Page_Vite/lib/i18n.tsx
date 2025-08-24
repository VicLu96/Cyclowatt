"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "header.reserveIt": "Reserve it",

    // Hero Section
    "hero.headline": "Revolutionary Power Measurement for Cyclists",
    "hero.description": "Experience precision like never before with CycloWatt's cutting-edge power meter technology.",
    "hero.emailPlaceholder": "Enter your email",
    "hero.getStarted": "Get Started",

    // Strengths
    "strengths.title": "WHY CHOOSE US",
    "strengths.lowPrice": "LOW PRICE",
    "strengths.simpleSetup": "Simple Set-Up",
    "strengths.highAccuracy": "HIGH ACCURACY",

    // Announcement
    "announcement.text": "Cyclowatt brings the change you are waiting for. The new power meter is out now",

    // Features
    "features.title": "CYCLOWATT",
    "features.subtitle": "POWER IT UP",
    "features.description":
      "Our innovative power meter system integrates seamlessly with your cycling setup, providing cutting edge power measurement technology at lowest price.",
    "features.integration.tag": "INTEGRATION",
    "features.integration.title": "Seamless Integration",
    "features.integration.description":
      "Perfect integration with cycling shoes. The power meter is attached within seconds as easy other cleat to the cycling shoe, providing simple system setup without affecting your natural pedaling motion.",
    "features.components.tag": "COMPONENTS",
    "features.components.title": "Precision Components",
    "features.components.description":
      "Every component is engineered to perfectly fit into our customized cycling cleats, allowing maximum accuracy and durability. From advanced sensors to robust housing, each part works together to deliver best performance in most demanding conditions.",
    "features.technology.tag": "TECHNOLOGY",
    "features.technology.title": "Advanced Electronics",
    "features.technology.description":
      "State-of-the-art electronics housed in a weatherproof design. Our proprietary algorithms ensure ±4% accuracy while maintaining long battery life and reliable connectivity.",

    // CTA
    "cta.title": "Power Up Your Energy Solutions",
    "cta.description": "Join thousands of cyclists who trust CycloWatt for accurate power measurement.",
    "cta.button": "Get Started Today",

    // Footer
    "footer.company": "Company",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.support": "Support",
    "footer.resources": "Resources",
    "footer.blog": "Blog",
    "footer.documentation": "Documentation",
    "footer.help": "Help Center",
    "footer.rights": "All rights reserved.",
  },
  de: {
    // Header
    "header.reserveIt": "Reservieren",

    // Hero Section
    "hero.headline": "Revolutionäre Leistungsmessung für Radfahrer",
    "hero.description": "Erleben Sie Präzision wie nie zuvor mit CycloWatts modernster Powermeter-Technologie.",
    "hero.emailPlaceholder": "E-Mail eingeben",
    "hero.getStarted": "Loslegen",

    // Strengths
    "strengths.title": "WARUM UNS WÄHLEN",
    "strengths.lowPrice": "NIEDRIGER PREIS",
    "strengths.simpleSetup": "Einfache Installation",
    "strengths.highAccuracy": "HOHE GENAUIGKEIT",

    // Announcement
    "announcement.text":
      "Cyclowatt bringt die Veränderung, auf die Sie warten. Der neue Powermeter ist jetzt verfügbar",

    // Features
    "features.title": "CYCLOWATT",
    "features.subtitle": "POWER IT UP",
    "features.description":
      "Unser innovatives Powermeter-System integriert sich nahtlos in Ihr Radsport-Setup und bietet modernste Leistungsmesstechnologie zum niedrigsten Preis.",
    "features.integration.tag": "INTEGRATION",
    "features.integration.title": "Nahtlose Integration",
    "features.integration.description":
      "Perfekte Integration mit Radsportschuhen. Der Powermeter wird in Sekunden so einfach wie jeder andere Cleat am Radschuh befestigt und bietet ein einfaches System-Setup ohne Beeinträchtigung Ihrer natürlichen Tretbewegung.",
    "features.components.tag": "KOMPONENTEN",
    "features.components.title": "Präzisions-Komponenten",
    "features.components.description":
      "Jede Komponente ist so konstruiert, dass sie perfekt in unsere maßgeschneiderten Radsport-Cleats passt und maximale Genauigkeit und Haltbarkeit ermöglicht. Von fortschrittlichen Sensoren bis hin zu robusten Gehäusen arbeitet jedes Teil zusammen, um beste Leistung unter anspruchsvollsten Bedingungen zu liefern.",
    "features.technology.tag": "TECHNOLOGIE",
    "features.technology.title": "Fortschrittliche Elektronik",
    "features.technology.description":
      "Modernste Elektronik in einem wetterfesten Design. Unsere proprietären Algorithmen gewährleisten ±4% Genauigkeit bei gleichzeitig langer Batterielaufzeit und zuverlässiger Konnektivität.",

    // CTA
    "cta.title": "Stärken Sie Ihre Energie-Lösungen",
    "cta.description":
      "Schließen Sie sich Tausenden von Radfahrern an, die CycloWatt für präzise Leistungsmessung vertrauen.",
    "cta.button": "Heute Loslegen",

    // Footer
    "footer.company": "Unternehmen",
    "footer.about": "Über uns",
    "footer.careers": "Karriere",
    "footer.contact": "Kontakt",
    "footer.product": "Produkt",
    "footer.features": "Funktionen",
    "footer.pricing": "Preise",
    "footer.support": "Support",
    "footer.resources": "Ressourcen",
    "footer.blog": "Blog",
    "footer.documentation": "Dokumentation",
    "footer.help": "Hilfe-Center",
    "footer.rights": "Alle Rechte vorbehalten.",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
