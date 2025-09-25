import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-sage mb-4 tracking-tight">About Us</h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Urban New Concept is a family-run hair salon where passion meets expertise!
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
  <h2 className="text-3xl font-light text-sage mb-6">Our Journey</h2>
  <div className="space-y-4 text-neutral-600 leading-relaxed">
    <p>
      We are <strong className="text-sage">Rodrigo and Murillo</strong> — a father-and-son team passionate about the art of hairstyling.
    </p>
    <p>
      Rodrigo brings over <strong>17 years of expertise</strong>, combining precision and mastery, while Murillo adds <strong>8 years of fresh perspective</strong>, modern techniques, and creativity.
    </p>
    <p>
      Trained in Brazil, we continuously refine our skills to stay ahead in the industry, driven by a genuine love for what we do.
    </p>
    <p>
      Our journey as salon owners began in November 2022 in Hornby. In 2024, we relocated to Sockburn, creating a welcoming, family-friendly space where quality and care come first. By 2025, we proudly expanded with a second location — a barbershop on Colombo Street — bringing our commitment to excellence to even more clients.
    </p>
    <p>
      In September 2025, we decided to rent a chair at Future Angels in Wigram, ensuring our clients continue to enjoy the comfort and quality they deserve.
    </p>
  </div>
</div>
<div className="bg-gradient-to-br from-sage/10 to-sage/5 rounded-xl p-8 text-center transform hover:rotate-1 transition-transform duration-300">
  <div className="text-6xl mb-4">👨‍👦</div>
  <h3 className="text-xl font-medium text-sage mb-2">Family Business</h3>
  <p className="text-neutral-600">Father and son dedicated to hairstyling excellence</p>
</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-sage mb-4">What Makes Us Different?</h2>
              <p className="text-lg text-neutral-600">
                Our techniques are unlike <strong>any other</strong> salon in New Zealand!
              </p>
              <p className="text-neutral-600 mt-2">
                We are also very honest about what can and cannot be done to your hair, without creating false
                expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-medium text-sage mb-3">Unique Techniques</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We bring Brazilian expertise and international experience to New Zealand, offering techniques you
                  won't find anywhere else.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:-rotate-1">
                <div className="text-4xl mb-4">💯</div>
                <h3 className="text-xl font-medium text-sage mb-3">Honest Approach</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We are very honest about what can and cannot be done to your hair, without creating false
                  expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-sage/5 to-sage/10 rounded-2xl p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light text-sage mb-4">Our Specialty: Balayage</h2>
                <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  We are specialists in Balayage, a highlights technique that allows the hair to grow naturally and the
                  client does not feel the need to touch up every 6 weeks as is normally recommended in New Zealand.
                </p>
                <p className="text-neutral-600 mt-4 font-medium">Below you can see an example</p>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-7wP7qpNVsR4DOORSwXsn9NB1hDranl.png"
                    alt="Comparison between Classic Highlights and Balayage technique showing natural hair growth"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <p className="text-center text-sm text-neutral-500 mt-4">
                  See the difference: Balayage grows out naturally compared to traditional highlights
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-sage mb-4">Team</h2>
              <p className="text-lg text-neutral-600">
                Get to know the passionate professionals behind Urban New Concept
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Murillo Profile with real photo */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-VdDcx8bl1oRPjXHZWUBi5RNfyY4bD8.png"
                    alt="Murillo - Hair Stylist"
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-sage mb-2">Murillo</h3>
                  <p className="text-sage/70 mb-4">27 years old • 8+ years experience</p>
                  <div className="space-y-4 text-neutral-600 leading-relaxed">
                    <p>This is Murillo. He is 27 years old, married, and a proud father of a little boy.</p>
                    <p>
                      With over 8 years of experience and an international career in top salons across Brazil, the
                      United States, and New Zealand, he brings both passion and expertise to every client. Being
                      passionate about transforming hair.
                    </p>
                    <p>
                      <strong className="text-sage">His specialty is Balayage</strong>, creating modern, natural, and
                      personalized looks.
                    </p>
                    <p>
                      Constantly studying the latest techniques and believe in being clear and honest with every client,
                      making sure their hair stays healthy and beautiful.
                    </p>
                    <p>
                      Outside the salon, he's a husband, father, and someone who loves the simple things in life—family,
                      fitness, movies, and football.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rodrigo Profile with real photo */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 group">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-Kgx6TbyiDmHUeafrFdkPprTi1Nueo4.png"
                    alt="Rodrigo - Hair Stylist"
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-sage mb-2">Rodrigo</h3>
                  <p className="text-sage/70 mb-4">44 years old • 17+ years experience</p>
                  <div className="space-y-4 text-neutral-600 leading-relaxed">
                    <p>
                      This is Rodrigo, a highly skilled hairstylist with over 17 years of professional experience. At 44
                      years old, he brings not only technical expertise but also passion and dedication to every client
                      he works with.
                    </p>
                    <p>
                      As a proud father of two – his daughter and Murillo – Rodrigo understands the value of care,
                      patience, and attention, qualities that define his approach behind the chair.
                    </p>
                    <p>
                      <strong className="text-sage">Specializing in personalized results</strong> that combine the
                      latest techniques with natural, timeless style, he is known for his ability to listen, provide
                      honest advice, and create looks that truly reflect each client's individuality.
                    </p>
                    <p>
                      Outside the salon, he practices Jiu-Jitsu and enjoys playing football, hobbies that fuel his
                      creativity, discipline, and energy – qualities that shine through in his work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 text-center">
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
