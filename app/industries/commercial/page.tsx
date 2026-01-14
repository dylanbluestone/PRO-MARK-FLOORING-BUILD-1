import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, Building2, CheckCircle, ArrowRight, ChevronDown, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Flooring Services Vancouver | Businesses & Properties | PROMARK',
  description: 'Commercial floor leveling and installation services in Vancouver. Offices, retail spaces, warehouses, and commercial properties. Minimal downtime, quality results.',
  keywords: ['commercial flooring vancouver', 'business floor leveling', 'warehouse flooring bc', 'retail floor installation'],
}

const commercialServices = [
  {
    title: "Commercial Floor Leveling",
    desc: "Level concrete slabs and subfloors in commercial spaces. Essential for new tenant improvements, renovation projects, and pre-flooring preparation. We work efficiently to minimize business disruption, including after-hours and weekend scheduling.",
    features: ["Warehouse floor leveling", "Office space preparation", "Retail tenant improvements", "Loading dock repairs"],
    href: "/services/floor-leveling"
  },
  {
    title: "Commercial Hardwood Installation",
    desc: "Professional hardwood and luxury vinyl plank installation for commercial applications. Ideal for offices, retail spaces, showrooms, and hospitality venues. We select durable materials suited for commercial traffic levels.",
    features: ["Office reception areas", "Retail showrooms", "Restaurant dining rooms", "Hotel lobbies"],
    href: "/services/hardwood-installation"
  },
  {
    title: "Subfloor Preparation & Repair",
    desc: "Comprehensive subfloor services for commercial properties. We repair structural issues, correct moisture problems, reinforce weak areas, and prepare surfaces for any commercial flooring material.",
    features: ["Structural repairs", "Moisture mitigation", "Crack repair", "Surface grinding"],
    href: "/services/floor-leveling"
  },
  {
    title: "Maintenance & Repairs",
    desc: "Keep your commercial floors looking professional with ongoing maintenance and repair services. Address high-traffic wear, damage, and deterioration before minor issues become major problems.",
    features: ["Damage repair", "Refinishing services", "Traffic pattern restoration", "Preventive maintenance"],
    href: "/services/repair-maintenance"
  }
]

const whyChooseUs = [
  { icon: Clock, title: "Minimal Downtime", desc: "We work efficiently and offer after-hours/weekend scheduling to minimize disruption to your business operations." },
  { icon: CheckCircle, title: "Project Management", desc: "Clear communication, detailed scheduling, and professional coordination. We work seamlessly with property managers and GCs." },
  { icon: Shield, title: "Code Compliance", desc: "All work meets BC building codes, WorkSafeBC requirements, and ADA/accessibility standards where applicable." },
  { icon: CheckCircle, title: "Commercial-Grade Materials", desc: "We select flooring materials rated for commercial traffic levels and designed for long-term durability." },
  { icon: Shield, title: "Insured & Bonded", desc: "Full commercial liability insurance and WorkSafeBC coverage. Certificate of insurance provided upon request." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Work around your business hours. Evening, overnight, and weekend scheduling available." }
]

const propertyTypes = [
  "Office Buildings", "Retail Stores & Showrooms", "Warehouses & Distribution Centers",
  "Restaurants & Cafes", "Hotels & Hospitality", "Medical & Dental Offices",
  "Fitness Centers & Gyms", "Educational Facilities", "Property Management Portfolios",
  "Tenant Improvements", "New Construction", "Renovation Projects"
]

const faqs = [
  { q: "Can you work after hours or weekends?", a: "Yes. We regularly schedule commercial work during evenings, overnight, and weekends to avoid disrupting your business operations. We understand that minimizing downtime is critical." },
  { q: "Do you provide insurance certificates?", a: "Absolutely. We carry full commercial liability insurance and WorkSafeBC coverage. We'll provide a certificate of insurance naming your property or business as additionally insured upon request." },
  { q: "How quickly can you complete commercial projects?", a: "Project timelines vary based on scope and square footage. We work efficiently and can often complete commercial floor leveling in 2-5 days. We'll provide detailed scheduling during the quoting process." },
  { q: "Can you work with our general contractor or property manager?", a: "Yes. We regularly collaborate with GCs, property managers, architects, and other trades. We're experienced in coordinated project environments." },
  { q: "Do you offer maintenance contracts?", a: "Yes. For property management companies or businesses with multiple locations, we can establish ongoing maintenance agreements. Contact us to discuss your specific needs." }
]

export default function CommercialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-charcoal-900 py-12 md:py-16">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-copper-500 rounded-2xl flex items-center justify-center">
              <Building2 className="text-white" size={32} />
            </div>
            <div>
              <h1
                className="text-2xl md:text-3xl text-white font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Commercial Flooring Services
              </h1>
              <p className="text-charcoal-400 mt-1">
                Minimal downtime, maximum quality
              </p>
            </div>
          </div>
          <p className="text-lg text-charcoal-300 mb-8 max-w-3xl">
            Professional floor leveling and installation for businesses, warehouses, offices, and commercial properties. Minimal downtime, maximum quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-accent">
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
            Commercial Flooring Expertise
          </h2>
          <div className="space-y-4 text-charcoal-700 leading-relaxed">
            <p>
              Commercial properties demand flooring solutions that withstand heavy traffic, meet safety standards, and maintain professional appearance. At PROMARK FLOORING, we've delivered commercial flooring projects for over 20 years across Greater Vancouver, serving businesses, property managers, contractors, and commercial developers.
            </p>
            <p>
              We understand commercial realities: tight timelines, budget constraints, minimal disruption requirements, and the need for durable, long-lasting results. Our commercial services combine efficient project management, quality workmanship, and flexible scheduling to meet your business needs.
            </p>
            <p>
              From small retail spaces to large warehouses, office buildings to restaurants, we handle commercial projects of all sizes with the same dedication to excellence.
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
            Commercial Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commercialServices.map((service) => (
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
                      <CheckCircle className="text-copper-400 flex-shrink-0 mt-0.5" size={16} />
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
            Why Commercial Clients Choose PROMARK
          </h2>
          <div className="space-y-6">
            {whyChooseUs.map((point) => (
              <div key={point.title} className="flex gap-4 bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <div className="flex-shrink-0 w-12 h-12 bg-copper-100 rounded-xl flex items-center justify-center">
                  <point.icon className="text-copper-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900 mb-2 text-lg">{point.title}</h3>
                  <p className="text-charcoal-600">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <h2
            className="text-3xl md:text-4xl text-charcoal-900 mb-10 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Commercial Property Types We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propertyTypes.map((type) => (
              <div key={type} className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 text-center">
                <Building2 className="text-copper-500 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-charcoal-900">{type}</h3>
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
            Commercial Client FAQs
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
