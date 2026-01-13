import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { images, getImagesByCategory } from '@/lib/image-manifest'

export const metadata: Metadata = {
  title: 'Project Gallery - Before & After Flooring Transformations',
  description: 'View our portfolio of floor leveling and hardwood installation projects across Greater Vancouver. See the PROMARK FLOORING difference.',
  keywords: ['flooring gallery vancouver', 'before after floor leveling', 'hardwood installation photos', 'flooring portfolio bc'],
}

export default function GalleryPage() {
  const floorLevelingImages = getImagesByCategory('floor-leveling')
  const hardwoodImages = getImagesByCategory('hardwood')
  const stairsImages = getImagesByCategory('stairs')
  const vinylImages = getImagesByCategory('vinyl')

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom">
          <h1>Project Gallery</h1>
          <p className="text-xl max-w-3xl mb-8">
            Explore our portfolio of floor leveling, hardwood installation, staircase, and flooring projects across Greater Vancouver and Fraser Valley. See the quality and craftsmanship that sets PROMARK FLOORING apart.
          </p>
          <Link href="/quote" className="btn-primary">Get Free Quote</Link>
        </div>
      </section>

      {/* Floor Leveling Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Floor Leveling Projects</h2>
            <p className="text-lg text-gray-600 mt-4">Professional floor leveling services with 5-year warranty</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorLevelingImages.map((image) => (
              <div key={image.filename} className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={`/assets/${image.filename}`}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services/floor-leveling" className="text-primary-red font-semibold hover:text-primary-red-dark">
              Learn More About Floor Leveling →
            </Link>
          </div>
        </div>
      </section>

      {/* Hardwood Installation Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Hardwood Flooring Installation</h2>
            <p className="text-lg text-gray-600 mt-4">Beautiful hardwood floors that enhance your space</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwoodImages.map((image) => (
              <div key={image.filename} className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={`/assets/${image.filename}`}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services/hardwood-installation" className="text-primary-red font-semibold hover:text-primary-red-dark">
              Explore Hardwood Options →
            </Link>
          </div>
        </div>
      </section>

      {/* Staircase Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Staircase Projects</h2>
            <p className="text-lg text-gray-600 mt-4">Stunning staircases that become the focal point of your home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stairsImages.map((image) => (
              <div key={image.filename} className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={`/assets/${image.filename}`}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services/stairs" className="text-primary-red font-semibold hover:text-primary-red-dark">
              View Staircase Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Vinyl Flooring Gallery */}
      {vinylImages.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2>Vinyl & Other Flooring</h2>
              <p className="text-lg text-gray-600 mt-4">Quality flooring installations for every need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vinylImages.map((image) => (
                <div key={image.filename} className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={`/assets/${image.filename}`}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready for Results Like These?</h2>
          <p className="text-xl mb-8">Get a free quote and transform your floors with PROMARK FLOORING</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Free Quote
            </Link>
            <a href="tel:+16043536077" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors">
              <Phone className="inline mr-2" size={20} />Call (604) 353-6077
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
