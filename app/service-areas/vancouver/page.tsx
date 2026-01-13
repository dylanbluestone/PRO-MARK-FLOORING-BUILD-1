import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Vancouver, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Vancouver, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Vancouver residents.',
  keywords: ['floor leveling vancouver', 'hardwood flooring vancouver', 'flooring contractor vancouver bc', 'vancouver floor installation'],
}

export default function VancouverPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <h1>Professional Floor Leveling and Hardwood Installation in Vancouver, BC</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Proudly serving Vancouver homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
            <a href="tel:+16043536077" className="btn-secondary text-center">
              <Phone className="inline mr-2" size={20} />Call (604) 353-6077
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-6">Your Trusted Vancouver Flooring Experts</h2>
          <p className="text-lg text-gray-700 mb-4">
            PROMARK FLOORING has been serving the Vancouver community for over 20 years. We're intimately familiar with Vancouver's unique housing stock—from character homes in older neighborhoods to modern condos downtown. Our local expertise means we understand the specific flooring challenges Vancouver properties face, from moisture management in coastal climates to meeting city building codes and strata requirements.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're in Kitsilano, Mount Pleasant, West End, Dunbar, Commercial Drive, or any Vancouver neighborhood, we provide fast response times, personalized service, and the quality workmanship that has made us Vancouver's trusted flooring contractor. From heritage home restorations to new condo developments, we've done it all across this beautiful city.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Vancouver Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Floor Leveling in Vancouver", desc: "Correct uneven floors in Vancouver homes and businesses with our industry-leading 5-year warranty. We handle concrete slabs, wood subfloors, and heritage home floor issues.", link: "/services/floor-leveling" },
              { title: "Hardwood Installation in Vancouver", desc: "Install beautiful hardwood floors throughout your Vancouver property. Solid hardwood, engineered hardwood, and premium laminate options with expert installation.", link: "/services/hardwood-installation" },
              { title: "Stair Installation in Vancouver", desc: "Transform your Vancouver home's staircase with professional installation and refinishing. Custom hardwood stairs that become your home's focal point.", link: "/services/stairs" },
              { title: "Floor Repair in Vancouver", desc: "Restore and repair existing floors in Vancouver properties. Water damage restoration, refinishing, board replacement, and maintenance services.", link: "/services/repair-maintenance" }
            ].map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <Link href={service.link} className="text-primary-red font-semibold hover:text-primary-red-dark">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">Why Vancouver Residents Choose PROMARK</h2>
          <div className="space-y-4">
            {[
              "Local Knowledge: We understand Vancouver's building codes, strata bylaws, and heritage home requirements",
              "Fast Response: Located in Vancouver, we respond quickly to quotes and service calls throughout the city",
              "Climate Expertise: We know how Vancouver's coastal climate affects flooring and use appropriate moisture management",
              "Heritage Home Experience: Extensive experience working with Vancouver's character homes and older buildings",
              "Strata Approved: Familiar with strata requirements and documentation for condo and townhome projects",
              "Licensed & Insured: Fully licensed and insured to work on all Vancouver residential and commercial properties"
            ].map((point) => (
              <div key={point} className="flex gap-3">
                <CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-8">Serving All Vancouver Neighborhoods</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-8">
              We provide professional flooring services throughout Vancouver, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'Kitsilano', 'West End', 'Mount Pleasant', 'Commercial Drive',
                'Dunbar', 'Kerrisdale', 'South Granville', 'Riley Park',
                'Fairview', 'Marpole', 'Hastings-Sunrise', 'Strathcona',
                'Downtown', 'Yaletown', 'Coal Harbour', 'Shaughnessy'
              ].map((neighborhood) => (
                <div key={neighborhood} className="bg-white p-3 rounded shadow-sm">
                  <MapPin className="inline text-primary-red mr-1" size={16} />
                  {neighborhood}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">And all other Vancouver neighborhoods</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-12">Vancouver Flooring FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you work on Vancouver heritage homes?",
                a: "Yes! We have extensive experience with Vancouver's character and heritage homes. We understand the unique requirements of older homes, work respectfully with original materials, and know how to navigate heritage permit requirements when needed."
              },
              {
                q: "Can you meet Vancouver strata requirements?",
                a: "Absolutely. We're familiar with Vancouver strata requirements including acoustic underlay standards, work hour restrictions, and documentation needs. We provide all necessary paperwork and approvals for strata projects."
              },
              {
                q: "How quickly can you start a project in Vancouver?",
                a: "As a Vancouver-based company, we typically provide quotes within 48 hours and can often start projects within 1-2 weeks depending on our schedule and your timeline. Contact us for current availability."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Get Started in Vancouver?</h2>
          <p className="text-xl mb-8">Get a free quote for your Vancouver flooring project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request Free Quote</Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">Call (604) 353-6077</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-8">Other Service Areas Near Vancouver</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'North Vancouver', slug: 'north-vancouver' },
              { name: 'West Vancouver', slug: 'west-vancouver' },
              { name: 'Burnaby', slug: 'burnaby' },
              { name: 'Richmond', slug: 'surrey' },
              { name: 'New Westminster', slug: 'delta' }
            ].map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-red hover:text-white transition-colors">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
