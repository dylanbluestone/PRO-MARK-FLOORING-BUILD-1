import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Staircase Installation & Renovation Vancouver | PROMARK FLOORING',
  description: 'Professional staircase installation, repair, and renovation services in Vancouver, BC. Transform your stairs with expert craftsmanship. 20+ years experience.',
  keywords: ['stair installation vancouver', 'staircase renovation bc', 'hardwood stairs', 'stair repair vancouver', 'staircase refinishing'],
}

export default function StairsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <h1>Staircase Installation & Renovation in Vancouver</h1>
          <p className="text-xl mb-8 max-w-3xl">Transform your staircase into a stunning focal point with professional installation, refinishing, and repair services.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
            <a href="tel:+16043536077" className="btn-secondary text-center"><Phone className="inline mr-2" size={20} />Call (604) 353-6077</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2>Expert Staircase Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your staircase is more than just a functional element—it's often the centerpiece of your home. At PROMARK FLOORING, we specialize in creating beautiful, safe, and durable staircases that make lasting impressions. With over 20 years of experience, we handle everything from new hardwood stair installations to complete renovations and detailed repairs.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're building new stairs, replacing worn treads and risers, refinishing existing hardwood, or completely transforming your staircase design, our craftsmen deliver exceptional results that combine structural integrity with aesthetic excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Staircase Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "New Staircase Installation",
                desc: "Complete staircase installation using premium hardwood species. We build custom stairs that match your home's style, whether traditional, contemporary, or transitional. Our work includes treads, risers, stringers, handrails, balusters, and newel posts."
              },
              {
                title: "Staircase Refinishing",
                desc: "Restore the beauty of existing hardwood stairs through professional sanding, staining, and finishing. We remove years of wear, scratches, and damage to reveal the natural beauty of your stairs. Choose from a range of stain colors and protective finishes."
              },
              {
                title: "Tread & Riser Replacement",
                desc: "Replace damaged, worn, or squeaky treads and risers with new hardwood. Perfect for updating older staircases or repairing specific problem areas. We match existing wood species and finishes or create a fresh new look."
              },
              {
                title: "Staircase Renovation",
                desc: "Complete staircase transformations including layout changes, style updates, and material upgrades. Convert carpeted stairs to hardwood, update outdated styles, or completely redesign your staircase for improved aesthetics and functionality."
              },
              {
                title: "Stair Repair",
                desc: "Fix squeaks, secure loose treads, repair cracks, replace damaged nosing, and address structural issues. Our repairs restore safety and eliminate annoying sounds while preserving your staircase's appearance."
              },
              {
                title: "Custom Details",
                desc: "Add custom touches like decorative inlays, contrasting wood species, custom handrails, ornamental balusters, or unique finishes. We bring your vision to life with detailed craftsmanship."
              }
            ].map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">Why Professional Staircase Work Matters</h2>
          <div className="space-y-6">
            {[
              { title: "Safety First", desc: "Stairs must be structurally sound and meet building codes. Professional installation ensures proper tread depth, riser height, handrail placement, and secure attachment for safe daily use." },
              { title: "Precision Required", desc: "Staircase work demands exact measurements and angles. Even minor errors create safety hazards, visual problems, and functional issues. Our experience ensures perfect execution." },
              { title: "Complex Geometry", desc: "Stairs involve complex calculations and cuts, especially for winding or curved designs. We have the expertise and specialized tools to handle any staircase configuration." },
              { title: "Lasting Impression", desc: "Your staircase is one of the first things visitors see. Professional craftsmanship creates a focal point that enhances your entire home's appeal and value." }
            ].map((point) => (
              <div key={point.title} className="flex gap-4">
                <CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={24} />
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
          <h2 className="text-center mb-12">Staircase FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Can you match my existing hardwood floors?", a: "Yes. We work with all hardwood species and can match your existing floors in wood type, stain color, and finish. We'll bring samples to ensure a perfect match before beginning work." },
              { q: "How long does stair renovation take?", a: "Most residential staircase projects take 3-7 days depending on scope. Complete installations take longer than refinishing or tread replacement. We'll provide a detailed timeline during consultation." },
              { q: "Do I need to leave my home during the work?", a: "Not necessarily, but staircase work does limit access between floors. We can work in phases, create temporary access routes, or schedule work to minimize inconvenience. We'll discuss options to fit your needs." },
              { q: "What wood species work best for stairs?", a: "Hardwoods like oak, maple, and hickory are ideal for stairs due to their durability and resistance to wear. We'll recommend species based on your traffic levels, style preferences, and budget." }
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
          <h2 className="text-white mb-4">Ready to Transform Your Staircase?</h2>
          <p className="text-xl mb-8">Get a free consultation and quote for your staircase project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request Free Quote</Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">Call (604) 353-6077</a>
          </div>
        </div>
      </section>
    </>
  )
}
