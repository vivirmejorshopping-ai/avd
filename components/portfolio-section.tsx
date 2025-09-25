import { Instagram, Facebook, MessageCircle } from "lucide-react"

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1627916538057-3f3f5087612d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Classic Fade",
    subtitle: "Modern Barbershop",
    description: "A clean and sharp fade with a perfectly blended transition. Timeless style for the modern gentleman."
  },
  {
    image: "https://images.unsplash.com/photo-1627916538057-3f3f5087612d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Balayage",
    subtitle: "Future Angels Salon",
    description: "Hand-painted highlights for a natural, sun-kissed look. Adds dimension and depth to any hair type."
  },
  {
    image: "https://images.unsplash.com/photo-1542849596-f04c63673f8e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Brazilian Keratin",
    subtitle: "Hair Treatments",
    description: "Transform your hair with our smoothing keratin treatment. Eliminates frizz and adds incredible shine."
  },
  {
    image: "https://images.unsplash.com/photo-1596464525895-88a0b021966a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kids Cut",
    subtitle: "Barbershop",
    description: "A fun and stress-free haircut experience for your little one. We make sure they leave with a smile."
  },
  {
    image: "https://images.unsplash.com/photo-1554904870-20517596d11f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Classic Cut",
    subtitle: "Barbershop",
    description: "The timeless classic haircut. Perfect lines and a precise finish for a refined look."
  },
  {
    image: "https://images.unsplash.com/photo-1603503816503-2b2c938a1677?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women's Dry Cut",
    subtitle: "Barbershop",
    description: "A quick and stylish dry cut for women on the go. Perfect for maintaining your style with precision."
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-800 mb-8">Portfolio</h2>

          <div className="flex justify-center items-center space-x-8 mb-12">
            <a
              href="https://www.instagram.com/urbannewconcept/"
              className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@urbannewconcept</span>
            </a>
            <a
              href="https://www.facebook.com/UrbanNewConcept-107779774577826"
              className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://api.whatsapp.com/message/NH3I4F3R7LLIJ1?autoload=1&app_absent=0"
              className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <MessageCircle className="h-5" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg?height=400&width=400"}
                    alt={`${item.title} ${item.subtitle}`}
                    className="w-full h-[28rem] object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="bg-white p-6 group-hover:bg-neutral-50 transition-colors duration-300">
                  <h3 className="text-lg font-medium text-neutral-800 mb-1 group-hover:text-[#9fa089] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-light text-[#9fa089] mb-2">{item.subtitle}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
