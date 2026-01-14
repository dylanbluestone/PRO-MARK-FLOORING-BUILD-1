import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Ruler,
  Hammer,
  Paintbrush,
  Wrench
} from 'lucide-react'

interface ServiceAreaTemplateProps {
  cityName: string
  heroDescription: string
  introTitle: string
  introContent: string[]
  services: { title: string; desc: string; link: string }[]
  benefits: string[]
  neighborhoods: string[]
  faqs: { q: string; a: string }[]
  nearbyAreas: { name: string; slug: string }[]
}

// Map service titles to icons
const serviceIcons: Record<string, typeof Ruler> = {
  'floor leveling': Ruler,
  'hardwood': Paintbrush,
  'stair': Hammer,
  'repair': Wrench,
}

function getServiceIcon(title: string) {
  const lowerTitle = title.toLowerCase()
  for (const [key, Icon] of Object.entries(serviceIcons)) {
    if (lowerTitle.includes(key)) return Icon
  }
  return Ruler
}

export default function ServiceAreaTemplate({
  cityName,
  heroDescription,
  introTitle,
  introContent,
  services,
  benefits,
  neighborhoods,
  faqs,
  nearbyAreas
}: ServiceAreaTemplateProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-12 md:py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hardwood-flooring-vancouver-Promark-Flooring.jpg"
            alt={`Premium flooring services in ${cityName}`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/90 to-charcoal-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-forest-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-copper-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-charcoal-400 mb-6">
                <Link href="/" className="hover:text-cream-100 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/service-areas" className="hover:text-cream-100 transition-colors">Service Areas</Link>
                <span>/</span>
                <span className="text-copper-400">{cityName}</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
                <MapPin size={16} className="text-forest-400" />
                <span className="text-forest-300 text-sm font-medium">Proudly Serving {cityName}</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Expert Flooring Services
                <span className="text-copper-400 block mt-2">in {cityName}, BC</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal-300 max-w-xl mb-8 leading-relaxed">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Link href="/quote" className="btn-primary btn-lg w-full sm:w-auto justify-center">
                  Get Your Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:+16043536077" className="btn-secondary btn-lg w-full sm:w-auto justify-center">
                  <Phone size={18} />
                  (604) 353-6077
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2
              className="text-2xl md:text-3xl text-charcoal-900 mb-4 font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {introTitle}
            </h2>

            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              {introContent.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-charcoal-900">
        <div className="container-custom">
          <h2
            className="text-xl md:text-2xl text-cream-50 mb-6 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Services in {cityName}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.title)
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group bg-charcoal-800/50 backdrop-blur-sm rounded-2xl p-8 border border-charcoal-700/50 hover:border-forest-500/50 hover:bg-charcoal-800 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-600 transition-colors">
                      <Icon className="text-forest-400 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="text-xl text-cream-100 group-hover:text-white transition-colors"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {service.title}
                        </h3>
                        {index === 0 && (
                          <span className="bg-forest-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                            5-Year Warranty
                          </span>
                        )}
                      </div>
                      <p className="text-charcoal-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 text-forest-400 font-medium text-sm group-hover:text-forest-300 transition-colors">
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2
            className="text-xl md:text-2xl text-charcoal-900 mb-6 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Choose PROMARK in {cityName}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {benefits.map((benefit, i) => {
              // Extract title from benefit (text before colon)
              const colonIndex = benefit.indexOf(':')
              const hasColon = colonIndex > -1
              const title = hasColon ? benefit.substring(0, colonIndex) : `Benefit ${i + 1}`
              const description = hasColon ? benefit.substring(colonIndex + 1).trim() : benefit

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border-2 border-cream-200 hover:border-forest-300 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-600 transition-colors">
                    <CheckCircle className="text-forest-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3
                    className="text-lg text-charcoal-900 mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <h2
            className="text-xl md:text-2xl text-charcoal-900 mb-4 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cityName} Neighborhoods We Serve
          </h2>

          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white rounded-full border border-cream-200 text-charcoal-700 text-xs sm:text-sm"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Good for SEO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2
            className="text-xl md:text-2xl text-charcoal-900 mb-6 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cityName} Flooring FAQ
          </h2>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-cream-50 rounded-lg border border-cream-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer">
                  <span className="font-medium text-charcoal-900 pr-4 text-sm">{faq.q}</span>
                  <ChevronDown size={16} className="text-charcoal-400 flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-charcoal-600 text-sm">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-forest-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2
                className="text-xl md:text-2xl text-white font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to Get Started in {cityName}?
              </h2>
              <p className="text-forest-200 mt-1">
                Free quotes, no obligation, 5-year warranty
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-white w-full sm:w-auto justify-center">
                Get Free Quote
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+16043536077" className="btn-ghost w-full sm:w-auto justify-center">
                <Phone size={16} />
                (604) 353-6077
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-12 bg-cream-50">
        <div className="container-custom">
          <h2
            className="text-lg text-charcoal-900 mb-4 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Also Serving Near {cityName}
          </h2>

          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-cream-200 hover:border-forest-400 transition-colors text-sm"
              >
                <MapPin size={14} className="text-forest-600" />
                <span className="text-charcoal-700">{area.name}</span>
              </Link>
            ))}
            <Link href="/service-areas" className="flex items-center gap-2 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors text-sm">
              View All Areas
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
