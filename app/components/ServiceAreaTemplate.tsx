'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Star,
  ChevronDown,
  Clock,
  Users,
  Ruler,
  Hammer,
  Paintbrush,
  Wrench,
  Quote
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-hardwood.jpg"
            alt={`Premium flooring services in ${cityName}`}
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

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/quote" className="btn-primary btn-lg">
                  Get Your Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:+16043536077" className="btn-secondary btn-lg">
                  <Phone size={18} />
                  (604) 353-6077
                </a>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-charcoal-700">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-forest-600/30 rounded-lg flex items-center justify-center">
                    <Shield className="text-forest-400" size={18} />
                  </div>
                  <div>
                    <div className="text-cream-100 font-semibold">5-Year</div>
                    <div className="text-charcoal-400 text-xs">Warranty</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-copper-500/30 rounded-lg flex items-center justify-center">
                    <Award className="text-copper-400" size={18} />
                  </div>
                  <div>
                    <div className="text-cream-100 font-semibold">20+ Years</div>
                    <div className="text-charcoal-400 text-xs">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-forest-600/30 rounded-lg flex items-center justify-center">
                    <Star className="text-forest-400" size={18} />
                  </div>
                  <div>
                    <div className="text-cream-100 font-semibold">500+</div>
                    <div className="text-charcoal-400 text-xs">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Feature Card */}
            <div className="hidden lg:block">
              <div className="bg-charcoal-800/80 backdrop-blur-md rounded-3xl p-8 border border-charcoal-700/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-forest-600 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                      Local {cityName} Experts
                    </h3>
                    <p className="text-charcoal-400 text-sm">We know your neighborhood</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-forest-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-charcoal-300 text-sm">Same-day quotes for {cityName} residents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-forest-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-charcoal-300 text-sm">Familiar with local building codes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-forest-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-charcoal-300 text-sm">Experienced with {cityName} property types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-forest-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-charcoal-300 text-sm">Fast response times in your area</span>
                  </li>
                </ul>

                <div className="bg-forest-600/20 rounded-xl p-4 border border-forest-500/30">
                  <div className="flex items-center gap-2 text-forest-300 text-sm">
                    <Clock size={16} />
                    <span>Average quote turnaround: 24-48 hours</span>
                  </div>
                </div>
              </div>
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
              <Users className="text-copper-500" size={18} />
              <span className="text-charcoal-700 text-sm font-medium">Family Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-copper-600 text-sm font-semibold tracking-wider uppercase mb-4">
                <div className="w-12 h-px bg-copper-400" />
                About Our Services
              </div>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {introTitle}
              </h2>

              <div className="space-y-4 text-charcoal-600 leading-relaxed">
                {introContent.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-cream-200">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-forest-600" style={{ fontFamily: 'var(--font-display)' }}>20+</div>
                    <div className="text-charcoal-500 text-sm mt-1">Years Serving {cityName}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-copper-500" style={{ fontFamily: 'var(--font-display)' }}>500+</div>
                    <div className="text-charcoal-500 text-sm mt-1">Local Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-forest-600" style={{ fontFamily: 'var(--font-display)' }}>100%</div>
                    <div className="text-charcoal-500 text-sm mt-1">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/projects/project-1.jpg"
                      alt={`Flooring project in ${cityName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/projects/project-3.jpg"
                      alt={`Hardwood installation in ${cityName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/projects/project-2.jpg"
                      alt={`Floor leveling in ${cityName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/projects/project-4.jpg"
                      alt={`Completed project in ${cityName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-forest-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>A+</div>
                <div className="text-forest-100 text-sm">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden">
        {/* Background Pattern */}
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
              Our {cityName} Services
              <div className="w-12 h-px bg-copper-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Professional Flooring Solutions
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto">
              Comprehensive flooring services tailored for {cityName} properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-copper-600 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-12 h-px bg-copper-400" />
              Why Choose Us
              <div className="w-12 h-px bg-copper-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why {cityName} Residents Trust PROMARK
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      <section className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-copper-600 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-12 h-px bg-copper-400" />
              Coverage Area
              <div className="w-12 h-px bg-copper-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Serving All {cityName} Neighborhoods
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              From downtown to the suburbs, we provide premium flooring services throughout {cityName}.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="flex items-center gap-2 bg-white p-4 rounded-xl border border-cream-200 shadow-sm hover:shadow-md hover:border-forest-300 transition-all"
              >
                <div className="w-8 h-8 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-forest-600" size={16} />
                </div>
                <span className="text-charcoal-700 font-medium text-sm">{neighborhood}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-charcoal-500 mt-8">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="text-forest-500" size={16} />
              Plus all other {cityName} neighborhoods
            </span>
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-forest-50 to-cream-50 rounded-3xl p-8 md:p-12 border border-forest-200 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-forest-600 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={24} />
              </div>

              <div className="mt-4">
                <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed mb-8 italic">
                  "PROMARK did an incredible job leveling our floors in our {cityName} home. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommend!"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-forest-200 rounded-full flex items-center justify-center">
                    <span className="text-forest-700 font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                      JM
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900">Jennifer M.</div>
                    <div className="text-charcoal-500 text-sm">{cityName} Homeowner</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-copper-500 fill-copper-500" size={20} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-copper-600 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-12 h-px bg-copper-400" />
              FAQ
              <div className="w-12 h-px bg-copper-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {cityName} Flooring Questions
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              Common questions from our {cityName} customers
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border-2 border-cream-200 overflow-hidden transition-all hover:border-forest-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-charcoal-900 pr-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? 'bg-forest-600' : ''}`}>
                    <ChevronDown
                      size={18}
                      className={`transition-all duration-300 ${openFaq === i ? 'rotate-180 text-white' : 'text-forest-600'}`}
                    />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-cream-200 mb-4" />
                    <p className="text-charcoal-600 leading-relaxed">{faq.a}</p>
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

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-copper-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-forest-400/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
              <MapPin size={16} className="text-copper-300" />
              <span className="text-cream-200 text-sm font-medium">Serving {cityName} & Surrounding Areas</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Transform Your {cityName} Floors?
            </h2>
            <p className="text-xl text-forest-100 mb-10 max-w-xl mx-auto">
              Get your free, no-obligation quote today. We'll visit your property, assess your needs, and provide a detailed estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white btn-xl">
                Get Your Free Quote
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+16043536077" className="btn-ghost btn-xl">
                <Phone size={20} />
                (604) 353-6077
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-forest-200">
                  <CheckCircle size={18} className="text-forest-300" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-forest-200">
                  <CheckCircle size={18} className="text-forest-300" />
                  <span>No Obligation Quote</span>
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

      {/* Nearby Areas Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Also Serving Areas Near {cityName}
            </h2>
            <p className="text-charcoal-600">
              Explore our flooring services in neighboring communities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group flex items-center gap-3 px-6 py-4 bg-cream-50 rounded-xl border-2 border-cream-200 hover:border-forest-300 hover:bg-forest-50 transition-all"
              >
                <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                  <MapPin className="text-forest-600 group-hover:text-white transition-colors" size={18} />
                </div>
                <div>
                  <span className="text-charcoal-900 font-semibold block">{area.name}</span>
                  <span className="text-charcoal-500 text-sm">View Services</span>
                </div>
                <ArrowRight className="text-charcoal-300 group-hover:text-forest-600 group-hover:translate-x-1 transition-all ml-2" size={18} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/service-areas" className="btn-outline">
              View All Service Areas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
