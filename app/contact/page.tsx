import ContactForm from '@/app/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | PROMARK FLOORING',
  description: 'Contact PROMARK FLOORING for floor leveling and hardwood installation in Vancouver. Call (604) 353-6077.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your floors? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-10">
                <a href="tel:+16043536077" className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors group">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Call Us</span>
                    <span className="text-xl font-bold text-gray-900">(604) 353-6077</span>
                  </div>
                </a>

                <a href="mailto:promarkflooring@hotmail.com" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Email Us</span>
                    <span className="text-lg font-semibold text-gray-900">promarkflooring@hotmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Visit Us</span>
                    <span className="text-lg font-semibold text-gray-900">3225 Commercial Dr, Vancouver, BC V5N 4E5</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Business Hours</span>
                    <span className="text-lg font-semibold text-gray-900">Mon - Fri: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.07!3d49.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE1JzM2LjAiTiAxMjPCsDA0JzEyLjAiVw!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">We'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
