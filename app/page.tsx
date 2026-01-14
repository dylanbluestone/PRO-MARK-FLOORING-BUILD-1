import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  CheckCircle,
  Award,
  Users,
  Shield,
  ArrowRight,
  Star,
  MapPin,
  Layers,
  Grid3X3,
  TrendingUp,
  Wrench,
  Clock,
  BadgeCheck,
  Sparkles
} from 'lucide-react'
import { LocalBusinessSchema } from '@/lib/schema-markup'

// Contact Info
const contactInfo = {
  phone: '(604) 353-6077',
  phoneHref: 'tel:+16043536077',
}

// Trust bar items
const trustItems = [
  { icon: Shield, label: '5-Year Warranty', sublabel: 'Floor Leveling' },
  { icon: Award, label: '20+ Years', sublabel: 'Experience' },
  { icon: Users, label: 'Family-Owned', sublabel: 'Local & Trusted' },
  { icon: Star, label: '5-Star Rated', sublabel: 'Google Reviews' },
  { icon: Clock, label: 'Mon-Fri', sublabel: '8AM - 8PM' },
]

// Services
const services = [
  {
    title: 'Floor Leveling',
    description: 'Industry-leading precision floor leveling with our exclusive 5-year warranty. We transform uneven, damaged subfloors into perfectly level surfaces.',
    image: '/assets/PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg',
    href: '/services/floor-leveling',
    icon: Layers,
    badge: '5-Year Warranty',
  },
  {
    title: 'Hardwood Installation',
    description: 'Premium hardwood, engineered wood, and laminate flooring installed with meticulous attention to detail by our master craftsmen.',
    image: '/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-11.jpg',
    href: '/services/hardwood-installation',
    icon: Grid3X3,
    badge: 'Premium Materials',
  },
  {
    title: 'Staircase Services',
    description: 'Transform your staircase into a stunning focal point with custom hardwood stairs, refinishing, and expert repairs.',
    image: '/assets/PROMARK-FLOORING-stairs-11.jpg',
    href: '/services/stairs',
    icon: TrendingUp,
    badge: 'Custom Design',
  },
  {
    title: 'Repair & Maintenance',
    description: 'Professional floor repair, refinishing, and restoration services to bring your floors back to their original beauty.',
    image: '/assets/PROMARK-FLOORING-hardwood-flooring-13.jpg',
    href: '/services/repair-maintenance',
    icon: Wrench,
    badge: 'Restore & Renew',
  },
]

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We assess your space and discuss your flooring vision, providing expert recommendations.',
  },
  {
    number: '02',
    title: 'Detailed Quote',
    description: 'You receive a comprehensive, transparent quote with no hidden fees or surprises.',
  },
  {
    number: '03',
    title: 'Expert Installation',
    description: 'Our skilled craftsmen execute your project with precision and care.',
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Final walkthrough ensures everything meets our exacting standards.',
  },
]


// Gallery images
const galleryImages = [
  '/assets/hardwood-flooring-vancouver-Promark-Flooring-2.jpg',
  '/assets/PROMARK-FLOORING-floor-leveling-Vancouver-17.jpg',
  '/assets/PROMARK-FLOORING-stairs-14.jpg',
  '/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-10.jpg',
  '/assets/PROMARK-FLOORING-floor-leveling-Vancouver-14.jpg',
  '/assets/PROMARK-FLOORING-vinyl-flooring-vancouver-11.jpg',
]

