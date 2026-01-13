import Link from 'next/link'
import { Phone, CheckCircle, Award, Users, Clock, Shield, ArrowRight, Star } from 'lucide-react'
import { LocalBusinessSchema } from '@/lib/schema-markup'

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        {/* TODO: Add hero background image from /assets after image analysis */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Vancouver's Leader in Floor Leveling & Hardwood Installation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your property with professional floor leveling and hardwood installation. 20+ years of experience, industry-leading warranties, and exceptional craftsmanship.
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

      {/* Trust Badges */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Award className="text-primary-red mb-2" size={40} />
              <p className="font-semibold">20+ Years</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-primary-red mb-2" size={40} />
              <p className="font-semibold">5-Year Warranty</p>
              <p className="text-sm text-gray-600">Floor Leveling</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-primary-red mb-2" size={40} />
              <p className="font-semibold">Family-Owned</p>
              <p className="text-sm text-gray-600">Local & Trusted</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="text-primary-red mb-2" size={40} />
              <p className="font-semibold">5-Star Rated</p>
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Welcome to PROMARK FLOORING</h2>
            <p className="text-lg text-gray-700 mb-4">
              For over 20 years, PROMARK FLOORING has been the trusted choice for professional floor leveling and hardwood installation across Greater Vancouver and the Fraser Valley. Founded and operated by Mark Biernacki (Marek), our company combines decades of hands-on experience with a commitment to exceptional craftsmanship and customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in transforming uneven, damaged, or outdated floors into beautiful, functional surfaces that enhance your property's value and appeal. Whether you're a homeowner looking to upgrade your living space, a business owner needing commercial flooring solutions, or a contractor seeking a reliable flooring partner, we deliver results that exceed expectations.
            </p>
            <p className="text-lg text-gray-700">
              Serving Vancouver, North Vancouver, West Vancouver, Burnaby, Surrey, Delta, Langley, Port Coquitlam, Maple Ridge, Mission, and surrounding areas, we bring local expertise and personalized service to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Our Professional Services</h2>
            <p className="text-lg text-gray-600 mt-4">Comprehensive flooring solutions for residential and commercial properties</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Floor Leveling */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Floor Leveling</h3>
              <div className="flex items-start gap-2 mb-3">
                <Shield className="text-primary-red flex-shrink-0 mt-1" size={20} />
                <p className="font-semibold text-primary-red">Industry-Leading 5-Year Warranty</p>
              </div>
              <p className="text-gray-700 mb-4">
                Uneven floors can cause serious problems - from cracked tiles and squeaky hardwood to doors that won't close properly. Our professional floor leveling service corrects subfloor irregularities using state-of-the-art self-leveling compounds and precision grinding techniques. We handle concrete floors, wood subfloors, and everything in between, ensuring a perfectly level surface ready for your chosen flooring material.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're dealing with foundation settlement, water damage, or age-related deterioration, our floor leveling expertise creates the solid, level foundation your flooring needs to last for decades. Our 5-year warranty demonstrates our confidence in delivering lasting results.
              </p>
              <Link href="/services/floor-leveling" className="text-primary-red font-semibold inline-flex items-center hover:text-primary-red-dark">
                Learn More About Floor Leveling <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Hardwood Installation */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hardwood Installation</h3>
              <div className="flex items-start gap-2 mb-3">
                <Shield className="text-primary-red flex-shrink-0 mt-1" size={20} />
                <p className="font-semibold text-primary-red">1-Year Installation Warranty</p>
              </div>
              <p className="text-gray-700 mb-4">
                Transform your space with the timeless beauty and durability of hardwood flooring. We install solid hardwood, engineered hardwood, and high-quality laminate flooring with meticulous attention to detail. Our expert craftsmen ensure proper acclimation, precise installation, and flawless finishing that brings out the natural beauty of your chosen wood species.
              </p>
              <p className="text-gray-700 mb-4">
                From classic oak and maple to exotic hardwoods, we work with premium materials and employ professional installation techniques including nail-down, glue-down, and floating floor methods. The result is stunning, long-lasting flooring that adds warmth, elegance, and value to your property.
              </p>
              <Link href="/services/hardwood-installation" className="text-primary-red font-semibold inline-flex items-center hover:text-primary-red-dark">
                Explore Hardwood Options <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Stairs */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Staircase Installation & Repair</h3>
              <p className="text-gray-700 mb-4">
                Your staircase is often the focal point of your home. We specialize in installing beautiful hardwood stairs, refinishing existing staircases, and repairing damaged treads and risers. Our staircase work combines structural integrity with aesthetic excellence, creating safe, stunning stairs that make a lasting impression.
              </p>
              <Link href="/services/stairs" className="text-primary-red font-semibold inline-flex items-center hover:text-primary-red-dark">
                View Staircase Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Repair & Maintenance */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Floor Repair & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Extend the life of your floors with professional repair and maintenance services. We fix scratches, gouges, water damage, and structural issues. From hardwood refinishing to subfloor repairs, we restore your floors to their original beauty and functionality, saving you the cost of complete replacement.
              </p>
              <Link href="/services/repair-maintenance" className="text-primary-red font-semibold inline-flex items-center hover:text-primary-red-dark">
                Repair Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Why Choose PROMARK FLOORING?</h2>
            <p className="text-lg text-gray-600 mt-4">Experience the difference of working with true flooring professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="text-primary-red mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">20+ Years of Experience</h3>
              <p className="text-gray-700">
                Over two decades of hands-on experience means we've encountered and solved every flooring challenge imaginable. We bring proven expertise to every project, ensuring reliable, high-quality results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="text-primary-red mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Industry-Leading Warranties</h3>
              <p className="text-gray-700">
                Our 5-year warranty on floor leveling and 1-year warranty on hardwood installation demonstrate our confidence in our workmanship. We stand behind our work with guarantees that provide real peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="text-primary-red mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Family-Owned & Local</h3>
              <p className="text-gray-700">
                As a family-owned business rooted in the Vancouver community, we treat every project like it's our own home. You'll work directly with Mark, ensuring personalized service and attention to detail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="text-primary-red mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
              <p className="text-gray-700">
                Our team consists of certified, experienced flooring professionals who stay current with the latest techniques, materials, and industry best practices. Quality craftsmanship is our standard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="text-primary-red mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Residential & Commercial</h3>
              <p className="text-gray-700">
                From single-family homes to large commercial properties, we have the expertise and capacity to handle projects of any size. Our versatility makes us your one-stop flooring solution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="text-primary-red mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Free Consultation & Quote</h3>
              <p className="text-gray-700">
                We offer complimentary on-site consultations and detailed quotes with no obligation. Get expert advice and transparent pricing before making any commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0 on Google</span>
            </div>
          </div>

          {/* TODO: Replace with actual Google Reviews component after Google Business Profile API integration */}
          <div className="bg-gray-50 p-12 rounded-lg text-center">
            <p className="text-gray-600 mb-4">Google Reviews will be displayed here once API integration is complete</p>
            <p className="text-sm text-gray-500">Reviews will be pulled from Google Business Profile API</p>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=promark+flooring"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Leave Us a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Recent Projects</h2>
            <p className="text-lg text-gray-600 mt-4">See the PROMARK FLOORING difference</p>
          </div>

          {/* TODO: Replace with actual images from /assets after image analysis */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-sm">Project Image {item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Serving Greater Vancouver & Fraser Valley</h2>
            <p className="text-lg text-gray-600 mt-4">Professional flooring services across the Lower Mainland</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {['Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'Surrey', 'Delta', 'Langley', 'Port Coquitlam', 'Maple Ridge', 'Mission'].map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-red"
              >
                <p className="font-semibold text-gray-800">{city}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Plus surrounding areas - Call to confirm service availability in your location</p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">How long does floor leveling take?</summary>
              <p className="mt-4 text-gray-700">
                Most residential floor leveling projects take 1-3 days depending on the size and condition of the area. The self-leveling compound typically cures within 24-48 hours before flooring installation can begin.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">Do you offer free estimates?</summary>
              <p className="mt-4 text-gray-700">
                Yes! We provide free, no-obligation on-site consultations and detailed written quotes. We'll assess your project, answer your questions, and provide transparent pricing.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">What's included in your 5-year floor leveling warranty?</summary>
              <p className="mt-4 text-gray-700">
                Our 5-year warranty covers workmanship and materials for floor leveling services. If you experience any issues with the leveling work within 5 years, we'll make it right at no additional cost.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-lg cursor-pointer">Can you work on both residential and commercial properties?</summary>
              <p className="mt-4 text-gray-700">
                Absolutely. We serve both residential clients (homes, condos, townhomes) and commercial clients (offices, retail spaces, warehouses). Our experience spans all property types and sizes.
              </p>
            </details>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary-red font-semibold inline-flex items-center hover:text-primary-red-dark">
              View All FAQs <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Transform Your Floors?</h2>
          <p className="text-xl mb-8 text-gray-100">Get a free consultation and quote from Vancouver's trusted flooring experts</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Request Free Quote
            </Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors inline-block">
              Call (604) 353-6077
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Local & Trusted</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
