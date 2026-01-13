import ContactForm from '@/app/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Shield, Award, Users, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Contact Us | PROMARK FLOORING - Vancouver Floor Specialists',
  description: 'Contact PROMARK FLOORING for floor leveling and hardwood installation in Vancouver. Call (604) 353-6077 for a free consultation.',
}

const contactInfo = {
  phone: '(604) 353-6077',
  phoneHref: 'tel:+16043536077',
  email: 'promarkflooring@hotmail.com',
  address: '3225 Commercial Dr',
  city: 'Vancouver, BC V5N 4E5',
  hours: 'Monday - Friday: 8AM - 8PM',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-leveling.jpg"
            alt="Floor leveling in progress"
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
              <MessageCircle size={16} className="text-forest-400" />
              <span className="text-forest-300 text-sm font-medium">We're Here to Help</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's Talk About
              <span className="text-copper-400 block mt-2">Your Floors</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl">
              Ready to transform your space? Reach out for a free consultation with Mark Biernacki,
              Vancouver's trusted flooring expert with over 20 years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2
                className="text-3xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Get In Touch
              </h2>
              <p className="text-charcoal-600 mb-8">
                Choose your preferred way to reach us. We respond to all inquiries within 24 hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                {/* Phone */}
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-4 p-5 bg-forest-50 rounded-2xl hover:bg-forest-100 transition-all group border-2 border-forest-100 hover:border-forest-200"
                >
                  <div className="w-14 h-14 bg-forest-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-forest-700 font-medium block">Call Us Directly</span>
                    <span className="text-2xl font-bold text-charcoal-900">{contactInfo.phone}</span>
                  </div>
                  <div className="bg-forest-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Fastest Response
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl hover:bg-cream-50 transition-all group border-2 border-cream-200 hover:border-copper-200"
                >
                  <div className="w-14 h-14 bg-copper-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-charcoal-500 block">Email Us</span>
                    <span className="text-lg font-semibold text-charcoal-900">{contactInfo.email}</span>
                  </div>
                  <ArrowRight className="text-charcoal-400 group-hover:text-copper-500 transition-colors" size={20} />
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-cream-200">
                  <div className="w-14 h-14 bg-charcoal-800 rounded-xl flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-charcoal-500 block">Visit Our Office</span>
                    <span className="text-lg font-semibold text-charcoal-900">{contactInfo.address}</span>
                    <span className="text-charcoal-600 block">{contactInfo.city}</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-cream-200">
                  <div className="w-14 h-14 bg-charcoal-800 rounded-xl flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-charcoal-500 block">Business Hours</span>
                    <span className="text-lg font-semibold text-charcoal-900">{contactInfo.hours}</span>
                    <span className="text-forest-600 text-sm font-medium block mt-1">Open Now</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.07!3d49.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE1JzM2LjAiTiAxMjPCsDA0JzEyLjAiVw!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="PROMARK FLOORING Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-cream-200 p-8 lg:p-10">
                <h2
                  className="text-2xl text-charcoal-900 mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Send Us a Message
                </h2>
                <p className="text-charcoal-600 mb-8">
                  Have a question or want to discuss your project? We'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              {/* Quick Quote CTA */}
              <div className="mt-6 bg-forest-700 rounded-2xl p-6 text-white">
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Ready for a Detailed Quote?
                </h3>
                <p className="text-forest-200 text-sm mb-4">
                  Our comprehensive quote form helps us provide you with an accurate estimate.
                </p>
                <Link href="/quote" className="btn-white btn-sm">
                  Request Free Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why Vancouver Trusts PROMARK
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto">
              Over two decades of excellence serving Greater Vancouver and the Fraser Valley.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-forest-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">5-Year Warranty</h3>
              <p className="text-charcoal-400 text-sm">Industry-leading warranty on all floor leveling work</p>
            </div>

            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-copper-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-copper-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">20+ Years Experience</h3>
              <p className="text-charcoal-400 text-sm">Master craftsmanship honed over two decades</p>
            </div>

            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-forest-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">Family-Owned</h3>
              <p className="text-charcoal-400 text-sm">Personal attention from owner Mark Biernacki</p>
            </div>

            <div className="bg-charcoal-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-copper-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="text-copper-400" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-cream-100 mb-2">5-Star Rated</h3>
              <p className="text-charcoal-400 text-sm">Consistently excellent reviews from satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Quick Links */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2
              className="text-3xl text-charcoal-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Serving Greater Vancouver
            </h2>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              We proudly serve all areas of Metro Vancouver and the Fraser Valley.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey',
              'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission'
            ].map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 bg-white rounded-full border border-cream-200 text-charcoal-700 hover:bg-forest-50 hover:border-forest-200 hover:text-forest-700 transition-all text-sm font-medium"
              >
                {city}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
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
