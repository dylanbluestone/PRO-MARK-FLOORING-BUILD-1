import Link from 'next/link'
import { Metadata } from 'next'
import { Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { ServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Hardwood Flooring Installation Vancouver | Expert Craftsmen',
  description: 'Professional hardwood flooring installation in Greater Vancouver. Solid hardwood, engineered hardwood, laminate. Expert installation with 1-year warranty. Free consultation.',
  keywords: ['hardwood flooring installation vancouver', 'hardwood floors bc', 'engineered hardwood installation', 'solid wood flooring', 'laminate flooring vancouver'],
}

const serviceAreas = ['Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey', 'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission']

export default function HardwoodInstallationPage() {
  const schema = ServiceSchema(
    'Hardwood Flooring Installation',
    'Expert hardwood flooring installation with 1-year warranty for residential and commercial properties',
    serviceAreas
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Professional Hardwood Flooring Installation in Vancouver
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your space with timeless hardwood flooring. Expert installation, premium materials, 1-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary text-center">Get Free Quote</Link>
              <a href="tel:+16043536077" className="btn-secondary text-center">
                <Phone className="inline mr-2" size={20} />Call (604) 353-6077
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-6">Expert Hardwood Flooring Installation</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hardwood flooring brings unmatched beauty, warmth, and value to any property. At PROMARK FLOORING, we've spent over 20 years perfecting the art of hardwood installation. Whether you're drawn to the classic elegance of solid oak, the versatility of engineered hardwood, or the affordability of premium laminate, we deliver flawless installation that enhances your space and lasts for generations.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our expertise covers every aspect of hardwood installation: proper subfloor preparation, material acclimation, precision cutting and fitting, professional finishing, and meticulous quality control. We work with all hardwood species, installation methods (nail-down, glue-down, floating), and finish options to create the exact look you envision.
          </p>
          <p className="text-lg text-gray-700">
            Serving residential homes, condos, townhomes, and commercial properties across Greater Vancouver and Fraser Valley, we bring local expertise, premium materials, and proven techniques to every hardwood flooring project. Our 1-year installation warranty provides peace of mind that your investment is protected.
          </p>
        </div>
      </section>

      {/* Hardwood Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Hardwood Flooring Options</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Solid Hardwood</h3>
              <p className="text-gray-700 mb-4">
                Traditional solid hardwood is milled from a single piece of wood, typically 3/4" thick. It can be sanded and refinished multiple times over its lifetime, making it an heirloom-quality investment. Popular species include oak, maple, cherry, walnut, and hickory. Solid hardwood is ideal for above-grade installations on wood subfloors.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Can be refinished 5-7 times</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Timeless, authentic appearance</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Increases property value significantly</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Engineered Hardwood</h3>
              <p className="text-gray-700 mb-4">
                Engineered hardwood features a real hardwood veneer bonded to layers of plywood or high-density fiberboard. This construction provides dimensional stability, making it suitable for installation over concrete, radiant heat, and below-grade spaces. Modern engineered floors look identical to solid hardwood while offering greater versatility.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Can be installed on any level</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />More stable in humidity changes</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Can still be refinished 1-3 times</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Premium Laminate</h3>
              <p className="text-gray-700 mb-4">
                High-quality laminate flooring features a photographic layer that convincingly replicates hardwood, stone, or tile. Modern laminates are incredibly durable, scratch-resistant, and affordable. They're an excellent choice for high-traffic areas, homes with pets, or when budget is a primary consideration.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Highly scratch and dent resistant</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Easy maintenance and cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-primary-red flex-shrink-0 mt-1" size={18} />Budget-friendly option</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Installation Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                num: 1,
                title: "Consultation & Material Selection",
                desc: "We meet with you to understand your vision, assess your space, and recommend hardwood options that match your style, budget, and functional requirements. We'll show you samples, discuss species characteristics, finish options, and installation methods."
              },
              {
                num: 2,
                title: "Subfloor Preparation",
                desc: "Proper subfloor preparation is critical for lasting results. We level the subfloor, repair any damage, ensure adequate structural support, and install moisture barriers when needed. This foundation ensures your hardwood performs beautifully for decades."
              },
              {
                num: 3,
                title: "Material Acclimation",
                desc: "Hardwood must acclimate to your home's temperature and humidity before installation. We deliver materials to your property and allow them to adjust for the appropriate period (typically 3-7 days). This prevents expansion, contraction, and gaps after installation."
              },
              {
                num: 4,
                title: "Professional Installation",
                desc: "Our experienced craftsmen install your hardwood using the appropriate method for your material and subfloor. We work with precision, ensuring proper spacing, secure attachment, and flawless alignment. Every board is carefully inspected and placed."
              },
              {
                num: 5,
                title: "Finishing Touches",
                desc: "We install transitions, baseboards, and trim to complete the professional look. For unfinished hardwood, we sand, stain, and apply protective finishes according to your specifications. The result is a stunning floor that looks and performs beautifully."
              },
              {
                num: 6,
                title: "Final Inspection & Care Instructions",
                desc: "We walk through the completed installation with you, ensuring your complete satisfaction. You'll receive detailed care and maintenance instructions to protect your investment and keep your floors looking beautiful."
              }
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Benefits of Professional Hardwood Installation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Timeless Beauty", desc: "Hardwood never goes out of style. Its natural warmth and character enhance any décor and architectural style." },
              { title: "Increases Home Value", desc: "Hardwood flooring is one of the best investments for property value, often returning 70-80% of costs at resale." },
              { title: "Durability & Longevity", desc: "Properly installed and maintained hardwood can last 50-100+ years, outlasting other flooring options many times over." },
              { title: "Easy Maintenance", desc: "Hardwood is simple to clean and doesn't trap dust, allergens, or odors like carpet. Regular sweeping and occasional mopping keep it beautiful." },
              { title: "Improved Air Quality", desc: "Unlike carpet, hardwood doesn't harbor dust mites, pet dander, or allergens, making it ideal for those with allergies or respiratory sensitivities." },
              { title: "Versatile Design Options", desc: "With countless species, stains, finishes, and plank sizes available, you can create exactly the look you want." }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="text-primary-red mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Hardwood Installation FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does hardwood installation take?",
                a: "Most residential hardwood installations take 2-5 days depending on the room size, complexity, and whether finishing is required. We'll provide a specific timeline during consultation."
              },
              {
                q: "Can hardwood be installed in kitchens and bathrooms?",
                a: "While possible, we generally don't recommend solid hardwood in high-moisture areas. Engineered hardwood is a better choice for these spaces due to its superior moisture resistance. We'll assess your specific situation and recommend the best option."
              },
              {
                q: "What's the difference between site-finished and pre-finished hardwood?",
                a: "Pre-finished hardwood arrives with factory-applied stain and protective finish, allowing immediate use after installation. Site-finished hardwood is installed raw, then sanded, stained, and finished on-site. Site-finishing offers more customization and seamless appearance; pre-finished offers faster installation and no sanding dust."
              },
              {
                q: "How do I choose the right hardwood species?",
                a: "Consider durability (Janka hardness rating), appearance (grain pattern and color), and budget. Oak and maple are popular all-purpose choices. Exotic species like Brazilian cherry offer unique looks. We'll guide you based on your traffic levels, pets, style preferences, and budget."
              },
              {
                q: "What's included in your 1-year installation warranty?",
                a: "Our warranty covers installation workmanship including proper material acclimation, correct subfloor preparation, proper fastening, and finish application (if applicable). It doesn't cover damage from excessive moisture, improper maintenance, or normal wear. Material defects are covered by manufacturer warranties."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-8">Serving All of Greater Vancouver</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((city) => (
              <Link key={city} href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                className="text-center p-4 bg-white rounded-lg hover:bg-primary-red hover:text-white transition-colors">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready for Beautiful Hardwood Floors?</h2>
          <p className="text-xl mb-8">Get a free consultation and explore your hardwood options</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Free Quote
            </Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">
              Call (604) 353-6077
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
