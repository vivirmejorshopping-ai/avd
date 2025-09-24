import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Header />

      <section className="pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-sage mb-4 tracking-tight">Services</h1>
          <p className="text-lg md:text-xl text-neutral-600 font-light">Professional styling for every occasion</p>
        </div>
      </section>

      <main className="pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Haircuts Card */}
            <div className="bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-sage" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm0 12c-1.1 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-8 tracking-wide">HAIRCUTS</h3>

                <div className="text-left space-y-4 text-sm">
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">WOMEN'S DRY CUT (with Quick Blow Wave):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$50 - $60</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">WOMEN'S HAIR CUT (with Wash & Blow Wave):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$70 - $90</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">FRINGE TRIM:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$15</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">MEN'S CUT:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$40 (+$5 Wash)</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">CLIPPER CUT:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$35</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">BEARD TRIM:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$20</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">CHILD GIRL HAIR CUT (UNDER 9):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$40 - $45</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="flex-1 pr-4 text-neutral-700">CHILD BOY HAIR CUT (UNDER 9):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$35</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colour Card */}
            <div className="bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-sage" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-8 tracking-wide">COLOUR</h3>

                <div className="text-left space-y-4 text-sm">
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">
                      BALAYAGE / HIGHLIGHTS (with Root Melt, Toner & Finishing):
                    </span>
                    <span className="font-semibold text-sage whitespace-nowrap">$250 - $350</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">
                      HALF HEAD FOILS (with Root Melt, Toner & Finishing):
                    </span>
                    <span className="font-semibold text-sage whitespace-nowrap">$115 - $200</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">
                      PARTIAL HIGHLIGHTS (with Root Melt & Finishing):
                    </span>
                    <span className="font-semibold text-sage whitespace-nowrap">$80 - $110</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">TOUCH UP (GREY COVERAGE):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$100</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">GLOBAL COLOUR:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$140 - $220</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">TONER:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$70 - $90</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="flex-1 pr-4 text-neutral-700">LOW LIGHTS:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$50 - $120</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-sage/5 rounded-lg border border-sage/10">
                  <p className="text-xs text-neutral-600 italic">*BLOW WAVE IS INCLUDED IN ALL COLOUR SERVICES</p>
                  <p className="text-xs text-neutral-600 italic mt-2">
                    *ROOT MELT AND TONER MAY OR MAY NOT BE REQUIRED. OUR PROFESSIONAL TEAM WILL ASSESS AND DECIDE WHAT
                    IS BEST FOR YOUR HAIR
                  </p>
                </div>
              </div>
            </div>

            {/* Other Services Card */}
            <div className="bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-sage" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 7h-3V6a4 4 0 0 0-4-4c-1.5 0-2.81.83-3.5 2.05C8.74 4.03 8.37 4 8 4a4 4 0 0 0-4 4v2H1v2h3v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9h3V7zM8 6c1.1 0 2 .9 2 2v2H6V8c0-1.1.9-2 2-2zm5 0c1.1 0 2 .9 2 2v1h-4V8c0-1.1.9-2 2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-8 tracking-wide">OTHER SERVICES</h3>

                <div className="text-left space-y-4 text-sm">
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">BRAZILIAN KERATIN BLOWOUT:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$199 - $350</span>
                  </div>
                  <p className="text-xs text-neutral-500 italic mb-2">
                    (SUPER STRONG FRIZZ & VOLUME REDUCER) (LASTS FOR ABOUT 2-3 MONTHS)
                  </p>

                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">BRAZILIAN KERATIN BLOWOUT (Frontal Area):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$80 - $100</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">BLOW WAVE (with Wash):</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$40 - $60</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">CURLS / STRAIGHTENER:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$15 - $50</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">REPAIR HAIR TREATMENT:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$50</span>
                  </div>
                  <p className="text-xs text-neutral-500 italic">($30 WHEN YOU DO ANY OTHER SERVICE)</p>

                  <div className="flex justify-between items-start border-b border-neutral-100 pb-2">
                    <span className="flex-1 pr-4 text-neutral-700">SIMPLE HAIR TREATMENT:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$10</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="flex-1 pr-4 text-neutral-700">WASH:</span>
                    <span className="font-semibold text-sage whitespace-nowrap">$15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note section */}
          <div className="mt-16 text-center max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-sage/5 to-sage/10 rounded-lg p-8 border border-sage/20">
              <h4 className="text-lg font-semibold text-neutral-800 mb-4">NOTE:</h4>
              <p className="text-neutral-700 mb-2">There is an extra charge for super long or thick hair</p>
              <p className="text-neutral-700">
                *All the prices are an estimate, final price will be given after consultation
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
