import Link from 'next/link'
import { ArrowRight, Layers, Grid3X3, TrendingUp, Wrench, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Services | PROMARK FLOORING',
  description: 'Professional flooring services in Vancouver: Floor Leveling, Hardwood Installation, Stairs, and Repair.',
}

const services = [
  {
    title: 'Floor Leveling',
    description: 'Professional floor leveling for residential and commercial properties using advanced self-leveling compounds.',
    icon: Layers,
    href: '/services/floor-leveling',
    warranty: '5-Year Warranty',
    features: ['Self-leveling compounds', 'Concrete grinding', 'Moisture testing', 'Crack repair']
  },
  {
    title: 'Hardwood Installation',
    description: 'Expert installation of solid hardwood, engineered hardwood, and laminate flooring.',
    icon: Grid3X3,
    href: '/services/hardwood-installation',
    warranty: '1-Year Warranty',
    features: ['Solid hardwood', 'Engineered wood', 'Laminate options', 'Custom finishes']
  },
  {
    title: 'Staircase Installation',
    description: 'Custom staircase preparation and installation with precision craftsmanship.',
    icon: TrendingUp,
    href: '/services/stairs',
    warranty: 'Quality Guaranteed',
    features: ['Custom treads', 'Nosing installation', 'Refinishing', 'Safety upgrades']
  },
  {
    title: 'Repair & Maintenance',
    description: 'Restore damaged floors to their original beauty with our repair services.',
    icon: Wrench,
    href: '/services/repair-maintenance',
    warranty: 'Satisfaction Guaranteed',
    features: ['Scratch repair', 'Water damage', 'Refinishing', 'Deep cleaning']
  }
]

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional flooring solutions for every need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-red-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">
                    <service.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {service.title}
                      </h2>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {service.warranty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-red-600 font-semibold">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100">
              Get Free Quote
            </Link>
            <a href="tel:+16043536077" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10">
              Call (604) 353-6077
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
