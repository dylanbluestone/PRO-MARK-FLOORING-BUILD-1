import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle, Phone } from 'lucide-react'

export const metadata = {
  title: 'Service Areas | Greater Vancouver & Fraser Valley | PROMARK FLOORING',
  description: 'PROMARK FLOORING serves Greater Vancouver and Fraser Valley including Vancouver, Burnaby, Surrey, Langley, and more. 20+ years experience, 5-year warranty.',
}

const areas = [
  {
    name: 'Vancouver',
    slug: 'vancouver',
    description: 'Downtown, East Van, Kitsilano, West Side & more',
    highlights: ['Heritage homes', 'Strata buildings', 'Modern condos']
  },
  {
    name: 'North Vancouver',
    slug: 'north-vancouver',
    description: 'Lonsdale, Lynn Valley, Deep Cove & more',
    highlights: ['Mountain views', 'Waterfront homes', 'Family neighborhoods']
  },
  {
    name: 'West Vancouver',
    slug: 'west-vancouver',
    description: 'Ambleside, Dundarave, British Properties & more',
    highlights: ['Luxury estates', 'Ocean views', 'Custom homes']
  },
  {
    name: 'Burnaby',
    slug: 'burnaby',
    description: 'Metrotown, Brentwood, Heights & more',
    highlights: ['High-rise condos', 'Suburban homes', 'Commercial spaces']
  },
  {
    name: 'Surrey',
    slug: 'surrey',
    description: 'Newton, Fleetwood, Guildford & more',
    highlights: ['Growing communities', 'New construction', 'Large properties']
  },
  {
    name: 'Delta',
    slug: 'delta',
    description: 'Ladner, Tsawwassen, North Delta & more',
    highlights: ['Waterfront', 'Agricultural areas', 'Family homes']
  },
  {
    name: 'Langley',
    slug: 'langley',
    description: 'City, Township, Walnut Grove & more',
    highlights: ['Horse country', 'New developments', 'Acreages']
  },
  {
    name: 'Port Coquitlam',
    slug: 'port-coquitlam',
    description: 'Central, Citadel, Oxford Heights & more',
    highlights: ['Family friendly', 'Affordable housing', 'Growing city']
  },
  {
    name: 'Maple Ridge',
    slug: 'maple-ridge',
    description: 'Town Centre, Albion, Haney & more',
    highlights: ['Mountain backdrop', 'Rural properties', 'New subdivisions']
  },
  {
    name: 'Mission',
    slug: 'mission',
    description: 'Mission City, Hatzic, Silverdale & more',
    highlights: ['Fraser River', 'Country living', 'Historic downtown']
  },
]

const services = [
  { name: 'Floor Leveling', badge: '5-Year Warranty', description: 'Industry-leading precision leveling' },
  { name: 'Hardwood Installation', badge: null, description: 'Premium solid & engineered hardwood' },
  { name: 'Staircase Services', badge: null, description: 'Custom stairs & refinishing' },
  { name: 'Floor Repair', badge: null, description: 'Restoration & maintenance' },
  { name: 'Free Estimates', badge: null, description: 'No-obligation consultations' },
  { name: 'Commercial & Residential', badge: null, description: 'All property types welcome' },
]

export default function ServiceAreasPage() {
  return (
    <main>
      {/* Compact Header */}
      <section className="bg-forest-700 py-8">
        <div className="container-custom">
          <h1
            className="text-2xl md:text-3xl text-white font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Service Areas
          </h1>
          <p className="text-forest-200 mt-2">
            Serving Greater Vancouver & Fraser Valley for 20+ years
          </p>
        </div>
      </section>

      {/* Areas Grid - Immediately visible */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-custom">
          <h2
            className="text-xl md:text-2xl text-charcoal-900 mb-6 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Select Your City
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white rounded-2xl border-2 border-cream-200 p-6 hover:border-forest-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div className="flex-1">
                    <h2
                      className="text-xl text-charcoal-900 mb-1 group-hover:text-forest-700 transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {area.name}
                    </h2>
                    <p className="text-charcoal-500 text-sm">{area.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {area.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs px-2.5 py-1 bg-cream-100 text-charcoal-600 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                  <span className="inline-flex items-center gap-1 text-forest-600 font-medium text-sm">
                    View {area.name} Services
                  </span>
                  <ArrowRight size={18} className="text-forest-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available - Compact */}
      <section className="py-12 bg-white border-t border-cream-200">
        <div className="container-custom">
          <h3
            className="text-lg text-charcoal-900 mb-4 font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Services Available in All Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center gap-3 p-3 bg-cream-50 rounded-lg"
              >
                <CheckCircle className="text-forest-600 flex-shrink-0" size={18} />
                <div>
                  <span className="text-charcoal-900 font-medium text-sm">{service.name}</span>
                  {service.badge && (
                    <span className="text-xs bg-forest-600 text-white px-2 py-0.5 rounded-full ml-2">
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>
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
                Don't See Your Area?
              </h2>
              <p className="text-forest-200 mt-1">
                We serve additional areas. Contact us to confirm availability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-white">
                Get Free Quote
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+16043536077" className="btn-ghost">
                <Phone size={16} />
                (604) 353-6077
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
