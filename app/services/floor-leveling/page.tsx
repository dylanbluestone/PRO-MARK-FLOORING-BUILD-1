import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Shield, CheckCircle, ArrowRight, Phone, Clock, Award, Star, Users, ChevronDown } from 'lucide-react'
import { ServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Professional Floor Leveling Services Vancouver | 5-Year Warranty | PROMARK',
  description: 'Expert floor leveling for residential and commercial properties in Vancouver, BC. Self-leveling compounds, concrete grinding, subfloor correction. Industry-leading 5-year warranty. Free quotes.',
  keywords: ['floor leveling vancouver', 'self leveling vancouver', 'concrete leveling bc', 'subfloor leveling', 'floor preparation vancouver', 'uneven floor repair'],
}

const serviceAreas = ['Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey', 'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission']

const processSteps = [
  {
    num: 1,
    title: 'Initial Assessment & Consultation',
    desc: 'We begin with a thorough on-site inspection using precision laser levels and moisture meters. You\'ll receive a detailed explanation of our findings, recommended solutions, and a transparent written quote.'
  },
  {
    num: 2,
    title: 'Surface Preparation',
    desc: 'Proper preparation is critical. We clean and prepare the subfloor, grind down high spots, repair cracks, and install moisture barriers when required.'
  },
  {
    num: 3,
    title: 'Primer Application',
    desc: 'We apply a professional bonding primer to ensure the self-leveling compound adheres properly and performs as designed.'
  },
  {
    num: 4,
    title: 'Leveling Compound Application',
    desc: 'Using premium self-leveling compounds mixed to exact specifications, we pour and spread the material to create a perfectly flat surface.'
  },
  {
    num: 5,
    title: 'Curing & Quality Control',
    desc: 'The compound cures within 24-48 hours. We perform final laser level measurements to verify the floor meets our strict flatness standards.'
  },
  {
    num: 6,
    title: 'Final Inspection & Handoff',
    desc: 'We conduct a comprehensive inspection with you, provide warranty documentation, and prepare your floor for the next installation phase.'
  }
]

const faqs = [
  {
    q: 'How do I know if my floor needs leveling?',
    a: 'Signs include visible slopes or dips, balls rolling across the floor, gaps under furniture, cracked tiles, squeaky hardwood, doors that won\'t close properly, and visible cracks in the subfloor.'
  },
  {
    q: 'How long does the floor leveling process take?',
    a: 'Most residential projects take 1-3 days. The actual pour takes just a few hours, but proper preparation and curing time are essential. The compound typically cures within 24-48 hours.'
  },
  {
    q: 'Can you level floors in occupied homes or businesses?',
    a: 'Yes. While the work area must be cleared during the pour and initial curing, we can work in phases to minimize disruption. For businesses, we often schedule work during off-hours.'
  },
  {
    q: 'What types of subfloors can be leveled?',
    a: 'We level concrete slabs, wood subfloors, existing tile floors, and various other substrates. Each material requires different preparation and leveling techniques.'
  },
  {
    q: 'Will floor leveling raise the floor height significantly?',
    a: 'The height increase depends on how much leveling is needed. For minor corrections, we may add only 1/8" to 1/4". More significant unevenness may require 1/2" to 1" or more.'
  },
  {
    q: 'Do you handle moisture issues before leveling?',
    a: 'Absolutely. Moisture testing is critical. If we detect moisture issues, we\'ll identify the source and recommend solutions before leveling. This is covered by our warranty.'
  }
]

