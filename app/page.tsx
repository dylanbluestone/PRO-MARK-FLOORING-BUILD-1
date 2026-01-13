import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, Award, Users, Clock, Shield, ArrowRight, Star, MapPin, Layers, Grid3X3, Ruler, Sparkles, BadgeCheck, ThumbsUp, Hammer, TrendingUp, Wrench, Home, Building2 } from 'lucide-react'
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
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hardwood-flooring-vancouver-Promark-Flooring.jpg"
            alt="Professional hardwood floor installation by PROMARK FLOORING in Vancouver"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <span className="text-white text-sm font-medium">20+ Years Experience • 5-Year Warranty</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Vancouver's Leader in <span className="text-red-500">Floor Leveling</span> & Hardwood Installation
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transform your property with professional floor leveling and hardwood installation.
              Serving Greater Vancouver and the Fraser Valley with exceptional craftsmanship.
            </p>

            {/* CTA Buttons - visible with shadow */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+16043536077"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Phone size={20} />
                (604) 353-6077
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="text-green-400" size={24} />
                <span className="text-white font-medium">5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" size={24} />
                <span className="text-white font-medium">Certified Pros</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-red-400" size={24} />
                <span className="text-white font-medium">Local & Family-Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-10 border-y border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                <Award className="text-red-600" size={32} />
              </div>
              <p className="font-semibold text-gray-900">20+ Years</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                <Shield className="text-red-600" size={32} />
              </div>
              <p className="font-semibold text-gray-900">5-Year Warranty</p>
              <p className="text-sm text-gray-600">Floor Leveling</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                <Home className="text-red-600" size={32} />
              </div>
              <p className="font-semibold text-gray-900">Family-Owned</p>
              <p className="text-sm text-gray-600">Local & Trusted</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                <Star className="text-red-600" size={32} />
              </div>
              <p className="font-semibold text-gray-900">5-Star Rated</p>
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Text Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                20+ Years of Flooring Excellence in Vancouver
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded and operated by Mark Biernacki (Marek), PROMARK FLOORING has been the trusted choice for professional floor leveling and hardwood installation across Greater Vancouver and the Fraser Valley for over two decades.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">5-year warranty on floor leveling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Certified & experienced professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Family-owned & locally operated</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Serving residential & commercial clients</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/PROMARK-FLOORING-floor-leveling-Vancouver-13.jpg"
                  alt="Professional floor leveling work by PROMARK FLOORING in Vancouver"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative corners */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section: Image Left, Text Right */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - LEFT */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-7.jpg"
                  alt="Expert hardwood flooring installation in Vancouver by PROMARK FLOORING"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-2xl -z-10" />
            </div>

            {/* Text - RIGHT */}
            <div className="order-1 lg:order-2">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Transforming Floors Across Greater Vancouver
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We specialize in transforming uneven, damaged, or outdated floors into beautiful, functional surfaces that enhance your property's value and appeal.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a homeowner looking to upgrade your living space, a business owner needing commercial flooring solutions, or a contractor seeking a reliable flooring partner, we deliver results that exceed expectations.
              </p>
              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Our Floor Leveling Process</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From assessment to completion, we ensure every step is handled with precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Free Assessment</h3>
                <p className="text-gray-400 leading-relaxed">We inspect your space and identify the best solution for your floors.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-600/50" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Preparation</h3>
                <p className="text-gray-400 leading-relaxed">We clean, repair cracks, and prepare the subfloor for leveling.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-600/50" />
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Precision Leveling</h3>
                <p className="text-gray-400 leading-relaxed">Using self-leveling compounds, we create a perfectly smooth surface.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-600/50" />
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Check</h3>
                <p className="text-gray-400 leading-relaxed">Final walkthrough ensures everything meets our high standards.</p>
              </div>
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
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">20+ Years of Experience</h3>
              <p className="text-gray-700">
                Over two decades of hands-on experience means we've encountered and solved every flooring challenge imaginable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry-Leading Warranties</h3>
              <p className="text-gray-700">
                Our 5-year warranty on floor leveling demonstrates our confidence in delivering lasting, high-quality results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family-Owned & Local</h3>
              <p className="text-gray-700">
                As a family-owned business rooted in Vancouver, we treat every project like it's our own home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <BadgeCheck className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
              <p className="text-gray-700">
                Our team consists of certified, experienced flooring professionals who stay current with the latest techniques and materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Residential & Commercial</h3>
              <p className="text-gray-700">
                From single-family homes to large commercial properties, we have the expertise to handle projects of any size.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <ThumbsUp className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Consultation & Quote</h3>
              <p className="text-gray-700">
                We offer complimentary on-site consultations and detailed quotes with no obligation. Transparent pricing guaranteed.
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Recent Projects</h2>
            <p className="text-lg text-gray-600 mt-4">See the PROMARK FLOORING difference</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/hardwood-flooring-vancouver-Promark-Flooring-2.jpg"
                alt="Beautiful hardwood flooring installation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-floor-leveling-Vancouver-17.jpg"
                alt="Professional floor leveling"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-stairs-11.jpg"
                alt="Expert staircase installation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-hardwood-flooring-13.jpg"
                alt="Quality hardwood floors"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-floor-leveling-Vancouver-14.jpg"
                alt="Floor leveling expertise"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-stairs-14.jpg"
                alt="Beautiful staircase work"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-hardwood-flooring-installation-Vancouver-10.jpg"
                alt="Hardwood installation project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow">
              <Image
                src="/assets/PROMARK-FLOORING-vinyl-flooring-vancouver-11.jpg"
                alt="Vinyl flooring installation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg">
              View Full Gallery
              <ArrowRight size={20} />
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
