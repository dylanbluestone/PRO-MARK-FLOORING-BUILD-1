'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Phone, Mail, Clock, Menu, X, ChevronDown, Layers, Grid3X3, TrendingUp, Wrench, MapPin, Home, Building2 } from 'lucide-react'

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
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-3 hidden md:block border-b border-red-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+16043536077" className="flex items-center gap-2 hover:text-red-200 transition-colors font-medium">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Phone size={14} />
              </div>
              <span>(604) 353-6077</span>
            </a>
            <a href="mailto:promarkflooring@hotmail.com" className="flex items-center gap-2 hover:text-red-200 transition-colors">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Mail size={14} />
              </div>
              <span>promarkflooring@hotmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-red-100">
            <Clock size={14} />
            <span>Mon - Fri: 8:00 AM - 8:00 PM</span>
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
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <span className="font-black text-xl">PM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 tracking-tight">PROMARK</span>
                <span className="text-xs text-red-600 font-semibold tracking-widest">FLOORING</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Home</Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all flex items-center gap-1">
                  Services
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <Link href="/services/floor-leveling" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <Layers size={20} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">Floor Leveling</span>
                        <span className="text-sm text-gray-500">5-year warranty</span>
                      </div>
                    </Link>
                    <Link href="/services/hardwood-installation" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <Grid3X3 size={20} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">Hardwood Installation</span>
                        <span className="text-sm text-gray-500">Premium materials</span>
                      </div>
                    </Link>
                    <Link href="/services/stairs" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">Stairs</span>
                        <span className="text-sm text-gray-500">Custom installation</span>
                      </div>
                    </Link>
                    <Link href="/services/repair-maintenance" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <Wrench size={20} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">Repair & Maintenance</span>
                        <span className="text-sm text-gray-500">Restore your floors</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all flex items-center gap-1">
                  Service Areas
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    <Link href="/service-areas/vancouver" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Vancouver</span>
                    </Link>
                    <Link href="/service-areas/north-vancouver" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">North Vancouver</span>
                    </Link>
                    <Link href="/service-areas/west-vancouver" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">West Vancouver</span>
                    </Link>
                    <Link href="/service-areas/burnaby" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Burnaby</span>
                    </Link>
                    <Link href="/service-areas/surrey" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Surrey</span>
                    </Link>
                    <Link href="/service-areas/delta" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Delta</span>
                    </Link>
                    <Link href="/service-areas/langley" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Langley</span>
                    </Link>
                    <Link href="/service-areas/port-coquitlam" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Port Coquitlam</span>
                    </Link>
                    <Link href="/service-areas/maple-ridge" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Maple Ridge</span>
                    </Link>
                    <Link href="/service-areas/mission" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-900">Mission</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all flex items-center gap-1">
                  Industries
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <Link href="/industries/residential" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <Home size={20} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">Residential</span>
                        <span className="text-sm text-gray-500">Homes & condos</span>
                      </div>
                    </Link>
                    <Link href="/industries/commercial" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">Commercial</span>
                        <span className="text-sm text-gray-500">Business properties</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/gallery" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Gallery</Link>
              <Link href="/resources" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Resources</Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary-red font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-red font-medium transition-colors">Contact</Link>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
              >
                Get Free Quote
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
