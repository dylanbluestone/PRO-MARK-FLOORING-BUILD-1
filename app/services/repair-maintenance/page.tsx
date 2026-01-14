import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, Phone, ChevronDown, ArrowRight, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Repair & Maintenance Vancouver | Professional Service | PROMARK',
  description: 'Expert floor repair and maintenance services in Vancouver. Hardwood refinishing, damage repair, surface restoration. Quality workmanship guaranteed. Free quotes.',
  keywords: ['floor repair vancouver', 'hardwood repair bc', 'floor maintenance vancouver', 'floor refinishing', 'damage repair flooring'],
}

const services = [
  { title: 'Hardwood Refinishing', desc: 'Complete sanding and refinishing to remove scratches, wear, and discoloration. Choose new stain colors or restore original beauty.' },
  { title: 'Scratch & Gouge Repair', desc: 'Fill and blend scratches, dents, and gouges using professional techniques. Color-matched repairs that disappear into your floor.' },
  { title: 'Water Damage Restoration', desc: 'Remove and replace water-damaged boards, address subfloor moisture, prevent mold growth, and restore affected areas.' },
  { title: 'Board Replacement', desc: 'Replace individual damaged, stained, or warped boards while matching existing wood species, finish, and color.' },
  { title: 'Subfloor Repair', desc: 'Fix squeaks, reinforce weak areas, replace damaged subfloor sections, and correct structural issues before they worsen.' },
  { title: 'Finish Refresh', desc: 'Apply new protective finish coats to worn areas without full sanding. Quick refresh that extends floor life and restores shine.' },
  { title: 'Gap Filling', desc: 'Fill gaps between boards caused by seasonal shrinkage or improper installation using color-matched wood fillers.' },
  { title: 'Pet Damage Repair', desc: 'Address scratches, urine stains, and odors from pets. Remove affected boards and neutralize subfloor odors.' },
  { title: 'Transition Repairs', desc: 'Fix loose, damaged, or missing transition strips between rooms and flooring types for a seamless, professional look.' }
]

const benefits = [
  { title: 'Significant Cost Savings', desc: 'Repairs typically cost 20-40% of replacement costs. Why replace entire floors when targeted repairs restore functionality?' },
  { title: 'Faster Completion', desc: 'Most repairs are completed in 1-3 days versus weeks for full replacement. Less disruption to your home or business.' },
  { title: 'Preserve Original Floors', desc: 'Keep the character and quality of original hardwood, especially in older homes with irreplaceable craftsmanship.' },
  { title: 'Environmentally Friendly', desc: 'Repairing extends floor life, reducing waste and avoiding the environmental impact of new materials.' },
  { title: 'Maintain Home Value', desc: 'Well-maintained original floors often add more value than new floors, especially in character homes.' },
  { title: 'Immediate Results', desc: 'See dramatic improvements without the hassle of furniture removal, installation mess, or material wait times.' }
]

const faqs = [
  { q: 'How often should hardwood floors be refinished?', a: 'Typically every 7-10 years for residential floors, though this varies based on traffic, wear, and maintenance. We\'ll assess your floors and recommend timing.' },
  { q: 'Can all scratches and damage be repaired?', a: 'Most scratches, dents, and surface damage can be repaired successfully. Deep gouges, severe water damage, or structural issues may require board replacement.' },
  { q: 'Will repaired areas match the existing floor?', a: 'Our experienced craftsmen are skilled at color-matching and blending repairs. While perfect invisibility isn\'t always possible, our repairs are typically unnoticeable.' },
  { q: 'How long do repairs last?', a: 'When done professionally, repairs should last as long as the surrounding floor. We use quality materials and proven techniques for long-lasting results.' }
]

export default function RepairMaintenancePage() {
  return (
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
                Floor Repair & Maintenance
              </h1>
              <p className="text-forest-200 mt-1">
                Expert restoration • Serving Greater Vancouver
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
              Professional Floor Repair & Maintenance
            </h2>
            <div className="prose prose-lg text-charcoal-700">
              <p>
                Even the best floors eventually need repair or maintenance. At PROMARK FLOORING,
                we extend the life of your existing floors through expert repair, refinishing,
                and maintenance services. With over 20 years of experience, we fix damage,
                restore beauty, and prevent costly replacements.
              </p>
              <p>
                From minor scratches to major water damage, worn finishes to structural subfloor
                issues, we have the expertise and tools to restore your floors to their original
                condition—or even better. Our repair work often costs a fraction of replacement
                while delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Repair & Maintenance Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="bg-charcoal-800 rounded-2xl p-6">
                <div className="w-10 h-10 bg-copper-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="text-copper-400" size={20} />
                </div>
                <h3
                  className="text-lg text-cream-100 mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.title}
                </h3>
                <p className="text-charcoal-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Benefits of Professional Repair vs. Replacement
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 bg-white rounded-2xl p-6 border border-cream-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-forest-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">{benefit.title}</h3>
                    <p className="text-charcoal-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
              Floor Maintenance FAQs
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

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-copper-600 to-copper-700" />
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
            Need Floor Repair or Maintenance?
          </h2>
          <p className="text-xl text-copper-100 mb-8 max-w-2xl mx-auto">
            Get a free assessment and quote to restore your floors
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
    </main>
  )
}
