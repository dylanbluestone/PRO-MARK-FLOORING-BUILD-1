import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, Home, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Flooring Services Vancouver | Homes & Condos | PROMARK',
  description: 'Professional residential flooring services in Vancouver. Floor leveling, hardwood installation, stairs for homes, condos, and townhouses. Family-owned and trusted.',
  keywords: ['residential flooring vancouver', 'home floor leveling', 'condo flooring bc', 'house hardwood installation'],
}

const residentialServices = [
  {
    title: "Floor Leveling for Homes",
    desc: "Correct uneven floors throughout your home before installing new flooring. Our floor leveling service includes subfloor inspection, moisture testing, surface preparation, self-leveling compound application, and quality verification. Perfect for renovation projects, pre-sale prep, or new flooring installation. Industry-leading 5-year warranty.",
    features: ["Basement floor leveling", "Main floor corrections", "Pre-flooring preparation", "Foundation issue mitigation"],
    href: "/services/floor-leveling"
  },
  {
    title: "Hardwood Flooring Installation",
    desc: "Install beautiful hardwood floors that enhance your home's warmth, character, and value. We work with solid hardwood, engineered hardwood, and premium laminate. Our installation process includes subfloor preparation, material selection guidance, professional installation, and finishing.",
    features: ["Living rooms & bedrooms", "Hallways & entryways", "Dining rooms", "Whole-home installations"],
    href: "/services/hardwood-installation"
  },
  {
    title: "Staircase Installation & Refinishing",
    desc: "Your staircase makes a powerful first impression. We install new hardwood stairs, refinish existing staircases, replace damaged treads and risers, and update outdated designs. Custom details available including contrasting wood species and decorative inlays.",
    features: ["New stair installation", "Refinishing services", "Tread replacement", "Custom designs"],
    href: "/services/stairs"
  },
  {
    title: "Floor Repair & Restoration",
    desc: "Extend the life of your existing floors with expert repair services. We fix scratches, gouges, water damage, squeaks, and structural issues. Hardwood refinishing removes years of wear to restore original beauty.",
    features: ["Hardwood refinishing", "Water damage repair", "Scratch & gouge repair", "Board replacement"],
    href: "/services/repair-maintenance"
  }
]

const whyChooseUs = [
  { title: "Family-Owned & Operated", desc: "Work directly with Mark, the owner. Personal service, direct communication, and accountability you can trust." },
  { title: "Respect for Your Home", desc: "We protect your furniture, clean daily, and work efficiently to minimize disruption to your family's routine." },
  { title: "Transparent Pricing", desc: "Detailed written quotes with no hidden fees. You'll know exactly what to expect before we begin." },
  { title: "Quality Materials", desc: "We source premium materials and never cut corners. Your home deserves the best." },
  { title: "Flexible Scheduling", desc: "We work around your schedule, including evenings and weekends when needed." },
  { title: "Satisfaction Guaranteed", desc: "We're not finished until you're completely satisfied with the results." }
]

const projectTypes = [
  { title: "Whole Home Renovations", desc: "Complete flooring updates throughout your entire home. Coordinated project management for seamless results." },
  { title: "Room-by-Room Updates", desc: "Update individual rooms as needed. Living rooms, bedrooms, hallways, dining rooms, or any combination." },
  { title: "Pre-Sale Preparations", desc: "Improve your home's appeal and value before listing. New floors make powerful first impressions on buyers." },
  { title: "Heritage Home Restorations", desc: "Sensitive work on character homes. We preserve original features while updating floors to modern standards." },
  { title: "Condo & Townhome Projects", desc: "Familiar with strata requirements, acoustic standards, and work hour restrictions for multi-family properties." },
  { title: "Basement Finishing", desc: "Level concrete floors and install beautiful hardwood or laminate to create functional living spaces." }
]

const faqs = [
  { q: "How long will my home flooring project take?", a: "Most residential projects take 3-7 days depending on scope. Floor leveling typically takes 1-3 days, hardwood installation 2-5 days. We'll provide a specific timeline during your free consultation and work efficiently to minimize disruption." },
  { q: "Do we need to move out during the work?", a: "Not usually. While the work area must be cleared, most families stay in their homes during flooring projects. We can work room-by-room if needed and always clean up daily." },
  { q: "Will you protect our furniture and belongings?", a: "Absolutely. We move and protect furniture, cover belongings, seal doorways to prevent dust migration, and clean thoroughly each day." },
  { q: "Can you work around our schedule?", a: "Yes. We offer flexible scheduling including evening and weekend work when needed. We understand families' busy schedules." },
  { q: "What if we're not sure what we want?", a: "That's what our free consultation is for! We'll show you samples, discuss options, and provide expert recommendations based on your style, budget, and how you use your space." }
]

export default function ResidentialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-forest-700 py-12 md:py-16">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-forest-600 rounded-2xl flex items-center justify-center">
              <Home className="text-white" size={32} />
            </div>
            <div>
              <h1
                className="text-2xl md:text-3xl text-white font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Residential Flooring Services
              </h1>
              <p className="text-forest-200 mt-1">
                Transform your home with expert flooring
              </p>
            </div>
          </div>
          <p className="text-lg text-forest-100 mb-8 max-w-3xl">
            Transform your home with professional floor leveling and hardwood installation. Family-owned, locally trusted, 20+ years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-white">
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+16043536077" className="btn-ghost">
              <Phone size={18} />
              (604) 353-6077
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom max-w-4xl">
          <h2
            className="text-3xl md:text-4xl text-charcoal-900 mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Flooring Services for Your Home
          </h2>
          <div className="space-y-4 text-charcoal-700 leading-relaxed">
            <p>
              Your home is your most important investment. At PROMARK FLOORING, we treat every residential project with the care and attention it deserves. Whether you're renovating a single room or updating your entire home, we deliver exceptional results that enhance your living space and add lasting value to your property.
            </p>
            <p>
              We serve all residential property types across Greater Vancouver and Fraser Valley: single-family homes, condos, townhomes, duplexes, and heritage properties. From modern new builds to character homes built a century ago, we have the expertise to handle any residential flooring challenge.
            </p>
            <p>
              As a family-owned business, we understand the importance of your home. You'll work directly with Mark, our owner, ensuring personalized service, clear communication, and quality workmanship from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="container-custom">
          <h2
            className="text-3xl md:text-4xl text-cream-50 mb-10 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Residential Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {residentialServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-charcoal-800 rounded-2xl p-8 hover:bg-charcoal-700 transition-colors"
              >
                <h3
                  className="text-xl text-cream-100 mb-4 group-hover:text-copper-400 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.title}
                </h3>
                <p className="text-charcoal-400 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="text-forest-400 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-charcoal-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <h2
            className="text-3xl md:text-4xl text-charcoal-900 mb-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Homeowners Choose PROMARK
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((point) => (
              <div key={point.title} className="flex gap-4 bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <div className="flex-shrink-0 w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-forest-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-2">{point.title}</h3>
                  <p className="text-charcoal-600 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <h2
            className="text-3xl md:text-4xl text-charcoal-900 mb-10 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Residential Project Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projectTypes.map((type) => (
              <div key={type.title} className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200">
                <h3
                  className="font-bold text-charcoal-900 mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {type.title}
                </h3>
                <p className="text-charcoal-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2
            className="text-3xl md:text-4xl text-charcoal-900 mb-10 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Homeowner FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-cream-50 rounded-xl border border-cream-200 overflow-hidden"
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
    </main>
  )
}
