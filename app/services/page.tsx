import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Layers, Grid3X3, TrendingUp, Wrench, CheckCircle, Shield, Award, Phone, Star } from 'lucide-react'

export const metadata = {
  title: 'Our Services | PROMARK FLOORING - Vancouver Floor Specialists',
  description: 'Professional flooring services in Vancouver: Floor Leveling (5-year warranty), Hardwood Installation, Staircase Services, and Repair & Maintenance. 20+ years experience.',
}

const services = [
  {
    title: 'Floor Leveling',
    description: 'Professional floor leveling for residential and commercial properties using advanced self-leveling compounds and precision techniques.',
    icon: Layers,
    href: '/services/floor-leveling',
    warranty: '5-Year Warranty',
    image: '/assets/PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg',
    galleryImage: '/assets/PROMARK-FLOORING-floor-leveling-Vancouver-17.jpg',
    features: ['Self-leveling compounds', 'Concrete grinding', 'Moisture testing', 'Subfloor correction'],
    highlight: true
  },
  {
    title: 'Hardwood Installation',
    description: 'Expert installation of solid hardwood, engineered hardwood, and laminate flooring with meticulous attention to detail.',
    icon: Grid3X3,
    href: '/services/hardwood-installation',
    warranty: '1-Year Warranty',
    image: '/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-10.jpg',
    galleryImage: '/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-11.jpg',
    features: ['Solid hardwood', 'Engineered wood', 'Laminate options', 'Custom finishes'],
    highlight: false
  },
  {
    title: 'Staircase Services',
    description: 'Custom staircase installation, renovation, and repair with precision craftsmanship that transforms your home.',
    icon: TrendingUp,
    href: '/services/stairs',
    warranty: 'Quality Guaranteed',
    image: '/assets/PROMARK-FLOORING-stairs-11.jpg',
    galleryImage: '/assets/PROMARK-FLOORING-stairs-14.jpg',
    features: ['Custom treads', 'Nosing installation', 'Refinishing', 'Safety upgrades'],
    highlight: false
  },
  {
    title: 'Repair & Maintenance',
    description: 'Restore damaged floors to their original beauty with our expert repair and maintenance services.',
    icon: Wrench,
    href: '/services/repair-maintenance',
    warranty: 'Satisfaction Guaranteed',
    image: '/assets/PROMARK-FLOORING-hardwood-flooring-13.jpg',
    galleryImage: '/assets/hardwood-flooring-vancouver-Promark-Flooring-2.jpg',
    features: ['Scratch repair', 'Water damage', 'Refinishing', 'Deep cleaning'],
    highlight: false
  }
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-2.jpg"
            alt="Professional flooring services"
            fill
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/95 to-charcoal-900/80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 rounded-full px-4 py-2 mb-6">
              <Award size={16} className="text-copper-400" />
              <span className="text-forest-300 text-sm font-medium">20+ Years of Excellence</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Professional Flooring
              <span className="text-copper-400 block mt-2">Services</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl">
              From precision floor leveling to stunning hardwood installation, we deliver
              expert craftsmanship backed by industry-leading warranties.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal-800 py-5 border-y border-charcoal-700">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-cream-200">
              <Shield className="text-forest-400" size={18} />
              <span className="text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Award className="text-copper-400" size={18} />
              <span className="text-sm font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Star className="text-forest-400" size={18} />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <CheckCircle className="text-copper-400" size={18} />
              <span className="text-sm font-medium">Free Consultations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Expert Services
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive flooring solutions tailored to your needs, delivered with
              unmatched expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group bg-white rounded-2xl border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  service.highlight ? 'border-forest-200 hover:border-forest-400' : 'border-cream-200 hover:border-copper-200'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-charcoal-900/60 group-hover:bg-charcoal-900/40 transition-colors z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Warranty Badge */}
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    service.highlight
                      ? 'bg-forest-600 text-white'
                      : 'bg-copper-500 text-white'
                  }`}>
                    {service.warranty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      service.highlight
                        ? 'bg-forest-100 text-forest-600 group-hover:bg-forest-600 group-hover:text-white'
                        : 'bg-copper-100 text-copper-600 group-hover:bg-copper-500 group-hover:text-white'
                    }`}>
                      <service.icon size={28} />
                    </div>

                    <div className="flex-1">
                      <h3
                        className="text-2xl text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-charcoal-600 mb-4">{service.description}</p>

                      {/* Features */}
                      <ul className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-600">
                            <CheckCircle size={14} className="text-forest-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <span className={`inline-flex items-center gap-1 font-semibold ${
                        service.highlight ? 'text-forest-600' : 'text-copper-600'
                      }`}>
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Images Showcase */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.title} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.galleryImage}
                    alt={`${service.title} - PROMARK FLOORING`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent" />

                  {/* Service Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        service.highlight ? 'bg-forest-600' : 'bg-copper-500'
                      }`}>
                        <service.icon className="text-white" size={20} />
                      </div>
                      <h3
                        className="text-xl md:text-2xl text-white"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-cream-200 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why Choose PROMARK?
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto">
              Vancouver's most trusted flooring craftsmen, delivering excellence on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-forest-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">5-Year Warranty</h3>
              <p className="text-charcoal-400 text-sm">Industry-leading warranty on floor leveling</p>
            </div>

            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-copper-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-copper-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">20+ Years</h3>
              <p className="text-charcoal-400 text-sm">Master craftsmanship and expertise</p>
            </div>

            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-forest-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">Free Quotes</h3>
              <p className="text-charcoal-400 text-sm">No-obligation consultations</p>
            </div>

            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-copper-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="text-copper-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">5-Star Service</h3>
              <p className="text-charcoal-400 text-sm">Exceptional customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
