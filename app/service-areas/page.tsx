import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, CheckCircle, Shield, Award, Star, Phone, Clock, Users } from 'lucide-react'

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
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-hardwood.jpg"
            alt="Greater Vancouver Flooring Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/90 to-charcoal-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-forest-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-copper-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
              <MapPin size={16} className="text-forest-400" />
              <span className="text-forest-300 text-sm font-medium">10+ Cities Served</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Service
              <span className="text-copper-400 block mt-2">Areas</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mb-8">
              Proudly serving homeowners, businesses, and contractors across Greater Vancouver
              and the Fraser Valley with expert flooring services for over 20 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary btn-lg">
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+16043536077" className="btn-secondary btn-lg">
                <Phone size={18} />
                (604) 353-6077
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 100V50C240 16.67 480 0 720 0C960 0 1200 16.67 1440 50V100H0Z" fill="var(--color-cream-50)" />
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-cream-50 py-6 border-b border-cream-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-200 shadow-sm">
              <Shield className="text-forest-600" size={18} />
              <span className="text-charcoal-700 text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-200 shadow-sm">
              <Award className="text-copper-500" size={18} />
              <span className="text-charcoal-700 text-sm font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-200 shadow-sm">
              <Star className="text-forest-600" size={18} />
              <span className="text-charcoal-700 text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-200 shadow-sm">
              <MapPin className="text-copper-500" size={18} />
              <span className="text-charcoal-700 text-sm font-medium">10+ Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-copper-600 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-12 h-px bg-copper-400" />
              Find Your Area
              <div className="w-12 h-px bg-copper-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Service Areas
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Click on your city below to learn more about our services in your area
            </p>
          </div>

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

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-copper-600 text-sm font-semibold tracking-wider uppercase mb-4">
                <div className="w-12 h-px bg-copper-400" />
                Coverage Area
              </div>

              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Serving the Entire Lower Mainland
              </h2>

              <p className="text-charcoal-600 mb-8 leading-relaxed">
                From downtown Vancouver to the Fraser Valley, PROMARK FLOORING provides
                professional flooring services throughout the Greater Vancouver area.
                Our central location allows us to respond quickly to service calls
                across all communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-cream-200">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-forest-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900">24-48 hrs</div>
                    <div className="text-charcoal-500 text-sm">Quote Response</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-cream-200">
                  <div className="w-10 h-10 bg-copper-100 rounded-lg flex items-center justify-center">
                    <Users className="text-copper-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900">500+</div>
                    <div className="text-charcoal-500 text-sm">Happy Customers</div>
                  </div>
                </div>
              </div>

              <Link href="/quote" className="btn-primary">
                Request Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-cream-200">
                <div className="aspect-square bg-cream-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Map placeholder - in production this could be a real map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-cream-100" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Greater Vancouver
                    </h3>
                    <p className="text-charcoal-600 text-sm">& Fraser Valley</p>
                  </div>

                  {/* Floating area indicators */}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-charcoal-700">
                    North Vancouver
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-charcoal-700">
                    West Vancouver
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-charcoal-700">
                    Surrey
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-charcoal-700">
                    Langley
                  </div>
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-charcoal-700">
                    Burnaby
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-copper-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-12 h-px bg-copper-400" />
              What We Offer
              <div className="w-12 h-px bg-copper-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Available in Every Service Area
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto">
              Consistent quality and professional service across all of Greater Vancouver and Fraser Valley
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-charcoal-800/50 backdrop-blur-sm rounded-2xl p-6 border border-charcoal-700/50 hover:border-forest-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-forest-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-cream-100 font-semibold">{service.name}</span>
                      {service.badge && (
                        <span className="text-xs bg-forest-600 text-white px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-charcoal-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-800 to-charcoal-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
          }}
        />

        <div className="absolute top-10 left-10 w-32 h-32 bg-copper-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-forest-400/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
              <MapPin size={16} className="text-copper-300" />
              <span className="text-cream-200 text-sm font-medium">We Come to You</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Don't See Your Area Listed?
            </h2>
            <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
              We serve many additional areas throughout the Lower Mainland.
              Contact us to confirm service availability in your location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white btn-xl">
                Request Free Quote
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+16043536077" className="btn-ghost btn-xl">
                <Phone size={20} />
                Call (604) 353-6077
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-forest-200">
                  <CheckCircle size={18} className="text-forest-300" />
                  <span>Free In-Home Consultations</span>
                </div>
                <div className="flex items-center gap-2 text-forest-200">
                  <CheckCircle size={18} className="text-forest-300" />
                  <span>No Obligation Quotes</span>
                </div>
                <div className="flex items-center gap-2 text-forest-200">
                  <CheckCircle size={18} className="text-forest-300" />
                  <span>5-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
