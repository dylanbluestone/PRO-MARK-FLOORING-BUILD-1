import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, ArrowRight, Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Staircase Installation & Renovation Vancouver | PROMARK FLOORING',
  description: 'Professional staircase installation, repair, and renovation services in Vancouver, BC. Transform your stairs with expert craftsmanship. 20+ years experience. Free quotes.',
  keywords: ['stair installation vancouver', 'staircase renovation bc', 'hardwood stairs', 'stair repair vancouver', 'staircase refinishing'],
}

const services = [
  { title: 'New Staircase Installation', desc: 'Complete staircase installation using premium hardwood species. We build custom stairs including treads, risers, stringers, handrails, balusters, and newel posts.' },
  { title: 'Staircase Refinishing', desc: 'Restore the beauty of existing hardwood stairs through professional sanding, staining, and finishing. Choose from a range of stain colors and protective finishes.' },
  { title: 'Tread & Riser Replacement', desc: 'Replace damaged, worn, or squeaky treads and risers with new hardwood. Perfect for updating older staircases or repairing specific problem areas.' },
  { title: 'Staircase Renovation', desc: 'Complete staircase transformations including style updates and material upgrades. Convert carpeted stairs to hardwood or completely redesign your staircase.' },
  { title: 'Stair Repair', desc: 'Fix squeaks, secure loose treads, repair cracks, replace damaged nosing, and address structural issues. Our repairs restore safety and eliminate annoying sounds.' },
  { title: 'Custom Details', desc: 'Add custom touches like decorative inlays, contrasting wood species, custom handrails, ornamental balusters, or unique finishes.' }
]

const whyProfessional = [
  { title: 'Safety First', desc: 'Stairs must be structurally sound and meet building codes. Professional installation ensures proper tread depth, riser height, and secure attachment.' },
  { title: 'Precision Required', desc: 'Staircase work demands exact measurements and angles. Even minor errors create safety hazards and visual problems.' },
  { title: 'Complex Geometry', desc: 'Stairs involve complex calculations and cuts, especially for winding or curved designs. We have the expertise and specialized tools to handle any configuration.' },
  { title: 'Lasting Impression', desc: 'Your staircase is one of the first things visitors see. Professional craftsmanship creates a focal point that enhances your entire home.' }
]

const faqs = [
  { q: 'Can you match my existing hardwood floors?', a: 'Yes. We work with all hardwood species and can match your existing floors in wood type, stain color, and finish. We\'ll bring samples to ensure a perfect match.' },
  { q: 'How long does stair renovation take?', a: 'Most residential staircase projects take 3-7 days depending on scope. Complete installations take longer than refinishing or tread replacement.' },
  { q: 'Do I need to leave my home during the work?', a: 'Not necessarily, but staircase work does limit access between floors. We can work in phases or create temporary access routes to minimize inconvenience.' },
  { q: 'What wood species work best for stairs?', a: 'Hardwoods like oak, maple, and hickory are ideal for stairs due to their durability and resistance to wear. We\'ll recommend species based on your traffic levels and style preferences.' }
]

export default function StairsPage() {
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
                Staircase Installation & Renovation
              </h1>
              <p className="text-forest-200 mt-1">
                Expert craftsmanship • Serving Greater Vancouver
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
              Expert Staircase Services
            </h2>
            <div className="prose prose-lg text-charcoal-700">
              <p>
                Your staircase is more than just a functional element—it's often the centerpiece
                of your home. At PROMARK FLOORING, we specialize in creating beautiful, safe,
                and durable staircases that make lasting impressions. With over 20 years of
                experience, we handle everything from new hardwood stair installations to
                complete renovations and detailed repairs.
              </p>
              <p>
                Whether you're building new stairs, replacing worn treads and risers,
                refinishing existing hardwood, or completely transforming your staircase design,
                our craftsmen deliver exceptional results that combine structural integrity with
                aesthetic excellence.
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
              Our Staircase Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="bg-charcoal-800 rounded-2xl p-6">
                <h3
                  className="text-lg text-cream-100 mb-3"
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

      {/* Why Professional */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl text-charcoal-900 mb-8 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why Professional Staircase Work Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {whyProfessional.map((point) => (
                <div key={point.title} className="flex gap-4 bg-white rounded-2xl p-6 border border-cream-200">
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
              Staircase FAQs
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
            Ready to Transform Your Staircase?
          </h2>
          <p className="text-xl text-forest-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your staircase project
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
