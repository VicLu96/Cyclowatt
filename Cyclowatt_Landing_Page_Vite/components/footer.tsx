"use client"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t" style={{ backgroundColor: "#2c3e2d" }}>
      <div className="container py-12 lg:py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo_transparent.png" alt="CycloWatt Logo" width={120} height={120} className="h-12 w-auto" />
              <span className="text-xl font-bold font-sans text-white">CycloWatt</span>
            </div>
            <p className="text-sm text-gray-300 font-sans max-w-xs">
              Power up your energy solutions with intelligent monitoring and optimization for modern energy needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-sans mb-4 text-white">{t("footer.product")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.pricing")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-sans mb-4 text-white">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.blog")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.careers")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-sans mb-4 text-white">{t("footer.support")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.help")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  {t("footer.documentation")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="text-center text-sm text-gray-300 font-sans">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
