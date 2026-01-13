'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Layers,
  Grid3X3,
  TrendingUp,
  Wrench,
  MapPin,
  Home,
  Building2,
  ArrowRight,
  Shield,
  Award
} from 'lucide-react'

// Contact Information - centralized for easy updates
const contactInfo = {
  phone: '(604) 353-6077',
  phoneHref: 'tel:+16043536077',
  email: 'promarkflooring@hotmail.com',
  hours: 'Mon - Fri: 8AM - 8PM',
}

// Service Areas
const serviceAreas = [
  'Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey',
  'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission'
]

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className={`bg-walnut-800 text-cream-100 py-2.5 hidden lg:block transition-all duration-300 ${isSticky ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-2 hover:text-copper-400 transition-colors text-sm font-medium"
            >
              <div className="w-7 h-7 bg-copper-500/20 rounded-full flex items-center justify-center">
                <Phone size={14} className="text-copper-400" />
              </div>
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-copper-400 transition-colors text-sm"
            >
              <div className="w-7 h-7 bg-copper-500/20 rounded-full flex items-center justify-center">
                <Mail size={14} className="text-copper-400" />
              </div>
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-cream-300 text-sm">
              <Clock size={14} className="text-copper-400" />
              <span>{contactInfo.hours}</span>
            </div>
            <div className="h-4 w-px bg-walnut-600" />
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-forest-400" />
                5-Year Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-copper-400" />
                20+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`
        bg-cream-50 transition-all duration-300 z-50
        ${isSticky
          ? 'fixed top-0 left-0 right-0 shadow-lg border-b border-cream-200'
          : 'border-b border-cream-200'
        }
      `}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20 lg:h-24">

            {/* Logo - Sophisticated Wordmark */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Mark */}
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-forest-600 to-forest-700 rounded-xl flex items-center justify-center shadow-lg shadow-forest-600/20 group-hover:shadow-forest-600/30 transition-all duration-300">
                  <span
                    className="text-cream-50 text-xl lg:text-2xl tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    PM
                  </span>
                </div>
                {/* Accent corner */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-copper-500 rounded-full" />
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <span
                  className="text-xl lg:text-2xl text-charcoal-900 tracking-wide leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                >
                  PROMARK
                </span>
                <span
                  className="text-[10px] lg:text-xs text-forest-600 tracking-[0.3em] uppercase font-semibold mt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  FLOORING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium transition-colors rounded-lg hover:bg-forest-50"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium rounded-lg hover:bg-forest-50 transition-all flex items-center gap-1.5">
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className={`
                  absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-cream-200
                  transition-all duration-200 z-50
                  ${activeDropdown === 'services'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }
                `}>
                  <div className="p-3">
                    <ServiceDropdownItem
                      href="/services/floor-leveling"
                      icon={<Layers size={22} />}
                      title="Floor Leveling"
                      subtitle="5-Year Warranty"
                      highlight
                    />
                    <ServiceDropdownItem
                      href="/services/hardwood-installation"
                      icon={<Grid3X3 size={22} />}
                      title="Hardwood Installation"
                      subtitle="Premium Materials"
                    />
                    <ServiceDropdownItem
                      href="/services/stairs"
                      icon={<TrendingUp size={22} />}
                      title="Staircase Services"
                      subtitle="Custom Installation"
                    />
                    <ServiceDropdownItem
                      href="/services/repair-maintenance"
                      icon={<Wrench size={22} />}
                      title="Repair & Maintenance"
                      subtitle="Restore Your Floors"
                    />

                    <div className="mt-3 pt-3 border-t border-cream-200">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-forest-600 hover:bg-forest-50 transition-colors font-medium text-sm"
                      >
                        View All Services
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('areas')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium rounded-lg hover:bg-forest-50 transition-all flex items-center gap-1.5">
                  Service Areas
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === 'areas' ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className={`
                  absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-cream-200
                  transition-all duration-200 z-50 max-h-[400px] overflow-y-auto
                  ${activeDropdown === 'areas'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }
                `}>
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {serviceAreas.map((city) => (
                        <Link
                          key={city}
                          href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-forest-50 transition-colors"
                        >
                          <MapPin size={14} className="text-copper-500" />
                          <span className="text-charcoal-700 text-sm">{city}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-cream-200">
                      <Link
                        href="/service-areas"
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-forest-600 hover:bg-forest-50 transition-colors font-medium text-sm"
                      >
                        All Service Areas
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium rounded-lg hover:bg-forest-50 transition-all flex items-center gap-1.5">
                  Industries
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className={`
                  absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-cream-200
                  transition-all duration-200 z-50
                  ${activeDropdown === 'industries'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }
                `}>
                  <div className="p-3">
                    <ServiceDropdownItem
                      href="/industries/residential"
                      icon={<Home size={22} />}
                      title="Residential"
                      subtitle="Homes & Condos"
                    />
                    <ServiceDropdownItem
                      href="/industries/commercial"
                      icon={<Building2 size={22} />}
                      title="Commercial"
                      subtitle="Business Properties"
                    />
                  </div>
                </div>
              </div>

              <Link
                href="/gallery"
                className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium transition-colors rounded-lg hover:bg-forest-50"
              >
                Gallery
              </Link>

              <Link
                href="/faq"
                className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium transition-colors rounded-lg hover:bg-forest-50"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 text-charcoal-700 hover:text-forest-600 font-medium transition-colors rounded-lg hover:bg-forest-50"
              >
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-2 text-charcoal-700 hover:text-forest-600 font-medium transition-colors"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">{contactInfo.phone}</span>
              </a>

              <Link
                href="/quote"
                className="btn-primary btn-lg"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-forest-50 text-forest-700 hover:bg-forest-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden fixed inset-x-0 top-[80px] bottom-0 bg-cream-50 z-40
          transition-all duration-300 overflow-y-auto
          ${mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
          }
        `}>
          <div className="container-custom py-6 space-y-2">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>

            {/* Mobile Services */}
            <MobileNavAccordion title="Services">
              <MobileNavSubLink href="/services/floor-leveling" onClick={() => setMobileMenuOpen(false)}>
                Floor Leveling
              </MobileNavSubLink>
              <MobileNavSubLink href="/services/hardwood-installation" onClick={() => setMobileMenuOpen(false)}>
                Hardwood Installation
              </MobileNavSubLink>
              <MobileNavSubLink href="/services/stairs" onClick={() => setMobileMenuOpen(false)}>
                Staircase Services
              </MobileNavSubLink>
              <MobileNavSubLink href="/services/repair-maintenance" onClick={() => setMobileMenuOpen(false)}>
                Repair & Maintenance
              </MobileNavSubLink>
            </MobileNavAccordion>

            {/* Mobile Service Areas */}
            <MobileNavAccordion title="Service Areas">
              <div className="grid grid-cols-2 gap-1">
                {serviceAreas.map((city) => (
                  <MobileNavSubLink
                    key={city}
                    href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {city}
                  </MobileNavSubLink>
                ))}
              </div>
            </MobileNavAccordion>

            {/* Mobile Industries */}
            <MobileNavAccordion title="Industries">
              <MobileNavSubLink href="/industries/residential" onClick={() => setMobileMenuOpen(false)}>
                Residential
              </MobileNavSubLink>
              <MobileNavSubLink href="/industries/commercial" onClick={() => setMobileMenuOpen(false)}>
                Commercial
              </MobileNavSubLink>
            </MobileNavAccordion>

            <MobileNavLink href="/gallery" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </MobileNavLink>

            <MobileNavLink href="/faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </MobileNavLink>

            <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>

            {/* Mobile Contact & CTA */}
            <div className="pt-6 mt-6 border-t border-cream-300 space-y-4">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 py-3 text-forest-600 font-semibold text-lg"
              >
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Phone size={22} className="text-forest-600" />
                </div>
                {contactInfo.phone}
              </a>

              <Link
                href="/quote"
                className="btn-primary btn-lg w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>

              <div className="flex items-center justify-center gap-6 text-sm text-charcoal-500 pt-4">
                <span className="flex items-center gap-1.5">
                  <Shield size={16} className="text-forest-500" />
                  5-Year Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={16} className="text-copper-500" />
                  20+ Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for sticky header */}
      {isSticky && <div className="h-20 lg:h-24" />}
    </>
  )
}

