import { Instagram, Facebook, MessageCircle } from "lucide-react"

const portfolioItems = [
  {
    title: "Balayage + Brazilian Keratin Blowout",
    subtitle: "Light Brown",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-on59P1SJkW5toZQW4rGQTgsEMzioao.png",
    description: "Luxurious light brown balayage with Brazilian keratin treatment for silky finish",
  },
  {
    title: "Balayage",
    subtitle: "Creamy Blonde",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-olLqW0tN3k9VUVq9xPXHOLZbRz3H7U.png",
    description: "Soft creamy blonde balayage with natural dimension",
  },
  {
    title: "Balayage",
    subtitle: "Light Caramel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0cfHdheGzRP16TQpb9xj0veMiS3U7p.png",
    description: "Rich caramel highlights for a sun-kissed look",
  },
  {
    title: "Balayage",
    subtitle: "Coffee Brown",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRLMmxDPQZRghKq6JAuPkl7qIfLEPO.png",
    description: "Deep coffee brown with subtle balayage accents",
  },
  {
    title: "Balayage",
    subtitle: "Pearl Blonde",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DKc7C10BC7VWFU8m9jO9JFUyGVr3ZG.png",
    description: "Luxurious pearl blonde highlights with natural dimension",
  },
  {
    title: "Balayage",
    subtitle: "Lux Blonde",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PgtBTczdKW3io7cqCxPePVRFRQSbA8.png",
    description: "Premium blonde balayage for sophisticated elegance",
  },
]

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
                    className="w-full h-[28rem] object-contain object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
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
