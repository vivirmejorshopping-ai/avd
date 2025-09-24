import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    service: "Balayage Pearl Blonde",
    rating: 5,
    text: "Absolutely amazing experience! My balayage came out exactly as I envisioned. The team is incredibly skilled and professional.",
  },
  {
    name: "Emma Wilson",
    service: "Balayage Lux Blonde",
    rating: 5,
    text: "I've never felt more confident about my hair! The color is perfect and the cut is flawless. Highly recommend Urban New Concept.",
  },
  {
    name: "Maria Rodriguez",
    service: "Brazilian Keratin + Balayage",
    rating: 5,
    text: "The Brazilian keratin treatment changed my life! My hair has never been smoother. The staff made me feel so comfortable throughout.",
  },
  {
    name: "Jessica Lee",
    service: "Balayage Coffee Brown",
    rating: 5,
    text: "Premium service from start to finish. The salon has such a luxurious atmosphere and the results speak for themselves!",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-800 mb-4">Customer Reviews</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9fa089]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-7xl text-[#9fa089]/30 font-serif mb-4 leading-none">"</div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#9fa089] text-[#9fa089]" />
                  ))}
                </div>

                <p className="text-neutral-600 mb-6 leading-relaxed italic">{review.text}</p>

                <div className="border-t border-neutral-100 pt-4">
                  <p className="font-medium text-neutral-800">{review.name}</p>
                  <p className="text-sm text-[#9fa089] font-medium">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