// Desktop Dropdown Item Component
function ServiceDropdownItem({
  href,
  icon,
  title,
  subtitle,
  highlight = false
}: {
  href: string
  icon: React.ReactNode
  title: string
  subtitle: string
  highlight?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200
        ${highlight
          ? 'bg-forest-50 hover:bg-forest-100'
          : 'hover:bg-cream-100'
        }
      `}
    >
      <div className={`
        w-11 h-11 rounded-xl flex items-center justify-center
        ${highlight
          ? 'bg-forest-600 text-white'
          : 'bg-cream-200 text-charcoal-600'
        }
      `}>
        {icon}
      </div>
      <div>
        <span className="font-semibold text-charcoal-900 block">{title}</span>
        <span className={`text-sm ${highlight ? 'text-forest-600' : 'text-charcoal-500'}`}>
          {subtitle}
        </span>
      </div>
      {highlight && (
        <div className="ml-auto">
          <span className="badge-forest text-[10px]">Popular</span>
        </div>
      )}
    </Link>
  )
}

// Mobile Navigation Components
function MobileNavLink({
  href,
  children,
  onClick
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3.5 text-charcoal-800 font-medium text-lg rounded-xl hover:bg-forest-50 transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileNavAccordion({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-cream-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3.5 text-charcoal-800 font-medium text-lg"
      >
        {title}
        <ChevronDown
          size={20}
          className={`text-charcoal-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`
        overflow-hidden transition-all duration-300
        ${isOpen ? 'max-h-[500px] pb-3' : 'max-h-0'}
      `}>
        <div className="pl-4 space-y-1">
          {children}
        </div>
      </div>
    </div>
  )
}

function MobileNavSubLink({
  href,
  children,
  onClick
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2.5 text-charcoal-600 rounded-lg hover:bg-forest-50 hover:text-forest-700 transition-colors"
    >
      {children}
    </Link>
  )
}
