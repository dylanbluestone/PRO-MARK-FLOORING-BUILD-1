import FAQ from '@/app/components/FAQ'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ | PROMARK FLOORING',
  description: 'Common questions about floor leveling and hardwood installation in Vancouver.',
}

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our flooring services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">Contact us for personalized answers.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+16043536077" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                  Call (604) 353-6077
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50">
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
