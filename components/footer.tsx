export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-normal text-sage mb-4 tracking-wide uppercase">URBAN NEW CONCEPT</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Professional hair styling and barbershop services in Christchurch.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sage mb-4">Locations</h4>
            <div className="space-y-4 text-neutral-600">
              <div>
                <p className="font-medium">Hair Salon</p>
                <p className="text-sm">53 The Runway, Wigram</p>
              </div>
              <div>
                <p className="font-medium">Barbershop</p>
                <p className="text-sm">456 Colombo St / Sydenham</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sage mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <a href="#portfolio" className="hover:text-sage transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-sage transition-colors">
                  Price List
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-sage transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sage transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-500">
          <p>&copy; 2025 Urban New Concept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
