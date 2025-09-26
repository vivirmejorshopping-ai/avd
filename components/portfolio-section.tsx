"use client";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Medium Brown",
    subtitle: "Toner",
    image: "/images/1.jpg",
  },
  {
    title: "Medium Blonde",
    subtitle: "Balayage",
    image: "/images/2.jpg",
  },
  {
    title: "Light Brown",
    subtitle: "Balayage",
    image: "/images/3.jpg",
  },
  {
    title: "Soft Caramel",
    subtitle: "Balayage",
    image: "/images/4.jpg",
  },
  {
    title: "Medium Brown",
    subtitle: "Balayage",
    image: "/images/6.jpg",
  },
  {
    title: "Soft Ash",
    subtitle: "Balayage",
    image: "/images/5.jpg",
  },
];

export function PortfolioSection() {
  const handleInstagramClick = (e) => {
    // Tenta abrir o deep link do Instagram
    const instagramAppUrl = "instagram://user?username=urbannewconcept";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      e.preventDefault();
      window.location.href = instagramAppUrl;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-800 mb-8">Portfolio</h2>

          <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12">
            <a
              href="https://www.instagram.com/urbannewconcept/"
              onClick={handleInstagramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="text-sm">@urbannewconcept</span>
            </a>
            <a
              href="https://www.facebook.com/UrbanNewConcept-107779774577826"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <Facebook className="h-4 w-4" />
              <span className="text-sm">Facebooks</span>
            </a>
            <a
              href="https://wa.me/64273310024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-800 transition-colors"
            >
              <MessageCircle className="h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={`${item.title} ${item.subtitle}`}
                    width={500}
                    height={625}
                    className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="bg-white p-6 group-hover:bg-neutral-50 transition-colors duration-300">
                  <h3 className="text-lg font-medium text-neutral-800 mb-1 group-hover:text-[#9fa089] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-light text-[#9fa089] mb-2">{item.subtitle}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}