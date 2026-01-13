import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-white font-bold text-2xl mb-4">
              PROMARK FLOORING
            </div>
            <p className="text-sm mb-4">
              Vancouver's leader in professional floor leveling and hardwood installation. Over 20 years of experience serving Greater Vancouver and Fraser Valley.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+16043536077"
                className="flex items-center gap-2 text-sm hover:text-primary-red transition-colors"
              >
                <Phone size={16} />
                <span>(604) 353-6077</span>
              </a>
              <a
                href="mailto:promarkflooring@hotmail.com"
                className="flex items-center gap-2 text-sm hover:text-primary-red transition-colors"
              >
                <Mail size={16} />
                <span>promarkflooring@hotmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>3225 Commercial Dr<br />Vancouver, BC V5N 4E5</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>Mon-Fri: 8am - 8pm</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/floor-leveling" className="hover:text-primary-red transition-colors">
                  Floor Leveling
                </Link>
              </li>
              <li>
                <Link href="/services/hardwood-installation" className="hover:text-primary-red transition-colors">
                  Hardwood Installation
                </Link>
              </li>
              <li>
                <Link href="/services/stairs" className="hover:text-primary-red transition-colors">
                  Staircase Installation
                </Link>
              </li>
              <li>
                <Link href="/services/repair-maintenance" className="hover:text-primary-red transition-colors">
                  Repair & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service-areas/vancouver" className="hover:text-primary-red transition-colors">
                  Vancouver
                </Link>
              </li>
              <li>
                <Link href="/service-areas/north-vancouver" className="hover:text-primary-red transition-colors">
                  North Vancouver
                </Link>
              </li>
              <li>
                <Link href="/service-areas/west-vancouver" className="hover:text-primary-red transition-colors">
                  West Vancouver
                </Link>
              </li>
              <li>
                <Link href="/service-areas/burnaby" className="hover:text-primary-red transition-colors">
                  Burnaby
                </Link>
              </li>
              <li>
                <Link href="/service-areas/surrey" className="hover:text-primary-red transition-colors">
                  Surrey
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-primary-red hover:text-primary-red-light transition-colors">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gallery" className="hover:text-primary-red transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/industries/residential" className="hover:text-primary-red transition-colors">
                  Residential Services
                </Link>
              </li>
              <li>
                <Link href="/industries/commercial" className="hover:text-primary-red transition-colors">
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-red transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary-red transition-colors">
                  Resources & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2">Ready to Transform Your Floors?</h3>
            <p className="text-gray-400 mb-6">Get a free consultation and quote today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-red-dark transition-colors inline-block"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+16043536077"
                className="bg-white text-primary-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Call (604) 353-6077
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              &copy; {currentYear} PROMARK FLOORING. All rights reserved.
            </div>
            <div className="flex gap-4">
              <span>Family-Owned & Local</span>
              <span>•</span>
              <span>20+ Years Experience</span>
              <span>•</span>
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
