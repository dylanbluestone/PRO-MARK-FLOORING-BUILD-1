import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, Phone, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Repair & Maintenance Vancouver | Professional Service',
  description: 'Expert floor repair and maintenance services in Vancouver. Hardwood refinishing, damage repair, surface restoration. Quality workmanship guaranteed.',
  keywords: ['floor repair vancouver', 'hardwood repair bc', 'floor maintenance vancouver', 'floor refinishing', 'damage repair flooring'],
}

export default function RepairMaintenancePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <h1>Floor Repair & Maintenance in Vancouver</h1>
          <p className="text-xl mb-8 max-w-3xl">Restore, repair, and maintain your floors with professional services that extend their life and beauty.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
            <a href="tel:+16043536077" className="btn-secondary text-center"><Phone className="inline mr-2" size={20} />Call (604) 353-6077</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2>Professional Floor Repair & Maintenance</h2>
          <p className="text-lg text-gray-700 mb-4">
            Even the best floors eventually need repair or maintenance. At PROMARK FLOORING, we extend the life of your existing floors through expert repair, refinishing, and maintenance services. With over 20 years of experience, we fix damage, restore beauty, and prevent costly replacements.
          </p>
          <p className="text-lg text-gray-700">
            From minor scratches to major water damage, worn finishes to structural subfloor issues, we have the expertise and tools to restore your floors to their original condition—or even better. Our repair work often costs a fraction of replacement while delivering exceptional results.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Repair & Maintenance Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Hardwood Refinishing", desc: "Complete sanding and refinishing to remove scratches, wear, and discoloration. Choose new stain colors or restore original beauty." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Scratch & Gouge Repair", desc: "Fill and blend scratches, dents, and gouges using professional techniques. Color-matched repairs that disappear into your floor." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Water Damage Restoration", desc: "Remove and replace water-damaged boards, address subfloor moisture, prevent mold growth, and restore affected areas." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Board Replacement", desc: "Replace individual damaged, stained, or warped boards while matching existing wood species, finish, and color." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Subfloor Repair", desc: "Fix squeaks, reinforce weak areas, replace damaged subfloor sections, and correct structural issues before they worsen." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Finish Refresh", desc: "Apply new protective finish coats to worn areas without full sanding. Quick refresh that extends floor life and restores shine." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Gap Filling", desc: "Fill gaps between boards caused by seasonal shrinkage or improper installation using color-matched wood fillers." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Pet Damage Repair", desc: "Address scratches, urine stains, and odors from pets. Remove affected boards and neutralize subfloor odors." },
              { icon: <Wrench className="text-primary-red mb-3" size={36} />, title: "Transition Repairs", desc: "Fix loose, damaged, or missing transition strips between rooms and flooring types for a seamless, professional look." }
            ].map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
                {service.icon}
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">Benefits of Professional Repair vs. Replacement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Significant Cost Savings", desc: "Repairs typically cost 20-40% of replacement costs. Why replace entire floors when targeted repairs restore functionality and appearance?" },
              { title: "Faster Completion", desc: "Most repairs are completed in 1-3 days versus weeks for full replacement. Less disruption to your home or business operations." },
              { title: "Preserve Original Floors", desc: "Keep the character and quality of original hardwood, especially in older homes with irreplaceable wood species or craftsmanship." },
              { title: "Environmentally Friendly", desc: "Repairing extends floor life, reducing waste and avoiding the environmental impact of manufacturing and installing new materials." },
              { title: "Maintain Home Value", desc: "Well-maintained original floors often add more value than new floors, especially in heritage or character homes." },
              { title: "Immediate Results", desc: "See dramatic improvements without the hassle of furniture removal, installation mess, or waiting for materials to arrive." }
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-3">
                <CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Floor Maintenance FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How often should hardwood floors be refinished?", a: "Typically every 7-10 years for residential floors, though this varies based on traffic, wear, and maintenance. We'll assess your floors and recommend timing based on their current condition." },
              { q: "Can all scratches and damage be repaired?", a: "Most scratches, dents, and surface damage can be repaired successfully. Deep gouges, severe water damage, or structural issues may require board replacement. We'll assess and recommend the best approach." },
              { q: "Will repaired areas match the existing floor?", a: "Our experienced craftsmen are skilled at color-matching and blending repairs. While perfect invisibility isn't always possible, our repairs are typically unnoticeable except under close inspection." },
              { q: "How long do repairs last?", a: "When done professionally, repairs should last as long as the surrounding floor. We use quality materials and proven techniques to ensure long-lasting results." }
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
          <h2 className="text-white mb-4">Need Floor Repair or Maintenance?</h2>
          <p className="text-xl mb-8">Get a free assessment and quote to restore your floors</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request Free Quote</Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">Call (604) 353-6077</a>
          </div>
        </div>
      </section>
    </>
  )
}
