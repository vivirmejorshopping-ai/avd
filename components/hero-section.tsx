"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Camada da Imagem de Fundo */}
      <Image
        src="/images/murilo.jpg"
        alt="Urban New Concept - Murilo and Rodrigo"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-green-800/15 to-stone-800/25 z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight leading-tight"
          >
            Fabulous Hair Isn't Just{" "}
            <span className="text-white/40 font-light">Style</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl font-light mb-12 opacity-80 tracking-wide"
          >
            it's confidence you wear every day
          </motion.p>

          {/* Botões */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.25 }
              }
            }}
            className="flex flex-col md:flex-row gap-4 justify-center mt-8"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Button
                asChild
                className="bg-sage hover:bg-sage/90 text-white px-8 py-4 text-lg md:text-xl font-medium rounded-full shadow-lg uppercase tracking-wide transition-transform duration-300 transform hover:scale-105"
              >
                <a href="https://www.fresha.com/pt/p/murillo-de-oliveira-duque-3402928">
                  BOOK YOUR APPOINTMENT
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-sm md:text-base font-normal rounded-full bg-transparent uppercase tracking-wide"
              >
                VIEW PORTFOLIO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
