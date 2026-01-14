import FAQ from '@/app/components/FAQ'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'FAQ | PROMARK FLOORING',
  description: 'Common questions about floor leveling and hardwood installation in Vancouver.',
}

export default function FAQPage() {
  return (
    <main>
      {/* Compact Hero */}
      <section className="bg-forest-700 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h1
              className="text-2xl md:text-3xl text-white font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-forest-200 mt-1">
              Everything you need to know about our flooring services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-forest-50 border border-forest-200 rounded-2xl p-8 text-center">
              <h2
                className="text-2xl font-bold text-charcoal-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Still Have Questions?
              </h2>
              <p className="text-charcoal-600 mb-6">Contact us for personalized answers.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+16043536077" className="btn-primary">
                  <Phone size={18} />
                  Call (604) 353-6077
                </a>
                <Link href="/contact" className="btn-secondary">
                  Send a Message
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
