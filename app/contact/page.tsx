"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-sage mb-4 tracking-tight">Contact</h1>
          </div>

          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Addresses Card */}
              <div className="group perspective-1000">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-sage/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-6 mx-auto group-hover:bg-sage/20 transition-colors duration-300">
                      <MapPin className="w-8 h-8 text-sage" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Addresses</h2>

                    <div className="space-y-8">
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-3 text-lg">Hair Salon</h3>
                        <p className="text-gray-600 leading-relaxed">53 The Runway</p>
                        <p className="text-gray-600 leading-relaxed">Wigram, Christchurch, NZ</p>
                      </div>

                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-3 text-lg">Barbershop</h3>
                        <p className="text-gray-600 leading-relaxed">456 Colombo Street</p>
                        <p className="text-gray-600 leading-relaxed">Sydenham, Christchurch, NZ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="group perspective-1000">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-sage/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-6 mx-auto group-hover:bg-sage/20 transition-colors duration-300">
                      <Clock className="w-8 h-8 text-sage" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Opening Hours</h2>

                    <div className="space-y-8">
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-3 text-lg">Hair Salon</h3>
                        <p className="text-gray-600 leading-relaxed">Mon, Wed, Fri, Sat: 9:30am - 6pm</p>
                        <p className="text-gray-600 leading-relaxed">Sun: 10am - 5pm</p>
                      </div>

                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-3 text-lg">Barbershop</h3>
                        <p className="text-gray-600 text-sm mb-2">(Walk in Only)</p>
                        <p className="text-gray-600 leading-relaxed">Tue - Sat: 10am - 5pm</p>
                        <p className="text-gray-600 leading-relaxed">Sun: 10am - 3pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="group perspective-1000">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-sage/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-6 mx-auto group-hover:bg-sage/20 transition-colors duration-300">
                      <Phone className="w-8 h-8 text-sage" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Contact</h2>

                    <div className="space-y-6 text-center">
                      <div>
                        <a
                          href="tel:027331002"
                          className="text-gray-900 hover:text-sage transition-colors text-lg font-medium"
                        >
                          027 331 0024
                        </a>
                      </div>

                      <div>
                        <a
                          href="mailto:urbannewconcept@gmail.com"
                          className="text-gray-600 hover:text-sage transition-colors text-sm break-all"
                        >
                          urbannewconcept@gmail.com
                        </a>
                      </div>

                      <div className="pt-4">
                        <p className="text-sm font-medium text-gray-900 mb-4">Best way to contact us:</p>
                        <div className="flex justify-center space-x-4">
                          <a
                            href="https://api.whatsapp.com/message/NH3I4F3R7LLIJ1?autoload=1&app_absent=0"
                            className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="WhatsApp"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                          </a>

                          <a
                            href="https://www.instagram.com/urbannewconcept/"
                            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="Instagram"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center w-20 h-20 bg-sage/10 rounded-full mb-6 mx-auto">
                  <Mail className="w-10 h-10 text-sage" />
                </div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Email Contact</h2>
                <p className="text-gray-600 text-lg">(Last option)</p>
                <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
                  The best way to contact us is through WhatsApp and Instagram. Just click on one of the icons above and
                  you will be redirected to WhatsApp or Instagram!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-sage text-white font-medium rounded-lg hover:bg-sage/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
