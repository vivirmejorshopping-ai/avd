"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showToTop, setShowToTop] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href === "/" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled || !isHomePage ? "header-scrolled" : "bg-transparent"}
        `}
      >
        <div className="mx-auto px-4 py-3 md:px-6 md:py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <Link href="/" onClick={() => handleNavigation("/")} className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <h1
                  className={`text-sm md:text-lg font-normal tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer
                    ${isScrolled || !isHomePage ? "text-sage" : "text-white/90"}
                  `}
                >
                  URBAN NEW CONCEPT
                </h1>
                <span className={`text-xs md:text-base font-light tracking-widest
                  ${isScrolled || !isHomePage ? "text-sage" : "text-white/90"}
                `}>
                  By Murillo & Rodrigo
                </span>
              </div>
            </Link>

            {/* Navigation - Center (Desktop) */}
            <div className="flex-1 flex justify-center hidden md:flex">
              <nav className="flex items-center space-x-8">
                <Link
                  href="/"
                  onClick={() => handleNavigation("/")}
                  className={`text-xs font-normal uppercase tracking-wide transition-colors duration-300 hover:opacity-80 ${
                    isScrolled || !isHomePage ? "text-sage" : "text-white/90"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={() => handleNavigation("/services")}
                  className={`text-xs font-normal uppercase tracking-wide transition-colors duration-300 hover:opacity-80 ${
                    isScrolled || !isHomePage ? "text-sage" : "text-white/90"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/price-list"
                  onClick={() => handleNavigation("/price-list")}
                  className={`text-xs font-normal uppercase tracking-wide transition-colors duration-300 hover:opacity-80 ${
                    isScrolled || !isHomePage ? "text-sage" : "text-white/90"
                  }`}
                >
                  Barbershop Price List
                </Link>
                <Link
                  href="/contact"
                  onClick={() => handleNavigation("/contact")}
                  className={`text-xs font-normal uppercase tracking-wide transition-colors duration-300 hover:opacity-80 ${
                    isScrolled || !isHomePage ? "text-sage" : "text-white/90"
                  }`}
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  onClick={() => handleNavigation("/about")}
                  className={`text-xs font-normal uppercase tracking-wide transition-colors duration-300 hover:opacity-80 ${
                    isScrolled || !isHomePage ? "text-sage" : "text-white/90"
                  }`}
                >
                  About
                </Link>
              </nav>
            </div>

            {/* Content - Right (Mobile and Desktop) */}
            <div className="flex items-center space-x-3 md:space-x-0">
              {/* Mobile: Button and hamburger */}
              {/* Alinhamento para mobile (foto) */}
              <div className="flex items-center space-x-3 md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 transition-colors duration-300 ${
                    isScrolled || !isHomePage ? "text-sage" : "text-white/90"
                  }`}
                >
                  {isMobileMenuOpen ? "✕" : "☰"}
                </button>
                <Button
                  asChild
                  className="bg-sage hover:bg-sage/90 text-white px-4 py-2 text-sm font-normal rounded-full uppercase tracking-wide shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">Online Booking</a>
                </Button>
              </div>

              {/* Desktop Button - Right */}
              <div className="hidden md:block">
                <Button
                  asChild
                  variant="outline"
                  className={`book-button border-white/30 text-white hover:bg-white hover:text-black px-6 py-2 text-xs font-normal rounded-sm bg-transparent uppercase tracking-wide transition-all duration-300 ${
                    isScrolled || !isHomePage ? "border-sage text-sage hover:bg-sage hover:text-white" : ""
                  }`}
                >
                  <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">BOOK HERE</a>
                </Button>
              </div>
            </div>
          </div>


          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-sage/20">
              <div className="p-4 space-y-3">
                <Link
                  href="/"
                  onClick={() => handleNavigation("/")}
                  className="block text-sage hover:text-sage/80 transition-colors font-medium py-1"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={() => handleNavigation("/services")}
                  className="block text-sage hover:text-sage/80 transition-colors font-medium py-1"
                >
                  Services
                </Link>
                <Link
                  href="/price-list"
                  onClick={() => handleNavigation("/price-list")}
                  className="block text-sage hover:text-sage/80 transition-colors font-medium py-1"
                >
                  Barbershop Price List
                </Link>
                <Link
                  href="/contact"
                  onClick={() => handleNavigation("/contact")}
                  className="block text-sage hover:text-sage/80 transition-colors font-medium py-1"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  onClick={() => handleNavigation("/about")}
                  className="block text-sage hover:text-sage/80 transition-colors font-medium py-1"
                >
                  About
                </Link>
<Button
    asChild
    className="bg-sage hover:bg-sage/90 text-white px-3 py-1.5 text-sm font-normal rounded-full uppercase tracking-wide shadow-lg transition-transform duration-300 transform hover:scale-105"
>
    <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">BOOK NOW</a>
</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {showToTop && (
        <button
          onClick={scrollToTop}
          className="md:hidden fixed bottom-6 right-6 z-50 bg-sage hover:bg-sage/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}