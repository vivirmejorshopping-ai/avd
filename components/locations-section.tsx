import { MapPin, Phone, Clock, Scissors } from "lucide-react"

const locations = [
  {
    type: "Hair Salon - (Future Angels Salon)",
    icon: Scissors,
    address: "53 The Runway, Wigram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LU6UtYYJ2ixvAqVOwr76MW9sWmhIww.png",
    description: "Our flagship salon offering full hair styling, color treatments, and luxury services",
    services: ["Balayage & Color", "Brazilian Keratin", "Cuts & Styling", "Hair Treatments"],
    hours: "Mon, Wed, Fri, Sat: 9:30AM-6PM Sun: 10am-5pm",
    bookingText: "Book Online",
    mapLink:
      "https://www.google.com/maps/dir/-43.560516,172.654929/Urban+New+Concept,+Curletts+Road,+Sockburn,+Christchurch/@-43.5486578,172.5291973,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x6d31f5c6d1b1a951:0x107b95d6e290b5fc!2m2!1d172.5679479!2d-43.537482!3e0?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    type: "Barbershop - (Close to Moorhouse Ave)",
    icon: Scissors,
    address: "456 Colombo St / Sydenham",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gxv9OQiYchIvj8kXdMGtgHwEl6qBmU.png",
    description: "Professional barbering services with a modern touch for the discerning gentleman",
    services: ["Classic Cuts", "Beard Trim", "Fade Cut", "Kids Cut","Women's Dry Cut"],
    hours: "Mon-Sat: 9AM-7PM",
    bookingText: "Just Walk in",
    mapLink:
      "https://www.google.com/maps/dir//Urban+New+Concept+-+Barbershop+456+Colombo+Street,+Sydenham,+Christchurch+8023/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x6d318ba564845c0b:0x333ca5b65dfda6ee?sa=X&ved=1t:57443&ictx=111",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-800 mb-4">Locations</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Visit us at either of our premium locations for exceptional hair and grooming services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.type} - ${location.address}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#9fa089] rounded-full flex items-center justify-center mr-3">
                      <location.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{location.type}</h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-neutral-600 mb-6 leading-relaxed">{location.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[#9fa089] mb-3 flex items-center">
                    <Scissors className="h-4 w-4 mr-2" />
                    Services
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-sm text-neutral-600">
                        • {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-neutral-600">
                    <MapPin className="h-4 w-4 text-[#9fa089] mr-3 flex-shrink-0" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Clock className="h-4 w-4 text-[#9fa089] mr-3 flex-shrink-0" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin className="h-4 w-4 text-[#9fa089] mr-3 flex-shrink-0" />
                    <span className="text-sm">{location.bookingText}</span>
                  </div>
                </div>

                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#9fa089] text-white py-3 px-6 rounded-md hover:bg-[#8a9179] transition-colors duration-300 font-medium text-center"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
