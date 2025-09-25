"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Camada da Imagem de Fundo (1ª camada) */}
      <Image
        src="/images/hero-team.jpg"
        alt="Urban New Concept Team - Murillo and Rodrigo"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Camada do Gradiente (2ª camada, semi-transparente) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Camada do Conteúdo (3ª camada, o texto e botões) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-light mb-2 tracking-tight leading-tight">
            Fabulous Hair Isn't Just <span className="text-white/40 font-light">Style</span>
          </h1>

          <p className="text-base md:text-xl font-light mb-8 opacity-80 tracking-wide">
            it's confidence you wear every day
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <Button
              asChild
              className="bg-sage hover:bg-sage/90 text-white px-8 py-4 text-lg md:text-xl font-medium rounded-full shadow-lg uppercase tracking-wide transition-transform duration-300 transform hover:scale-105"
            >
              <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">BOOK YOUR APPOINTMENT</a>
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-sm font-normal rounded-sm bg-transparent uppercase tracking-wide"
            >
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}