import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Shield, CheckCircle, ArrowRight, Phone, ChevronDown } from 'lucide-react'
import { ServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Hardwood Flooring Installation Vancouver | Expert Craftsmen | PROMARK',
  description: 'Professional hardwood flooring installation in Greater Vancouver. Solid hardwood, engineered hardwood, laminate. Expert installation with 1-year warranty. Free consultation.',
  keywords: ['hardwood flooring installation vancouver', 'hardwood floors bc', 'engineered hardwood installation', 'solid wood flooring', 'laminate flooring vancouver'],
}

const serviceAreas = ['Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey', 'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission']

const hardwoodOptions = [
  {
    title: 'Solid Hardwood',
    desc: 'Traditional solid hardwood is milled from a single piece of wood, typically 3/4" thick. It can be sanded and refinished multiple times, making it an heirloom-quality investment.',
    features: ['Can be refinished 5-7 times', 'Timeless, authentic appearance', 'Increases property value significantly']
  },
  {
    title: 'Engineered Hardwood',
    desc: 'Engineered hardwood features a real hardwood veneer bonded to layers of plywood. This construction provides dimensional stability, making it suitable for installation over concrete and radiant heat.',
    features: ['Can be installed on any level', 'More stable in humidity changes', 'Can still be refinished 1-3 times']
  },
  {
    title: 'Premium Laminate',
    desc: 'High-quality laminate flooring features a photographic layer that convincingly replicates hardwood. Modern laminates are incredibly durable, scratch-resistant, and affordable.',
    features: ['Highly scratch and dent resistant', 'Easy maintenance and cleaning', 'Budget-friendly option']
  }
]

const processSteps = [
  { num: 1, title: 'Consultation & Material Selection', desc: 'We meet with you to understand your vision, assess your space, and recommend hardwood options that match your style, budget, and functional requirements.' },
  { num: 2, title: 'Subfloor Preparation', desc: 'Proper subfloor preparation is critical for lasting results. We level the subfloor, repair any damage, and install moisture barriers when needed.' },
  { num: 3, title: 'Material Acclimation', desc: 'Hardwood must acclimate to your home\'s temperature and humidity before installation. We deliver materials and allow them to adjust for 3-7 days.' },
  { num: 4, title: 'Professional Installation', desc: 'Our experienced craftsmen install your hardwood using the appropriate method for your material and subfloor, ensuring proper spacing and secure attachment.' },
  { num: 5, title: 'Finishing Touches', desc: 'We install transitions, baseboards, and trim to complete the professional look. For unfinished hardwood, we sand, stain, and apply protective finishes.' },
  { num: 6, title: 'Final Inspection & Care Instructions', desc: 'We walk through the completed installation with you, ensuring your complete satisfaction. You\'ll receive detailed care and maintenance instructions.' }
]

const faqs = [
  { q: 'How long does hardwood installation take?', a: 'Most residential hardwood installations take 2-5 days depending on room size, complexity, and whether finishing is required. We\'ll provide a specific timeline during consultation.' },
  { q: 'Can hardwood be installed in kitchens and bathrooms?', a: 'While possible, we generally recommend engineered hardwood for high-moisture areas due to its superior moisture resistance. We\'ll assess your specific situation and recommend the best option.' },
  { q: 'What\'s the difference between site-finished and pre-finished hardwood?', a: 'Pre-finished arrives with factory-applied finish, allowing immediate use. Site-finished is installed raw, then sanded and finished on-site, offering more customization.' },
  { q: 'How do I choose the right hardwood species?', a: 'Consider durability (Janka hardness rating), appearance, and budget. Oak and maple are popular all-purpose choices. We\'ll guide you based on your traffic levels and style preferences.' },
  { q: 'What\'s included in your 1-year installation warranty?', a: 'Our warranty covers installation workmanship including proper material acclimation, subfloor preparation, and fastening. Material defects are covered by manufacturer warranties.' }
]

export default function HardwoodInstallationPage() {
  const schema = ServiceSchema(
    'Hardwood Flooring Installation',
    'Expert hardwood flooring installation with 1-year warranty for residential and commercial properties',
    serviceAreas
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* Compact Hero Section */}
        <section className="bg-forest-700 py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1
                  className="text-2xl md:text-3xl text-white font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Hardwood Flooring Installation
                </h1>
                <p className="text-forest-200 mt-1">
                  1-year warranty • Serving Greater Vancouver
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/quote" className="btn-white">
                  Get Free Quote
                </Link>
                <a href="tel:+16043536077" className="btn-ghost">
                  <Phone size={16} />
                  (604) 353-6077
                </a>
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
                Expert Hardwood Flooring Installation
              </h2>
              <div className="prose prose-lg text-charcoal-700">
                <p>
                  Hardwood flooring brings unmatched beauty, warmth, and value to any property.
                  At PROMARK FLOORING, we've spent over 20 years perfecting the art of hardwood
                  installation. Whether you're drawn to the classic elegance of solid oak, the
                  versatility of engineered hardwood, or the affordability of premium laminate,
                  we deliver flawless installation that enhances your space and lasts for generations.
                </p>
                <p>
                  Our expertise covers every aspect of hardwood installation: proper subfloor
                  preparation, material acclimation, precision cutting and fitting, professional
                  finishing, and meticulous quality control. We work with all hardwood species
                  and installation methods to create the exact look you envision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-11.jpg"
                  alt="Professional hardwood flooring installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-10.jpg"
                  alt="Expert hardwood installation craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hardwood Options */}
        <section className="py-16 md:py-20 bg-charcoal-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-cream-50 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Hardwood Flooring Options
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {hardwoodOptions.map((option) => (
                <div key={option.title} className="bg-charcoal-800 rounded-2xl p-6">
                  <h3
                    className="text-xl text-cream-100 mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {option.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm mb-4">{option.desc}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-charcoal-300">
                        <CheckCircle className="text-copper-400 flex-shrink-0 mt-0.5" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our Installation Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-6 bg-white rounded-2xl p-6 border border-cream-200 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-copper-500 to-copper-600 text-white rounded-xl flex items-center justify-center font-bold text-xl">
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
                Benefits of Professional Hardwood Installation
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Timeless Beauty', desc: 'Hardwood never goes out of style. Its natural warmth and character enhance any décor.' },
                { title: 'Increases Home Value', desc: 'Hardwood flooring is one of the best investments, often returning 70-80% at resale.' },
                { title: 'Durability & Longevity', desc: 'Properly installed hardwood can last 50-100+ years, outlasting other flooring many times.' },
                { title: 'Easy Maintenance', desc: 'Hardwood is simple to clean and doesn\'t trap dust, allergens, or odors like carpet.' },
                { title: 'Improved Air Quality', desc: 'Unlike carpet, hardwood doesn\'t harbor dust mites or allergens, ideal for allergy sufferers.' },
                { title: 'Versatile Design Options', desc: 'Countless species, stains, finishes, and plank sizes let you create your perfect look.' }
              ].map((benefit) => (
                <div key={benefit.title} className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                  <div className="w-10 h-10 bg-copper-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-copper-600" size={20} />
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
                Hardwood Installation FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-cream-200 overflow-hidden">
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
                className="text-3xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Serving All of Greater Vancouver
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((city) => (
                <Link
                  key={city}
                  href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 bg-cream-50 rounded-full border border-cream-200 text-charcoal-700 hover:bg-copper-50 hover:border-copper-200 hover:text-copper-700 transition-all text-sm font-medium"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
