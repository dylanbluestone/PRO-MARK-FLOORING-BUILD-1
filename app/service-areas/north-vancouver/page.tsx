import Link from 'next/link'
import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in North Vancouver, BC',
  description: 'Professional floor leveling and hardwood installation in North Vancouver. Local experts serving North Shore. Free quotes.',
  keywords: ['floor leveling north vancouver', 'hardwood flooring north vancouver', 'north shore flooring'],
}

export default function NorthVancouverPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <h1>Floor Leveling & Hardwood Installation in North Vancouver, BC</h1>
          <p className="text-xl mb-8 max-w-3xl">Serving Lower Lonsdale, Lynn Valley, Deep Cove, and all North Vancouver neighborhoods</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
            <a href="tel:+16043536077" className="btn-secondary text-center"><Phone className="inline mr-2" size={20} />Call (604) 353-6077</a>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2>Your North Vancouver Flooring Specialists</h2>
          <p className="text-lg text-gray-700 mb-4">
            PROMARK FLOORING has been serving North Vancouver for over 20 years. We know the North Shore's unique challenges—from hillside properties with complex foundation requirements to newer developments requiring precise specifications. Whether you're in a character home in Central Lonsdale, a modern townhome in Lynn Valley, or a waterfront property in Deep Cove, we deliver exceptional flooring services throughout North Vancouver.
          </p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-8">North Vancouver Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
            {['Lower Lonsdale', 'Central Lonsdale', 'Upper Lonsdale', 'Lynn Valley', 'Lynn Creek', 'Edgemont Village', 'Deep Cove', 'Blueridge', 'Seymour Heights', 'Capilano Highlands', 'Norgate', 'Pemberton Heights'].map((n) => (
              <div key={n} className="bg-white p-3 rounded shadow-sm">{n}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Flooring Services in North Vancouver</h2>
          <p className="text-xl mb-8">Get your free quote today</p>
          <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request Free Quote</Link>
        </div>
      </section>
    </>
  )
}
