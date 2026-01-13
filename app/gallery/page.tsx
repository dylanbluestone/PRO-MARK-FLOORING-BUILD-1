import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, Shield, Award, Star, Camera, Layers, Grid3X3, TrendingUp, Sparkles } from 'lucide-react'
import { getImagesByCategory } from '@/lib/image-manifest'

export const metadata: Metadata = {
  title: 'Project Gallery | Before & After Flooring Transformations | PROMARK',
  description: 'View our portfolio of floor leveling and hardwood installation projects across Greater Vancouver. See the PROMARK FLOORING difference with real before & after photos.',
  keywords: ['flooring gallery vancouver', 'before after floor leveling', 'hardwood installation photos', 'flooring portfolio bc'],
}

interface GallerySectionProps {
  title: string
  subtitle: string
  images: { filename: string; alt: string }[]
  href: string
  linkText: string
  bgColor?: 'white' | 'cream'
  icon: React.ReactNode
  badge?: string
}

function GallerySection({ title, subtitle, images, href, linkText, bgColor = 'white', icon, badge }: GallerySectionProps) {
  if (images.length === 0) return null

  return (
    <section className={`py-16 md:py-20 ${bgColor === 'cream' ? 'bg-cream-50' : 'bg-white'}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2
                  className="text-2xl md:text-3xl text-charcoal-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h2>
                {badge && (
                  <span className="px-2 py-1 bg-forest-100 text-forest-700 text-xs font-semibold rounded-full">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-charcoal-600">{subtitle}</p>
            </div>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-forest-600 font-medium hover:text-forest-700 transition-colors"
          >
            {linkText}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.filename}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-cream-200"
            >
              <Image
                src={`/assets/${image.filename}`}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function GalleryPage() {
  const floorLevelingImages = getImagesByCategory('floor-leveling')
  const hardwoodImages = getImagesByCategory('hardwood')
  const stairsImages = getImagesByCategory('stairs')
  const vinylImages = getImagesByCategory('vinyl')

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-hero.jpg"
            alt="Beautiful flooring projects"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/95 to-charcoal-900/80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-copper-500/20 border border-copper-400/30 rounded-full px-4 py-2 mb-6">
              <Camera size={16} className="text-copper-400" />
              <span className="text-copper-300 text-sm font-medium">Our Work Speaks for Itself</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-cream-50 mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Project
              <span className="text-copper-400 block mt-2">Gallery</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mb-8">
              Explore our portfolio of floor leveling, hardwood installation, and staircase
              projects across Greater Vancouver. See the quality and craftsmanship that sets
              PROMARK FLOORING apart.
            </p>

            <Link href="/quote" className="btn-primary btn-lg">
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal-800 py-5 border-y border-charcoal-700">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-cream-200">
              <Shield className="text-forest-400" size={18} />
              <span className="text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Award className="text-copper-400" size={18} />
              <span className="text-sm font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Star className="text-forest-400" size={18} />
              <span className="text-sm font-medium">Hundreds of Projects</span>
            </div>
            <div className="flex items-center gap-2 text-cream-200">
              <Sparkles className="text-copper-400" size={18} />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Leveling Gallery */}
      <GallerySection
        title="Floor Leveling"
        subtitle="Professional floor leveling with industry-leading 5-year warranty"
        images={floorLevelingImages}
        href="/services/floor-leveling"
        linkText="Learn More About Floor Leveling"
        bgColor="white"
        icon={<Layers className="text-forest-600" size={28} />}
        badge="5-Year Warranty"
      />

      {/* Hardwood Installation Gallery */}
      <GallerySection
        title="Hardwood Installation"
        subtitle="Beautiful hardwood floors that transform your space"
        images={hardwoodImages}
        href="/services/hardwood-installation"
        linkText="Explore Hardwood Options"
        bgColor="cream"
        icon={<Grid3X3 className="text-copper-600" size={28} />}
      />

      {/* Staircase Gallery */}
      <GallerySection
        title="Staircase Projects"
        subtitle="Stunning staircases that become the focal point of your home"
        images={stairsImages}
        href="/services/stairs"
        linkText="View Staircase Services"
        bgColor="white"
        icon={<TrendingUp className="text-forest-600" size={28} />}
      />

      {/* Vinyl & Other Flooring Gallery */}
      <GallerySection
        title="Vinyl & Other Flooring"
        subtitle="Quality flooring installations for every need and budget"
        images={vinylImages}
        href="/services"
        linkText="View All Services"
        bgColor="cream"
        icon={<Sparkles className="text-copper-600" size={28} />}
      />

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-700 to-forest-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready for Results Like These?
          </h2>
          <p className="text-xl text-forest-100 mb-8 max-w-2xl mx-auto">
            Get a free quote and transform your floors with PROMARK FLOORING's
            expert craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-white btn-lg">
              Request Free Quote
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+16043536077" className="btn-ghost btn-lg">
              <Phone size={18} />
              Call (604) 353-6077
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
