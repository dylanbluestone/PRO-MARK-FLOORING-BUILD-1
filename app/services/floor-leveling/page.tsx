import Link from 'next/link'
import { Metadata } from 'next'
import { Shield, CheckCircle, ArrowRight, Phone, Clock, Award } from 'lucide-react'
import { ServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Professional Floor Leveling Services in Vancouver | 5-Year Warranty',
  description: 'Expert floor leveling for residential and commercial properties in Vancouver, BC. Self-leveling compounds, concrete grinding, subfloor correction. 5-year warranty. Free quotes.',
  keywords: ['floor leveling vancouver', 'self leveling vancouver', 'concrete leveling bc', 'subfloor leveling', 'floor preparation vancouver', 'uneven floor repair'],
}

const serviceAreas = ['Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey', 'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission']

export default function FloorLevelingPage() {
  const schema = ServiceSchema(
    'Floor Leveling',
    'Professional floor leveling services with 5-year warranty for residential and commercial properties in Greater Vancouver',
    serviceAreas
  )

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Professional Floor Leveling in Vancouver & Fraser Valley
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform uneven, damaged floors into perfectly level surfaces. Industry-leading 5-year warranty. Over 20 years of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary text-center">
                Get Free Quote
              </Link>
              <a href="tel:+16043536077" className="btn-secondary text-center">
                <Phone className="inline mr-2" size={20} />
                Call (604) 353-6077
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">What is Floor Leveling?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Floor leveling is the critical process of correcting uneven, sloped, or damaged subfloors to create a perfectly flat surface for your finished flooring. Whether you're installing hardwood, tile, laminate, or any other flooring material, a level subfloor is essential for proper installation, longevity, and performance.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Uneven floors aren't just an aesthetic issue—they cause serious problems. Tiles crack, hardwood buckles and squeaks, vinyl develops wrinkles, and doors refuse to close properly. Foundation settlement, water damage, age-related deterioration, and poor original construction all contribute to floor irregularities that worsen over time.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At PROMARK FLOORING, we've spent over 20 years perfecting the art and science of floor leveling. Using state-of-the-art self-leveling compounds, precision concrete grinding, and expert subfloor repair techniques, we correct everything from minor dips to severe slopes. Our work creates the solid, level foundation your new flooring needs to look beautiful and last for decades.
            </p>
            <p className="text-lg text-gray-700">
              Serving residential homes, condos, townhomes, and commercial properties across Greater Vancouver and the Fraser Valley, we bring local expertise and proven results to every floor leveling project. Our industry-leading 5-year warranty demonstrates our confidence in delivering lasting solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose PROMARK for Floor Leveling */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose PROMARK for Floor Leveling?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="text-primary-red mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Industry-Leading 5-Year Warranty</h3>
              <p className="text-gray-700">
                We stand behind our floor leveling work with an exceptional 5-year warranty—one of the best in the industry. This comprehensive warranty covers both workmanship and materials, giving you complete peace of mind. If you experience any issues with our leveling work within 5 years, we'll make it right at no additional cost. Our warranty reflects our confidence in using premium materials, proven techniques, and meticulous quality control.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="text-primary-red mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">20+ Years of Expertise</h3>
              <p className="text-gray-700">
                Since our founding, we've leveled thousands of floors across Greater Vancouver. This extensive experience means we've encountered every type of floor problem—from simple dips to complex foundation issues. We know which techniques and materials work best for each situation, whether it's a concrete slab, wood subfloor, or damaged structural floor. Our expertise saves you time, money, and future headaches.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle className="text-primary-red mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Premium Materials & Techniques</h3>
              <p className="text-gray-700">
                We use only professional-grade self-leveling compounds, moisture barriers, and reinforcement materials from trusted manufacturers. Our technicians are trained in advanced leveling techniques including self-leveling overlays, concrete grinding, structural repairs, and moisture mitigation. We assess each project individually to determine the optimal approach for your specific floor conditions and requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Clock className="text-primary-red mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Efficient & Professional Process</h3>
              <p className="text-gray-700">
                We respect your time and property. Most residential floor leveling projects are completed in 1-3 days, with the leveling compound curing within 24-48 hours. We protect your home, work cleanly, and communicate clearly throughout the process. You'll know exactly what to expect, when we'll be working, and when your new flooring installation can begin. Our goal is a smooth, stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Floor Leveling Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Floor Leveling Process</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Initial Assessment & Consultation</h3>
                <p className="text-gray-700">
                  We begin with a thorough on-site inspection of your floors. Using precision laser levels and moisture meters, we measure the extent of unevenness, identify problem areas, and assess subfloor condition. We check for moisture issues, structural damage, and other factors that could affect the leveling process. You'll receive a detailed explanation of what we find, our recommended solution, and a transparent written quote.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Surface Preparation</h3>
                <p className="text-gray-700">
                  Proper preparation is critical for lasting results. We remove existing flooring if necessary, then clean and prepare the subfloor surface. This includes removing debris, grinding down high spots, repairing cracks or damage, and addressing any structural issues. For concrete floors, we may grind or shot blast the surface to ensure proper adhesion. Wood subfloors are reinforced and repaired as needed. We also install moisture barriers when required to prevent future problems.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Primer Application</h3>
                <p className="text-gray-700">
                  We apply a professional bonding primer to the prepared surface. This crucial step ensures the self-leveling compound adheres properly and performs as designed. The primer also helps control absorption rates and prevents air bubbles from forming during the pour.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Leveling Compound Application</h3>
                <p className="text-gray-700">
                  Using premium self-leveling compounds mixed to exact specifications, we pour and spread the material across your floor. The compound naturally seeks its own level, filling low spots and creating a perfectly flat surface. Our technicians use specialized tools to guide the flow, ensure even coverage, and achieve the precise thickness needed. For larger areas or severe unevenness, we may apply multiple layers.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Curing & Quality Control</h3>
                <p className="text-gray-700">
                  The leveling compound typically cures within 24-48 hours, though we may recommend longer cure times for specific products or conditions. During this period, we protect the surface and monitor the curing process. Once cured, we perform final laser level measurements to verify the floor meets our strict flatness standards and your project requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Final Inspection & Handoff</h3>
                <p className="text-gray-700">
                  We conduct a comprehensive final inspection with you, demonstrating the level surface and answering any questions. You'll receive documentation of the work completed, warranty information, and guidance on next steps for your flooring installation. The floor is now ready for tile, hardwood, vinyl, or any other flooring material you've chosen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Floor Leveling Transformations</h2>
          {/* TODO: Add before/after images from /assets after image analysis */}
          <div className="bg-white p-12 rounded-lg text-center">
            <p className="text-gray-600 mb-4">Before & After gallery will be displayed here once images are provided</p>
            <p className="text-sm text-gray-500">Images showing floor leveling projects from uneven to perfectly level</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Benefits of Professional Floor Leveling</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <CheckCircle className="text-primary-red mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Prevents Flooring Failure</h3>
              <p className="text-gray-700">
                Level subfloors prevent cracked tiles, squeaky hardwood, wrinkled vinyl, and premature flooring wear. Your investment in new flooring is protected when installed on a properly leveled surface.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="text-primary-red mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Increases Property Value</h3>
              <p className="text-gray-700">
                Level floors are a key selling point. Addressing floor issues now prevents them from becoming deal-breakers during home inspections and adds value to your property.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="text-primary-red mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Improves Safety</h3>
              <p className="text-gray-700">
                Uneven floors create trip hazards, especially for children and elderly family members. Level floors improve accessibility and reduce injury risk throughout your home or business.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="text-primary-red mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Enhances Aesthetics</h3>
              <p className="text-gray-700">
                Flooring looks better on level surfaces. Tile patterns align properly, hardwood planks lay flat, and the overall appearance is professional and polished.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="text-primary-red mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Long-Term Cost Savings</h3>
              <p className="text-gray-700">
                Investing in proper floor leveling now saves thousands in future repairs. It's far less expensive than replacing failed flooring or dealing with structural issues down the line.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="text-primary-red mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Enables Quality Installation</h3>
              <p className="text-gray-700">
                Professional flooring installers require level surfaces to do their best work. A leveled floor ensures your new flooring is installed correctly and performs as designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Common Questions About Floor Leveling</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">How do I know if my floor needs leveling?</summary>
              <p className="mt-4 text-gray-700">
                Signs include visible slopes or dips, balls or marbles rolling across the floor, gaps under furniture, cracked tiles, squeaky or bouncy hardwood, doors that won't close properly, and visible cracks in the subfloor. If you're planning to install new flooring, a level subfloor is essential regardless of visible issues.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">How long does the floor leveling process take?</summary>
              <p className="mt-4 text-gray-700">
                Most residential projects take 1-3 days from start to finish. The actual pour takes just a few hours, but proper preparation and curing time are essential. The self-leveling compound typically cures enough for foot traffic within 24 hours and is ready for flooring installation within 24-48 hours, though specific cure times depend on the product and conditions.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">Can you level floors in occupied homes or businesses?</summary>
              <p className="mt-4 text-gray-700">
                Yes. While the work area must be cleared and inaccessible during the pour and initial curing (usually 24 hours), we can work in phases to minimize disruption. For businesses, we often schedule work during off-hours or weekends. We protect surrounding areas and work cleanly to minimize impact on your daily operations.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">What types of subfloors can be leveled?</summary>
              <p className="mt-4 text-gray-700">
                We level concrete slabs, wood subfloors, existing tile floors (when appropriate), and various other substrates. Each material requires different preparation and leveling techniques. During our assessment, we'll determine the best approach for your specific subfloor type and condition.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">Will floor leveling raise the floor height significantly?</summary>
              <p className="mt-4 text-gray-700">
                The height increase depends on how much leveling is needed. For minor corrections, we may add only 1/8" to 1/4". More significant unevenness may require 1/2" to 1" or more in low areas. We'll measure your floor and discuss any height change implications during our consultation, including how it affects door clearances, transitions, and appliances.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">Do you handle moisture issues before leveling?</summary>
              <p className="mt-4 text-gray-700">
                Absolutely. Moisture testing is a critical part of our assessment. If we detect moisture issues, we'll identify the source and recommend solutions before leveling. This might include moisture barriers, sealers, or addressing external water sources. Proper moisture management is essential for lasting results and is included in our warranty.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Floor Leveling Services Across Greater Vancouver</h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            We provide professional floor leveling services throughout the Lower Mainland
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-red hover:text-white transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Level Your Floors?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Get a free consultation and quote with our 5-year warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Request Free Quote
            </Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors inline-block">
              Call (604) 353-6077
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/services/hardwood-installation" className="card text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Hardwood Installation</h3>
              <p className="text-gray-600 mb-4">Professional hardwood flooring installation on your newly leveled floors</p>
              <span className="text-primary-red font-semibold inline-flex items-center">
                Learn More <ArrowRight className="ml-2" size={18} />
              </span>
            </Link>

            <Link href="/services/repair-maintenance" className="card text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Floor Repair</h3>
              <p className="text-gray-600 mb-4">Subfloor repairs and structural corrections</p>
              <span className="text-primary-red font-semibold inline-flex items-center">
                Learn More <ArrowRight className="ml-2" size={18} />
              </span>
            </Link>

            <Link href="/industries/commercial" className="card text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Commercial Leveling</h3>
              <p className="text-gray-600 mb-4">Large-scale floor leveling for commercial properties</p>
              <span className="text-primary-red font-semibold inline-flex items-center">
                Learn More <ArrowRight className="ml-2" size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
