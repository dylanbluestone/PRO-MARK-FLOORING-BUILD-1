import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Award,
  Users,
  Star,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'

// Contact Information - centralized for easy updates
const contactInfo = {
  phone: '(604) 353-6077',
  phoneHref: 'tel:+16043536077',
  email: 'promarkflooring@hotmail.com',
  address: '3225 Commercial Dr',
  city: 'Vancouver, BC V5N 4E5',
  hours: 'Mon - Fri: 8AM - 8PM',
}

const services = [
  { name: 'Floor Leveling', href: '/services/floor-leveling', badge: '5-Year Warranty' },
  { name: 'Hardwood Installation', href: '/services/hardwood-installation' },
  { name: 'Staircase Services', href: '/services/stairs' },
  { name: 'Repair & Maintenance', href: '/services/repair-maintenance' },
]

const serviceAreas = [
  'Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey',
  'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission'
]

const quickLinks = [
  { name: 'Gallery', href: '/gallery' },
  { name: 'Residential Services', href: '/industries/residential' },
  { name: 'Commercial Services', href: '/industries/commercial' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900">
      {/* CTA Section */}
      <section className="bg-forest-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.1) 20px,
              rgba(255,255,255,0.1) 40px
            )`
          }}
        />

        <div className="container-custom py-16 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Transform Your Floors?
            </h2>
            <p className="text-forest-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote from Vancouver's most trusted flooring craftsmen.
              Experience the difference that 20+ years of excellence makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/quote"
                className="btn-white btn-lg"
              >
                Request Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="btn-ghost btn-lg"
              >
                <Phone size={18} />
                Call {contactInfo.phone}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-forest-100">
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-copper-400" />
                <span className="text-sm md:text-base">5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-copper-400" />
                <span className="text-sm md:text-base">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-copper-400" />
                <span className="text-sm md:text-base">Family-Owned & Local</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-copper-400" />
                <span className="text-sm md:text-base">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-700 rounded-xl flex items-center justify-center">
                <span
                  className="text-cream-50 text-xl tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  PM
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl text-cream-50 tracking-wide leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                >
                  PROMARK
                </span>
                <span className="text-[10px] text-forest-400 tracking-[0.3em] uppercase font-semibold mt-0.5">
                  FLOORING
                </span>
              </div>
            </Link>

            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              Vancouver's premier flooring craftsmen. Specializing in precision floor leveling
              and luxury hardwood installation. Over 20 years of excellence serving Greater
              Vancouver and the Fraser Valley.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 text-cream-200 hover:text-copper-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-charcoal-800 rounded-lg flex items-center justify-center group-hover:bg-forest-700 transition-colors">
                  <Phone size={16} className="text-copper-400" />
                </div>
                <span className="font-medium">{contactInfo.phone}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-cream-300 hover:text-copper-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-charcoal-800 rounded-lg flex items-center justify-center group-hover:bg-forest-700 transition-colors">
                  <Mail size={16} className="text-copper-400" />
                </div>
                <span className="text-sm">{contactInfo.email}</span>
              </a>

              <div className="flex items-start gap-3 text-charcoal-400">
                <div className="w-9 h-9 bg-charcoal-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-copper-400" />
                </div>
                <div className="text-sm">
                  <span className="block">{contactInfo.address}</span>
                  <span>{contactInfo.city}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-charcoal-400">
                <div className="w-9 h-9 bg-charcoal-800 rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-copper-400" />
                </div>
                <span className="text-sm">{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cream-50 font-semibold text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-charcoal-400 hover:text-copper-400 transition-colors text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-copper-500 rounded-full" />
                    <span>{service.name}</span>
                    {service.badge && (
                      <span className="text-[10px] bg-forest-700 text-forest-200 px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 transition-colors text-sm mt-4"
            >
              View All Services
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-cream-50 font-semibold text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.slice(0, 8).map((city) => (
                <li key={city}>
                  <Link
                    href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                    className="text-charcoal-400 hover:text-copper-400 transition-colors text-sm"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 transition-colors text-sm mt-4"
            >
              All Service Areas
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream-50 font-semibold text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-charcoal-400 hover:text-copper-400 transition-colors text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-copper-500 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-cream-200 font-medium text-sm mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-charcoal-800 rounded-lg flex items-center justify-center text-charcoal-400 hover:bg-forest-700 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-charcoal-800 rounded-lg flex items-center justify-center text-charcoal-400 hover:bg-forest-700 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-charcoal-800 rounded-lg flex items-center justify-center text-charcoal-400 hover:bg-forest-700 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-charcoal-500 text-sm">
              &copy; {currentYear} PROMARK FLOORING. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-forest-500" />
                Family-Owned & Local
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-copper-500" />
                20+ Years Experience
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-forest-500" />
                5-Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
