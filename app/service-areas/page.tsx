import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Service Areas | PROMARK FLOORING',
  description: 'PROMARK FLOORING serves Greater Vancouver including Vancouver, Burnaby, Surrey, and more.',
}

const areas = [
  { name: 'Vancouver', slug: 'vancouver', description: 'Downtown, East Van, West Side' },
  { name: 'North Vancouver', slug: 'north-vancouver', description: 'Lonsdale, Lynn Valley, Deep Cove' },
  { name: 'West Vancouver', slug: 'west-vancouver', description: 'Ambleside, Dundarave, British Properties' },
  { name: 'Burnaby', slug: 'burnaby', description: 'Metrotown, Brentwood, Heights' },
  { name: 'Surrey', slug: 'surrey', description: 'Newton, Fleetwood, Guildford' },
  { name: 'Delta', slug: 'delta', description: 'Ladner, Tsawwassen, North Delta' },
  { name: 'Langley', slug: 'langley', description: 'City, Township, Walnut Grove' },
  { name: 'Port Coquitlam', slug: 'port-coquitlam', description: 'Central, Citadel, Oxford Heights' },
  { name: 'Maple Ridge', slug: 'maple-ridge', description: 'Town Centre, Albion, Haney' },
  { name: 'Mission', slug: 'mission', description: 'Mission City, Hatzic, Silverdale' },
]

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Service Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proudly serving Greater Vancouver and the Fraser Valley.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-gray-500 text-sm mb-3">{area.description}</p>
                    <span className="inline-flex items-center gap-1 text-red-600 font-medium text-sm">
                      View Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer In Every Area</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <CheckCircle className="text-green-500" size={24} />
                <span>Floor Leveling (5-Year Warranty)</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <CheckCircle className="text-green-500" size={24} />
                <span>Hardwood Installation</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <CheckCircle className="text-green-500" size={24} />
                <span>Staircase Services</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
                <CheckCircle className="text-green-500" size={24} />
                <span>Free On-Site Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
