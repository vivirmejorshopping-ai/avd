import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";

// Mock Link and a placeholder for handleNavigation function
const Link = ({ children, onClick }) => <a href="#" onClick={onClick}>{children}</a>;
const handleNavigation = () => console.log('Navigating...');

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { title: 'HOME', link: '#home' },
    { title: 'LOCATIONS', link: '#locations' },
    { title: 'PORTFOLIO', link: '#portfolio' },
    { title: 'TEAM', link: '#team' },
    { title: 'CONTACT', link: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto px-4 py-3 md:px-6 md:py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => handleNavigation("/")}>
            <h1
              className={`text-xs md:text-sm font-normal tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer 
                ${isScrolled || !isHomePage ? "text-[#9fa089]" : "text-white/90"}
              `}
            >
              URBAN NEW CONCEPT <br />
              By Murillo & Rodrigo
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`text-sm font-normal uppercase transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-neutral-600 hover:text-[#9fa089]' : 'text-white/90 hover:text-white'}`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-[#9fa089] z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-neutral-900 bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl text-white font-light uppercase tracking-widest hover:text-[#9fa089] transition-colors duration-300"
          >
            {item.title}
          </a>
        ))}
        <div className="flex items-center space-x-8 mt-10">
          <a href="https://www.instagram.com/urbannewconcept/" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-white hover:text-[#9fa089] transition-colors" />
          </a>
          <a href="https://www.facebook.com/UrbanNewConcept-107779774577826" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6 text-white hover:text-[#9fa089] transition-colors" />
          </a>
          <a href="https://api.whatsapp.com/message/NH3I4F3R7LLIJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6 text-white hover:text-[#9fa089] transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
}
