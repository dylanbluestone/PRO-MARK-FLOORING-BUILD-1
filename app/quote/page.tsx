import QuoteForm from '@/app/components/QuoteForm'
import { Shield, Clock, Award, CheckCircle, Phone, Star, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Get a Free Quote | PROMARK FLOORING - Vancouver Floor Specialists',
  description: 'Request a free, no-obligation quote for floor leveling, hardwood installation, or staircase services in Vancouver. 5-year warranty, 20+ years experience.',
}

export default function QuotePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-hardwood.jpg"
            alt="Premium hardwood flooring"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/95 to-charcoal-900/80" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle size={16} className="text-forest-400" />
              <span className="text-forest-300 text-sm font-medium">100% Free, No-Obligation Quote</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get Your Free
              <span className="text-copper-400 block mt-2">Flooring Quote</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mb-8">
              Tell us about your project and receive a detailed, personalized estimate from
              Mark Biernacki within 24 hours. Vancouver's most trusted flooring craftsman.
            </p>

            {/* Quick Contact */}
            <a
              href="tel:+16043536077"
              className="inline-flex items-center gap-3 text-cream-200 hover:text-copper-400 transition-colors group"
            >
              <div className="w-12 h-12 bg-forest-600 rounded-xl flex items-center justify-center group-hover:bg-forest-500 transition-colors">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <span className="text-sm text-charcoal-400 block">Prefer to call?</span>
                <span className="text-lg font-semibold">(604) 353-6077</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal-800 py-5 border-y border-charcoal-700">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-cream-200">
              <CheckCircle className="text-forest-400" size={18} />
              <span className="text-sm font-medium">100% Free Estimate</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Clock className="text-copper-400" size={18} />
              <span className="text-sm font-medium">Response Within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Shield className="text-forest-400" size={18} />
              <span className="text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Award className="text-copper-400" size={18} />
              <span className="text-sm font-medium">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-6">
                  <h3
                    className="text-xl text-charcoal-900 mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Why Choose PROMARK?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="text-forest-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-900 mb-1">5-Year Warranty</h4>
                        <p className="text-sm text-charcoal-600">Industry-leading warranty on all floor leveling work</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-copper-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="text-copper-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-900 mb-1">20+ Years Experience</h4>
                        <p className="text-sm text-charcoal-600">Master craftsmanship honed over two decades</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="text-forest-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-900 mb-1">Family-Owned & Local</h4>
                        <p className="text-sm text-charcoal-600">Personal attention from owner Mark Biernacki</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-copper-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="text-copper-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-900 mb-1">5-Star Rated</h4>
                        <p className="text-sm text-charcoal-600">Consistently excellent reviews from satisfied clients</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-forest-700 rounded-2xl p-6 text-white">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-copper-400 fill-copper-400" />
                    ))}
                  </div>
                  <blockquote className="text-forest-100 mb-4 italic">
                    "Mark's attention to detail is unmatched. Our floors were uneven for years,
                    and now they're perfectly level. The 5-year warranty gave us total peace of mind."
                  </blockquote>
                  <cite className="text-sm text-forest-300 not-italic">
                    — Sarah M., Vancouver
                  </cite>
                </div>

                {/* Direct Contact */}
                <div className="bg-charcoal-900 rounded-2xl p-6 text-white">
                  <h4
                    className="text-lg mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-charcoal-400 text-sm mb-4">
                    Call us directly for urgent flooring needs or emergency repairs.
                  </p>
                  <a
                    href="tel:+16043536077"
                    className="btn-accent btn-lg w-full justify-center"
                  >
                    <Phone size={18} />
                    (604) 353-6077
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-3xl shadow-xl border border-cream-200 p-8 md:p-10 lg:p-12">
                <div className="text-center mb-10">
                  <h2
                    className="text-2xl md:text-3xl text-charcoal-900 mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Tell Us About Your Project
                  </h2>
                  <p className="text-charcoal-600 max-w-xl mx-auto">
                    Fill out the form below with as much detail as possible. The more information
                    you provide, the more accurate your personalized quote will be.
                  </p>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What Happens Next?
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto">
              Our simple process ensures you get the perfect flooring solution for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Submit Request', desc: 'Fill out the form above with your project details' },
              { step: 2, title: 'We Review', desc: 'Mark personally reviews your request within 24 hours' },
              { step: 3, title: 'Free Consultation', desc: 'We schedule a free on-site assessment if needed' },
              { step: 4, title: 'Get Your Quote', desc: 'Receive a detailed, no-obligation quote' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-forest-600 to-forest-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-cream-100 mb-2">{item.title}</h3>
                <p className="text-charcoal-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
