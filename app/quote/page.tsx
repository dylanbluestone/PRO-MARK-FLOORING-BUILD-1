import QuoteForm from '@/app/components/QuoteForm'
import { Shield, Clock, Award, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Get a Free Quote | PROMARK FLOORING',
  description: 'Request a free quote for floor leveling or hardwood installation in Vancouver.',
}

export default function QuotePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-red-700 to-red-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a detailed estimate within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>100% Free Estimate</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="text-yellow-400" size={20} />
              <span>Response Within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="text-blue-400" size={20} />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="text-red-400" size={20} />
              <span>20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h2>
                <p className="text-gray-500">The more details you provide, the more accurate your quote will be.</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
