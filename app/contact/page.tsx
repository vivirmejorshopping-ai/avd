"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-24 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-sage mb-4 tracking-tight">
            Contact
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Urban New Concept
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-sage/10">
                <MapPin className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-sage mb-6 text-center">Addresses</h2>
            <div className="space-y-3 text-center text-neutral-600 leading-relaxed">
              <p>53 The Runway</p>
              <p>1 Eastgate House, 19-23 Humberstone Rd, Leicester</p>
              <p>30 The Headrow, Leeds</p>
              <p>36 Arndale Centre, Manchester</p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-sage/10">
                <Clock className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-sage mb-6 text-center">Opening Hours</h2>
            <div className="space-y-2 text-center text-neutral-600 leading-relaxed">
              <p>Monday - Friday: 10:00 - 18:00</p>
              <p>Saturday: 10:00 - 16:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-sage/10">
                <Phone className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-sage mb-6 text-center">Contact</h2>
            <div className="space-y-2 text-center text-neutral-600 leading-relaxed">
              <p>Phone: +44 7859 094070</p>
              <p>Email: info@urbannewconcept.co.uk</p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-sage/10">
                <Phone className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-sage mb-6 text-center">WhatsApp</h2>
            <p className="text-center text-neutral-600 leading-relaxed">
              Chat with us on WhatsApp: +44 7859 094070
            </p>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-sage/10">
                <Mail className="w-8 h-8 text-sage" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-sage mb-6 text-center">Instagram</h2>
            <p className="text-center text-neutral-600 leading-relaxed">
              Follow us on Instagram: @urbannewconcept
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-light text-sage mb-8 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-sage mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-sage mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage bg-gray-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-sage text-white font-medium rounded-lg hover:bg-sage/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 mr-2" />
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