// Service areas - Only cities with dedicated pages
const serviceAreas = [
  'Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby',
  'Surrey', 'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission'
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[650px] lg:min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hardwood-flooring-vancouver-Promark-Flooring.jpg"
            alt="Premium hardwood flooring installation in Vancouver by PROMARK FLOORING"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-900/75 to-charcoal-900/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <Sparkles className="text-copper-400" size={18} />
              <span className="text-cream-100 text-sm font-medium">Vancouver's Premier Flooring Craftsmen</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.1] text-shadow-lg"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Precision Floor Leveling &{' '}
              <span className="text-copper-400">Luxury Hardwood</span>{' '}
              Installation
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-cream-200 mb-10 leading-relaxed max-w-2xl">
              Transform your property with Vancouver's most trusted flooring experts.
              Over 20 years of craftsmanship excellence, backed by our industry-leading
              5-year warranty on floor leveling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
              <Link
                href="/quote"
                className="btn-primary btn-lg w-full sm:w-auto justify-center"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="btn-ghost btn-lg w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                {contactInfo.phone}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="text-forest-400 flex-shrink-0" size={18} />
                <span className="text-cream-100 font-medium text-sm sm:text-base">5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-copper-400 flex-shrink-0" size={18} />
                <span className="text-cream-100 font-medium text-sm sm:text-base">20+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="text-forest-400 flex-shrink-0" size={18} />
                <span className="text-cream-100 font-medium text-sm sm:text-base">Certified</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ============================================
          TRUST BAR
          ============================================ */}
      <section className="bg-forest-700 py-4 sm:py-6 md:py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-8">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 sm:gap-3 justify-center lg:justify-start ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-copper-400 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-white font-semibold text-xs sm:text-sm block leading-tight truncate">
                    {item.label}
                  </span>
                  <span className="text-forest-200 text-[10px] sm:text-xs hidden sm:block">
                    {item.sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION
          ============================================ */}
      <section className="section bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div>
              <span className="text-label text-forest-600 mb-4 block">About Us</span>
              <div className="section-line" />
              <h2
                className="text-charcoal-900 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                20+ Years of Flooring Excellence in Vancouver
              </h2>
              <p className="text-body-lg text-charcoal-600 mb-6">
                Founded and operated by Mark Biernacki (Marek), PROMARK FLOORING has been the
                trusted choice for professional floor leveling and hardwood installation across
                Greater Vancouver and the Fraser Valley.
              </p>
              <p className="text-charcoal-600 mb-8">
                We combine old-world craftsmanship with modern techniques to deliver flooring
                solutions that stand the test of time. Every project receives our personal
                attention and commitment to excellence.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Industry-leading 5-year warranty on floor leveling',
                  'Certified & experienced master craftsmen',
                  'Family-owned & locally operated since 2004',
                  'Serving residential & commercial properties'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-forest-600" size={16} />
                    </div>
                    <span className="text-charcoal-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/quote" className="btn-primary btn-lg">
                Get Your Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg"
                  alt="Professional floor leveling work by PROMARK FLOORING"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 bg-copper-500 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  20+
                </div>
                <div className="text-white/90 text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Years Experience
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-copper-500/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section className="section bg-cream-100">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-label text-forest-600 mb-4 block">Our Services</span>
            <div className="section-line-center" />
            <h2
              className="text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Professional Flooring Solutions
            </h2>
            <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive flooring services for residential and commercial properties,
              delivered with precision and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group card-service"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover img-zoom"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="badge-forest">{service.badge}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center -mt-12 mb-4 relative z-10 border-4 border-white shadow-lg group-hover:bg-forest-600 transition-colors">
                    <service.icon className="text-forest-600 group-hover:text-white transition-colors" size={26} />
                  </div>

                  <h3
                    className="text-xl lg:text-2xl text-charcoal-900 mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-charcoal-600 mb-4">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-forest-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS SECTION
          ============================================ */}
      <section className="section bg-cream-100">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-label text-forest-600 mb-4 block">How We Work</span>
            <div className="section-line-center" />
            <h2
              className="text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Simple Process
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              From consultation to completion, we ensure every step exceeds your expectations.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-cream-200">
                  {/* Number */}
                  <div className="w-14 h-14 bg-forest-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-lg text-charcoal-900 mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-forest-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS CTA SECTION
          ============================================ */}
      <section className="section-sm bg-cream-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-copper-500 fill-copper-500" size={24} />
                ))}
              </div>
              <span className="text-charcoal-700 font-semibold ml-2">5-Star Rated on Google</span>
            </div>
            <h2
              className="text-2xl md:text-3xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              See What Our Customers Say
            </h2>
            <p className="text-charcoal-600 mb-6 max-w-xl mx-auto">
              Read real reviews from satisfied customers across Greater Vancouver.
            </p>
            <a
              href="https://www.google.com/search?q=promark+flooring+vancouver+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View Google Reviews
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          GALLERY PREVIEW
          ============================================ */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-label text-forest-600 mb-4 block">Our Work</span>
            <div className="section-line-center" />
            <h2
              className="text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Recent Projects
            </h2>
            <p className="text-charcoal-600 text-lg">
              See the PROMARK difference in every installation.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`PROMARK FLOORING project ${index + 1}`}
                  fill
                  className="object-cover img-zoom"
                  unoptimized
                />
                <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/40 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/gallery" className="btn-primary btn-lg">
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICE AREAS
          ============================================ */}
      <section className="section bg-cream-100">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-label text-forest-600 mb-4 block">Coverage</span>
            <div className="section-line-center" />
            <h2
              className="text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Serving Greater Vancouver & Fraser Valley
            </h2>
            <p className="text-charcoal-600 text-lg">
              Professional flooring services throughout the Lower Mainland.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {serviceAreas.map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                className="flex items-center gap-2 bg-white p-4 rounded-xl border border-cream-200 hover:border-forest-300 hover:shadow-lg transition-all group"
              >
                <MapPin size={18} className="text-copper-500 group-hover:text-forest-600 transition-colors" />
                <span className="text-charcoal-700 font-medium">{city}</span>
              </Link>
            ))}
          </div>

          <p className="text-center text-charcoal-500">
            Don't see your area? <a href={contactInfo.phoneHref} className="text-forest-600 font-medium hover:underline">Call us</a> to confirm service availability.
          </p>
        </div>
      </section>

    </>
  )
}
