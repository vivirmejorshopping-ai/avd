import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Scissors, Zap } from "lucide-react"

export default function PriceListPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-light text-sage mb-4 tracking-tight">
              Barbershop Price List
            </h1>

            {/* Barbershop Icons */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <Scissors className="w-12 h-12 text-sage rotate-45" />
              <Zap className="w-12 h-12 text-sage" />
              <div className="w-12 h-12 text-sage">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
            </div>

            {/* Barber Poles */}
            <div className="relative">
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden md:block">
                <div className="w-8 h-24 bg-gradient-to-b from-red-500 via-white to-blue-600 rounded-full border-2 border-neutral-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500 to-transparent opacity-50 animate-pulse"></div>
                </div>
              </div>

              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden md:block">
                <div className="w-8 h-24 bg-gradient-to-b from-red-500 via-white to-blue-600 rounded-full border-2 border-neutral-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500 to-transparent opacity-50 animate-pulse"></div>
                </div>
              </div>

              {/* Price List */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-neutral-200 shadow-sm">
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-800 font-medium">HAIRCUT:</span>
                    <span className="text-sage font-bold">$35</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-800 font-medium">BEARD TRIM:</span>
                    <span className="text-sage font-bold">$20</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-800 font-medium">HAIRCUT & BEARD TRIM:</span>
                    <span className="text-sage font-bold">$50</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-800 font-medium">CLIPPER CUT:</span>
                    <span className="text-sage font-bold">$30</span>
                  </div>
                  <div className="text-xs text-neutral-500 ml-4 -mt-2">(EXCEPT ZERO FADE)</div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-800 font-medium">KIDS CUT (UNDER 9yo):</span>
                    <span className="text-sage font-bold">$30</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-800 font-medium">GOLD CARD (65+):</span>
                    <span className="text-sage font-bold">$25</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-neutral-600 text-sm">Walk-ins welcome • Appointments recommended</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
