'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Desktop only: sticky header
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsSticky(window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary-red text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+16043536077" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={16} />
              <span>(604) 353-6077</span>
            </a>
            <a href="mailto:promarkflooring@hotmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={16} />
              <span>promarkflooring@hotmail.com</span>
            </a>
          </div>
          <div>
            <span>Mon-Fri: 8:00am - 8:00pm</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`
        bg-white shadow-md transition-all duration-300
        ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}
      `}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* TODO: Update with actual logo path after image analysis */}
              <div className="text-primary-red font-bold text-2xl">
                PROMARK FLOORING
              </div>
              {/* <Image
                src="/assets/logo.png"
                alt="PROMARK FLOORING Logo"
                width={180}
                height={60}
                priority
              /> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Home</Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-red font-medium transition-colors">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/services/floor-leveling" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Floor Leveling</Link>
                  <Link href="/services/hardwood-installation" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Hardwood Installation</Link>
                  <Link href="/services/stairs" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Stairs</Link>
                  <Link href="/services/repair-maintenance" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Repair & Maintenance</Link>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-red font-medium transition-colors">
                  Service Areas
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all max-h-96 overflow-y-auto">
                  <Link href="/service-areas/vancouver" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Vancouver</Link>
                  <Link href="/service-areas/north-vancouver" className="block px-4 py-2 hover:bg-gray-50 transition-colors">North Vancouver</Link>
                  <Link href="/service-areas/west-vancouver" className="block px-4 py-2 hover:bg-gray-50 transition-colors">West Vancouver</Link>
                  <Link href="/service-areas/burnaby" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Burnaby</Link>
                  <Link href="/service-areas/surrey" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Surrey</Link>
                  <Link href="/service-areas/delta" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Delta</Link>
                  <Link href="/service-areas/langley" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Langley</Link>
                  <Link href="/service-areas/port-coquitlam" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Port Coquitlam</Link>
                  <Link href="/service-areas/maple-ridge" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Maple Ridge</Link>
                  <Link href="/service-areas/mission" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Mission</Link>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-red font-medium transition-colors">
                  Industries
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/industries/residential" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Residential</Link>
                  <Link href="/industries/commercial" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Commercial</Link>
                </div>
              </div>

              <Link href="/gallery" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Gallery</Link>
              <Link href="/resources" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Resources</Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary-red font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Contact</Link>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="bg-primary-red text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-red-dark transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link href="/" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Home</Link>

              {/* Mobile Services */}
              <details className="group">
                <summary className="py-2 text-gray-700 font-medium cursor-pointer">Services</summary>
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/services/floor-leveling" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Floor Leveling</Link>
                  <Link href="/services/hardwood-installation" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Hardwood Installation</Link>
                  <Link href="/services/stairs" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Stairs</Link>
                  <Link href="/services/repair-maintenance" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Repair & Maintenance</Link>
                </div>
              </details>

              {/* Mobile Service Areas */}
              <details className="group">
                <summary className="py-2 text-gray-700 font-medium cursor-pointer">Service Areas</summary>
                <div className="pl-4 space-y-2 mt-2 max-h-48 overflow-y-auto">
                  <Link href="/service-areas/vancouver" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Vancouver</Link>
                  <Link href="/service-areas/north-vancouver" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>North Vancouver</Link>
                  <Link href="/service-areas/west-vancouver" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>West Vancouver</Link>
                  <Link href="/service-areas/burnaby" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Burnaby</Link>
                  <Link href="/service-areas/surrey" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Surrey</Link>
                  <Link href="/service-areas/delta" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Delta</Link>
                  <Link href="/service-areas/langley" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Langley</Link>
                  <Link href="/service-areas/port-coquitlam" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Port Coquitlam</Link>
                  <Link href="/service-areas/maple-ridge" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Maple Ridge</Link>
                  <Link href="/service-areas/mission" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Mission</Link>
                </div>
              </details>

              {/* Mobile Industries */}
              <details className="group">
                <summary className="py-2 text-gray-700 font-medium cursor-pointer">Industries</summary>
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/industries/residential" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Residential</Link>
                  <Link href="/industries/commercial" className="block py-1 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Commercial</Link>
                </div>
              </details>

              <Link href="/gallery" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
              <Link href="/resources" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
              <Link href="/faq" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" className="block py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

              {/* Mobile Contact */}
              <div className="pt-4 border-t space-y-2">
                <a href="tel:+16043536077" className="flex items-center gap-2 py-2 text-primary-red font-semibold">
                  <Phone size={20} />
                  <span>(604) 353-6077</span>
                </a>
                <Link
                  href="/quote"
                  className="block bg-primary-red text-white text-center px-6 py-3 rounded-lg font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
