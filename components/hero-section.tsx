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
        src="/images/murilo.jpg"
        alt="Urban New Concept - Murilo and Rodrigo"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Camada do Gradiente (2ª camada, semi-transparente) */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-green-800/15 to-stone-800/25 z-10" />

      {/* Camada do Conteúdo (3ª camada, o texto e botões) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight leading-tight">
            Fabulous Hair Isn't Just <span className="text-white/40 font-light">Style</span>
          </h1>

          <p className="text-lg md:text-xl font-light mb-12 opacity-80 tracking-wide">
            it's confidence you wear every day
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              className="bg-sage hover:bg-sage/90 text-white px-8 py-3 text-sm font-normal rounded-sm uppercase tracking-wide"
            >
              <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">
                BOOK YOUR APPOINTMENT asgora →
              </a>s
            </Button>

            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-sm font-normal rounded-sm bg-transparent uppercase tracking-wide"
            >
              VIEW PORTFOLIOSagra5
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