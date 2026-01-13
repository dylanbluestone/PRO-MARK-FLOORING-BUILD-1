import Link from 'next/link'
import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Surrey, BC',
  description: 'Professional floor leveling and hardwood installation in Surrey. Local expertise, 5-year warranty, 20+ years experience.',
}

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <h1>Floor Leveling & Hardwood Installation in Surrey, BC</h1>
          <p className="text-xl mb-8">Professional flooring services throughout Surrey and surrounding areas</p>
          <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2>Serving Surrey with Expert Flooring Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            PROMARK FLOORING proudly serves Surrey homeowners, businesses, and contractors. With over 20 years of experience, we provide expert floor leveling, hardwood installation, stair work, and repair services throughout Surrey.
          </p>
          <p className="text-lg text-gray-700">
            Our services include floor leveling with industry-leading 5-year warranty, professional hardwood flooring installation, staircase installation and renovation, and comprehensive floor repair and maintenance.
          </p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-8">Our Surrey Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/services/floor-leveling" className="card hover:shadow-lg">
              <h3 className="font-bold mb-2">Floor Leveling</h3>
              <p className="text-gray-700">5-year warranty floor leveling for Surrey properties</p>
            </Link>
            <Link href="/services/hardwood-installation" className="card hover:shadow-lg">
              <h3 className="font-bold mb-2">Hardwood Installation</h3>
              <p className="text-gray-700">Expert hardwood flooring in Surrey</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-red text-white text-center">
        <div className="container-custom">
          <h2 className="text-white mb-4">Get Your Free Quote in Surrey</h2>
          <p className="text-xl mb-8">Contact us today for professional flooring services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold">Request Free Quote</Link>
            <a href="tel:+16043536077" className="border-2 border-white px-8 py-4 rounded-lg font-semibold"><Phone className="inline mr-2" size={20} />Call (604) 353-6077</a>
          </div>
        </div>
      </section>
    </>
  )
}
