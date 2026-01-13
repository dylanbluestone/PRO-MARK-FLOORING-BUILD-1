import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, Building2, CheckCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Flooring Services Vancouver | Businesses & Properties',
  description: 'Commercial floor leveling and installation services in Vancouver. Offices, retail spaces, warehouses, and commercial properties. Minimal downtime, quality results.',
  keywords: ['commercial flooring vancouver', 'business floor leveling', 'warehouse flooring bc', 'retail floor installation'],
}

export default function CommercialPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={48} />
            <h1>Commercial Flooring Services</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Professional floor leveling and installation for businesses, warehouses, offices, and commercial properties. Minimal downtime, maximum quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
            <a href="tel:+16043536077" className="btn-secondary text-center"><Phone className="inline mr-2" size={20} />Call (604) 353-6077</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2>Commercial Flooring Expertise</h2>
          <p className="text-lg text-gray-700 mb-4">
            Commercial properties demand flooring solutions that withstand heavy traffic, meet safety standards, and maintain professional appearance. At PROMARK FLOORING, we've delivered commercial flooring projects for over 20 years across Greater Vancouver, serving businesses, property managers, contractors, and commercial developers.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We understand commercial realities: tight timelines, budget constraints, minimal disruption requirements, and the need for durable, long-lasting results. Our commercial services combine efficient project management, quality workmanship, and flexible scheduling to meet your business needs.
          </p>
          <p className="text-lg text-gray-700">
            From small retail spaces to large warehouses, office buildings to restaurants, we handle commercial projects of all sizes. Our experience includes working with property managers, general contractors, architects, and business owners to deliver flooring solutions that meet specifications, stay on budget, and exceed expectations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Commercial Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Commercial Floor Leveling",
                desc: "Level concrete slabs and subfloors in commercial spaces. Essential for new tenant improvements, renovation projects, and pre-flooring preparation. We work efficiently to minimize business disruption, including after-hours and weekend scheduling. Handle projects from small retail spaces to large warehouses.",
                features: ["Warehouse floor leveling", "Office space preparation", "Retail tenant improvements", "Loading dock repairs"]
              },
              {
                title: "Commercial Hardwood Installation",
                desc: "Professional hardwood and luxury vinyl plank installation for commercial applications. Ideal for offices, retail spaces, showrooms, and hospitality venues. We select durable materials suited for commercial traffic levels and install with minimal disruption to operations.",
                features: ["Office reception areas", "Retail showrooms", "Restaurant dining rooms", "Hotel lobbies"]
              },
              {
                title: "Subfloor Preparation & Repair",
                desc: "Comprehensive subfloor services for commercial properties. We repair structural issues, correct moisture problems, reinforce weak areas, and prepare surfaces for any commercial flooring material. Critical for successful long-term flooring performance.",
                features: ["Structural repairs", "Moisture mitigation", "Crack repair", "Surface grinding"]
              },
              {
                title: "Maintenance & Repairs",
                desc: "Keep your commercial floors looking professional with ongoing maintenance and repair services. Address high-traffic wear, damage, and deterioration before minor issues become major problems. Cost-effective alternative to premature replacement.",
                features: ["Damage repair", "Refinishing services", "Traffic pattern restoration", "Preventive maintenance"]
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
          <h2 className="mb-8">Why Commercial Clients Choose PROMARK</h2>
          <div className="space-y-6">
            {[
              { icon: <Clock className="text-primary-red flex-shrink-0" size={32} />, title: "Minimal Downtime", desc: "We work efficiently and offer after-hours/weekend scheduling to minimize disruption to your business operations. Fast project completion without sacrificing quality." },
              { icon: <CheckCircle className="text-primary-red flex-shrink-0" size={32} />, title: "Project Management", desc: "Clear communication, detailed scheduling, and professional coordination. We work seamlessly with property managers, GCs, and other trades." },
              { icon: <CheckCircle className="text-primary-red flex-shrink-0" size={32} />, title: "Code Compliance", desc: "All work meets BC building codes, WorkSafeBC requirements, and ADA/accessibility standards where applicable." },
              { icon: <CheckCircle className="text-primary-red flex-shrink-0" size={32} />, title: "Commercial-Grade Materials", desc: "We select flooring materials and leveling compounds rated for commercial traffic levels and designed for long-term durability." },
              { icon: <CheckCircle className="text-primary-red flex-shrink-0" size={32} />, title: "Insured & Bonded", desc: "Full commercial liability insurance and WorkSafeBC coverage. Certificate of insurance provided upon request." },
              { icon: <CheckCircle className="text-primary-red flex-shrink-0" size={32} />, title: "Flexible Scheduling", desc: "Work around your business hours. Evening, overnight, and weekend scheduling available to accommodate operating businesses." }
            ].map((point) => (
              <div key={point.title} className="flex gap-4">
                {point.icon}
                <div>
                  <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                  <p className="text-gray-700">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Commercial Property Types We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Office Buildings", "Retail Stores & Showrooms", "Warehouses & Distribution Centers",
              "Restaurants & Cafes", "Hotels & Hospitality", "Medical & Dental Offices",
              "Fitness Centers & Gyms", "Educational Facilities", "Property Management Portfolios",
              "Tenant Improvements", "New Construction", "Renovation Projects"
            ].map((type) => (
              <div key={type} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Building2 className="text-primary-red mx-auto mb-3" size={32} />
                <h3 className="font-semibold">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-12">Commercial Client FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can you work after hours or weekends?",
                a: "Yes. We regularly schedule commercial work during evenings, overnight, and weekends to avoid disrupting your business operations. We understand that minimizing downtime is critical for commercial properties."
              },
              {
                q: "Do you provide insurance certificates?",
                a: "Absolutely. We carry full commercial liability insurance and WorkSafeBC coverage. We'll provide a certificate of insurance naming your property or business as additionally insured upon request."
              },
              {
                q: "How quickly can you complete commercial projects?",
                a: "Project timelines vary based on scope and square footage. We work efficiently and can often complete commercial floor leveling in 2-5 days. We'll provide detailed scheduling during the quoting process and meet agreed-upon deadlines."
              },
              {
                q: "Can you work with our general contractor or property manager?",
                a: "Yes. We regularly collaborate with GCs, property managers, architects, and other trades. We're experienced in coordinated project environments and professional communication."
              },
              {
                q: "Do you offer maintenance contracts?",
                a: "Yes. For property management companies or businesses with multiple locations, we can establish ongoing maintenance agreements. Contact us to discuss your specific needs."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Commercial Flooring Quote</h2>
          <p className="text-xl mb-8">Get a detailed quote for your commercial flooring project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request Free Quote</Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">Call (604) 353-6077</a>
          </div>
        </div>
      </section>
    </>
  )
}
