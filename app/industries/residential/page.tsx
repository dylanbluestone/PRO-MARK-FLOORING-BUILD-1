import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, Home, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Flooring Services Vancouver | Homes & Condos',
  description: 'Professional residential flooring services in Vancouver. Floor leveling, hardwood installation, stairs for homes, condos, and townhouses. Family-owned and trusted.',
  keywords: ['residential flooring vancouver', 'home floor leveling', 'condo flooring bc', 'house hardwood installation'],
}

export default function ResidentialPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <Home size={48} />
            <h1>Residential Flooring Services</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Transform your home with professional floor leveling and hardwood installation. Family-owned, locally trusted, 20+ years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
            <a href="tel:+16043536077" className="btn-secondary text-center"><Phone className="inline mr-2" size={20} />Call (604) 353-6077</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2>Flooring Services for Your Home</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your home is your most important investment. At PROMARK FLOORING, we treat every residential project with the care and attention it deserves. Whether you're renovating a single room or updating your entire home, we deliver exceptional results that enhance your living space and add lasting value to your property.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We serve all residential property types across Greater Vancouver and Fraser Valley: single-family homes, condos, townhomes, duplexes, and heritage properties. From modern new builds to character homes built a century ago, we have the expertise to handle any residential flooring challenge.
          </p>
          <p className="text-lg text-gray-700">
            As a family-owned business, we understand the importance of your home. You'll work directly with Mark, our owner, ensuring personalized service, clear communication, and quality workmanship from start to finish. We protect your home, work cleanly, and deliver results that exceed expectations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Residential Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Floor Leveling for Homes",
                desc: "Correct uneven floors throughout your home before installing new flooring. Our floor leveling service includes subfloor inspection, moisture testing, surface preparation, self-leveling compound application, and quality verification. Perfect for renovation projects, pre-sale prep, or new flooring installation. Industry-leading 5-year warranty.",
                features: ["Basement floor leveling", "Main floor corrections", "Pre-flooring preparation", "Foundation issue mitigation"]
              },
              {
                title: "Hardwood Flooring Installation",
                desc: "Install beautiful hardwood floors that enhance your home's warmth, character, and value. We work with solid hardwood, engineered hardwood, and premium laminate. Our installation process includes subfloor preparation, material selection guidance, professional installation, and finishing. Choose from countless species, colors, and styles to match your home's aesthetic.",
                features: ["Living rooms & bedrooms", "Hallways & entryways", "Dining rooms", "Whole-home installations"]
              },
              {
                title: "Staircase Installation & Refinishing",
                desc: "Your staircase makes a powerful first impression. We install new hardwood stairs, refinish existing staircases, replace damaged treads and risers, and update outdated designs. Custom details available including contrasting wood species, decorative inlays, and modern handrail systems.",
                features: ["New stair installation", "Refinishing services", "Tread replacement", "Custom designs"]
              },
              {
                title: "Floor Repair & Restoration",
                desc: "Extend the life of your existing floors with expert repair services. We fix scratches, gouges, water damage, squeaks, and structural issues. Hardwood refinishing removes years of wear to restore original beauty. Often more cost-effective than replacement while delivering like-new results.",
                features: ["Hardwood refinishing", "Water damage repair", "Scratch & gouge repair", "Board replacement"]
              }
            ].map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">Why Homeowners Choose PROMARK</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Family-Owned & Operated", desc: "Work directly with Mark, the owner. Personal service, direct communication, and accountability you can trust." },
              { title: "Respect for Your Home", desc: "We protect your furniture, clean daily, and work efficiently to minimize disruption to your family's routine." },
              { title: "Transparent Pricing", desc: "Detailed written quotes with no hidden fees. You'll know exactly what to expect before we begin." },
              { title: "Quality Materials", desc: "We source premium materials and never cut corners. Your home deserves the best." },
              { title: "Flexible Scheduling", desc: "We work around your schedule, including evenings and weekends when needed." },
              { title: "Satisfaction Guaranteed", desc: "We're not finished until you're completely satisfied with the results." }
            ].map((point) => (
              <div key={point.title} className="flex gap-3">
                <CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{point.title}</h3>
                  <p className="text-gray-700 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Residential Project Types</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Whole Home Renovations", desc: "Complete flooring updates throughout your entire home. Coordinated project management for seamless results." },
              { title: "Room-by-Room Updates", desc: "Update individual rooms as needed. Living rooms, bedrooms, hallways, dining rooms, or any combination." },
              { title: "Pre-Sale Preparations", desc: "Improve your home's appeal and value before listing. New floors make powerful first impressions on buyers." },
              { title: "Heritage Home Restorations", desc: "Sensitive work on character homes. We preserve original features while updating floors to modern standards." },
              { title: "Condo & Townhome Projects", desc: "Familiar with strata requirements, acoustic standards, and work hour restrictions for multi-family properties." },
              { title: "Basement Finishing", desc: "Level concrete floors and install beautiful hardwood or laminate to create functional living spaces." }
            ].map((type) => (
              <div key={type.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">{type.title}</h3>
                <p className="text-gray-700 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-12">Homeowner FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "How long will my home flooring project take?",
                a: "Most residential projects take 3-7 days depending on scope. Floor leveling typically takes 1-3 days, hardwood installation 2-5 days. We'll provide a specific timeline during your free consultation and work efficiently to minimize disruption."
              },
              {
                q: "Do we need to move out during the work?",
                a: "Not usually. While the work area must be cleared, most families stay in their homes during flooring projects. We can work room-by-room if needed and always clean up daily. For extensive whole-home projects, some families choose to stay elsewhere for convenience."
              },
              {
                q: "Will you protect our furniture and belongings?",
                a: "Absolutely. We move and protect furniture, cover belongings, seal doorways to prevent dust migration, and clean thoroughly each day. We treat your home with the same care we'd give our own."
              },
              {
                q: "Can you work around our schedule?",
                a: "Yes. We offer flexible scheduling including evening and weekend work when needed. We understand families' busy schedules and work to minimize disruption."
              },
              {
                q: "What if we're not sure what we want?",
                a: "That's what our free consultation is for! We'll show you samples, discuss options, and provide expert recommendations based on your style, budget, and how you use your space. No pressure—just helpful guidance."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8">Get a free consultation and quote for your residential flooring project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request Free Quote</Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">Call (604) 353-6077</a>
          </div>
        </div>
      </section>
    </>
  )
}