export default function FloorLevelingPage() {
  const schema = ServiceSchema(
    'Floor Leveling',
    'Professional floor leveling services with 5-year warranty for residential and commercial properties in Greater Vancouver',
    serviceAreas
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-charcoal-900 py-20 md:py-28 overflow-hidden">
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

          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 rounded-full px-4 py-2 mb-6">
                <Shield size={16} className="text-forest-400" />
                <span className="text-forest-300 text-sm font-medium">Industry-Leading 5-Year Warranty</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Professional Floor Leveling
                <span className="text-copper-400 block mt-2">in Vancouver</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mb-8">
                Transform uneven, damaged floors into perfectly level surfaces. Over 20 years of expertise
                serving Greater Vancouver and the Fraser Valley.
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
                <Users className="text-forest-400" size={18} />
                <span className="text-sm font-medium">Family-Owned & Local</span>
              </div>
              <div className="flex items-center gap-2 text-cream-200">
                <Star className="text-copper-400" size={18} />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                What is Floor Leveling?
              </h2>
              <div className="prose prose-lg text-charcoal-700">
                <p>
                  Floor leveling is the critical process of correcting uneven, sloped, or damaged subfloors
                  to create a perfectly flat surface for your finished flooring. Whether you're installing
                  hardwood, tile, laminate, or any other flooring material, a level subfloor is essential
                  for proper installation, longevity, and performance.
                </p>
                <p>
                  Uneven floors aren't just an aesthetic issue—they cause serious problems. Tiles crack,
                  hardwood buckles and squeaks, vinyl develops wrinkles, and doors refuse to close properly.
                  Foundation settlement, water damage, age-related deterioration, and poor original
                  construction all contribute to floor irregularities that worsen over time.
                </p>
                <p>
                  At PROMARK FLOORING, we've spent over 20 years perfecting the art and science of floor
                  leveling. Using state-of-the-art self-leveling compounds, precision concrete grinding,
                  and expert subfloor repair techniques, we correct everything from minor dips to severe
                  slopes. Our work creates the solid, level foundation your new flooring needs to look
                  beautiful and last for decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose PROMARK */}
        <section className="py-16 md:py-20 bg-charcoal-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-cream-50 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Choose PROMARK for Floor Leveling?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-charcoal-800 rounded-2xl p-8">
                <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-forest-400" size={28} />
                </div>
                <h3
                  className="text-xl text-cream-100 mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Industry-Leading 5-Year Warranty
                </h3>
                <p className="text-charcoal-400">
                  We stand behind our floor leveling work with an exceptional 5-year warranty—one of the
                  best in the industry. This comprehensive warranty covers both workmanship and materials,
                  giving you complete peace of mind.
                </p>
              </div>

              <div className="bg-charcoal-800 rounded-2xl p-8">
                <div className="w-14 h-14 bg-copper-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-copper-400" size={28} />
                </div>
                <h3
                  className="text-xl text-cream-100 mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  20+ Years of Expertise
                </h3>
                <p className="text-charcoal-400">
                  We've leveled thousands of floors across Greater Vancouver. Our extensive experience
                  means we've encountered every type of floor problem—from simple dips to complex
                  foundation issues.
                </p>
              </div>

              <div className="bg-charcoal-800 rounded-2xl p-8">
                <div className="w-14 h-14 bg-forest-600/20 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-forest-400" size={28} />
                </div>
                <h3
                  className="text-xl text-cream-100 mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Premium Materials & Techniques
                </h3>
                <p className="text-charcoal-400">
                  We use only professional-grade self-leveling compounds, moisture barriers, and
                  reinforcement materials from trusted manufacturers. Our technicians are trained
                  in advanced leveling techniques.
                </p>
              </div>

              <div className="bg-charcoal-800 rounded-2xl p-8">
                <div className="w-14 h-14 bg-copper-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="text-copper-400" size={28} />
                </div>
                <h3
                  className="text-xl text-cream-100 mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Efficient & Professional Process
                </h3>
                <p className="text-charcoal-400">
                  We respect your time and property. Most residential floor leveling projects are
                  completed in 1-3 days. We protect your home, work cleanly, and communicate clearly
                  throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our Floor Leveling Process
              </h2>
              <p className="text-charcoal-600 max-w-2xl mx-auto">
                A proven, methodical approach that ensures lasting results every time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-6 bg-white rounded-2xl p-6 border border-cream-200 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-700 text-white rounded-xl flex items-center justify-center font-bold text-xl">
                    {step.num}
                  </div>
                  <div>
                    <h3
                      className="text-xl text-charcoal-900 mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-charcoal-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Benefits of Professional Floor Leveling
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Prevents Flooring Failure', desc: 'Level subfloors prevent cracked tiles, squeaky hardwood, wrinkled vinyl, and premature flooring wear.' },
                { title: 'Increases Property Value', desc: 'Level floors are a key selling point. Addressing floor issues now prevents deal-breakers during home inspections.' },
                { title: 'Improves Safety', desc: 'Uneven floors create trip hazards. Level floors improve accessibility and reduce injury risk.' },
                { title: 'Enhances Aesthetics', desc: 'Flooring looks better on level surfaces. Tile patterns align properly, hardwood planks lay flat.' },
                { title: 'Long-Term Cost Savings', desc: 'Investing in proper leveling now saves thousands in future repairs and flooring replacement.' },
                { title: 'Enables Quality Installation', desc: 'Professional flooring installers require level surfaces to do their best work.' }
              ].map((benefit) => (
                <div key={benefit.title} className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-forest-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2">{benefit.title}</h3>
                  <p className="text-charcoal-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-cream-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Common Questions About Floor Leveling
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-cream-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <span className="font-semibold text-charcoal-900 pr-4">{faq.q}</span>
                    <ChevronDown size={20} className="text-charcoal-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-charcoal-600">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Floor Leveling Across Greater Vancouver
              </h2>
              <p className="text-charcoal-600 max-w-2xl mx-auto">
                We provide professional floor leveling services throughout the Lower Mainland
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((city) => (
                <Link
                  key={city}
                  href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 bg-cream-50 rounded-full border border-cream-200 text-charcoal-700 hover:bg-forest-50 hover:border-forest-200 hover:text-forest-700 transition-all text-sm font-medium"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-700 to-forest-800" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
            }}
          />

          <div className="container-custom relative z-10 text-center">
            <h2
              className="text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Level Your Floors?
            </h2>
            <p className="text-xl text-forest-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote with our industry-leading 5-year warranty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white btn-lg">
                Request Free Quote
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+16043536077" className="btn-ghost btn-lg">
                <Phone size={18} />
                Call (604) 353-6077
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-cream-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Related Services
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/services/hardwood-installation"
                className="group bg-white rounded-2xl p-6 border border-cream-200 hover:border-forest-200 hover:shadow-lg transition-all"
              >
                <h3
                  className="text-lg text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Hardwood Installation
                </h3>
                <p className="text-charcoal-600 text-sm mb-4">
                  Professional hardwood flooring installation on your newly leveled floors
                </p>
                <span className="inline-flex items-center gap-1 text-forest-600 font-medium text-sm">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/services/repair-maintenance"
                className="group bg-white rounded-2xl p-6 border border-cream-200 hover:border-forest-200 hover:shadow-lg transition-all"
              >
                <h3
                  className="text-lg text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Floor Repair
                </h3>
                <p className="text-charcoal-600 text-sm mb-4">
                  Subfloor repairs and structural corrections
                </p>
                <span className="inline-flex items-center gap-1 text-forest-600 font-medium text-sm">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/industries/commercial"
                className="group bg-white rounded-2xl p-6 border border-cream-200 hover:border-forest-200 hover:shadow-lg transition-all"
              >
                <h3
                  className="text-lg text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Commercial Leveling
                </h3>
                <p className="text-charcoal-600 text-sm mb-4">
                  Large-scale floor leveling for commercial properties
                </p>
                <span className="inline-flex items-center gap-1 text-forest-600 font-medium text-sm">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
