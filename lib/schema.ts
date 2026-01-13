// Structured Data (JSON-LD) Schema Markup for PROMARK FLOORING
// These schemas help search engines understand the business and improve SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PROMARK FLOORING',
  alternateName: 'Pro Mark Flooring',
  url: 'https://promarkflooring.com',
  logo: 'https://promarkflooring.com/images/logo.png',
  description: 'Vancouver\'s premier flooring craftsmen specializing in precision floor leveling with 5-year warranty and luxury hardwood installation. 20+ years of excellence serving Greater Vancouver & Fraser Valley.',
  foundingDate: '2004',
  founder: {
    '@type': 'Person',
    name: 'Mark Biernacki',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-604-353-6077',
    contactType: 'customer service',
    email: 'promarkflooring@hotmail.com',
    availableLanguage: ['English'],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.2827,
        longitude: -123.1207,
      },
      geoRadius: '50000',
    },
  },
  sameAs: [
    'https://www.facebook.com/promarkflooring',
    'https://www.instagram.com/promarkflooring',
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://promarkflooring.com/#business',
  name: 'PROMARK FLOORING',
  alternateName: 'Pro Mark Flooring',
  description: 'Premium floor leveling and hardwood installation services in Greater Vancouver. Family-owned with 20+ years experience and industry-leading 5-year warranty.',
  url: 'https://promarkflooring.com',
  telephone: '+1-604-353-6077',
  email: 'promarkflooring@hotmail.com',
  priceRange: '$$',
  image: [
    'https://promarkflooring.com/images/hero-hardwood.jpg',
    'https://promarkflooring.com/images/gallery/project-1.jpg',
    'https://promarkflooring.com/images/gallery/project-2.jpg',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3225 Commercial Dr',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    postalCode: 'V5N 4E5',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.2827,
    longitude: -123.1207,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Vancouver', '@id': 'https://promarkflooring.com/service-areas/vancouver' },
    { '@type': 'City', name: 'North Vancouver', '@id': 'https://promarkflooring.com/service-areas/north-vancouver' },
    { '@type': 'City', name: 'West Vancouver', '@id': 'https://promarkflooring.com/service-areas/west-vancouver' },
    { '@type': 'City', name: 'Burnaby', '@id': 'https://promarkflooring.com/service-areas/burnaby' },
    { '@type': 'City', name: 'Surrey', '@id': 'https://promarkflooring.com/service-areas/surrey' },
    { '@type': 'City', name: 'Delta', '@id': 'https://promarkflooring.com/service-areas/delta' },
    { '@type': 'City', name: 'Langley', '@id': 'https://promarkflooring.com/service-areas/langley' },
    { '@type': 'City', name: 'Port Coquitlam', '@id': 'https://promarkflooring.com/service-areas/port-coquitlam' },
    { '@type': 'City', name: 'Maple Ridge', '@id': 'https://promarkflooring.com/service-areas/maple-ridge' },
    { '@type': 'City', name: 'Mission', '@id': 'https://promarkflooring.com/service-areas/mission' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Flooring Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Floor Leveling',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self-Leveling Compound Application' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Floor Grinding' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Subfloor Correction' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foundation Settlement Repair' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Hardwood Installation',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solid Hardwood Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engineered Hardwood Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laminate Flooring Installation' } },
        ],
      },
    ],
  },
}

// Floor Leveling Service Schema
export const floorLevelingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://promarkflooring.com/services/floor-leveling#service',
  name: 'Professional Floor Leveling Services',
  description: 'Industry-leading floor leveling services with 5-year warranty. Self-leveling compounds, precision grinding, and subfloor correction for residential and commercial properties.',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://promarkflooring.com/#business',
  },
  serviceType: 'Floor Leveling',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.2827,
      longitude: -123.1207,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Floor Leveling Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Self-Leveling Compound Application',
          description: 'Professional application of self-leveling compounds to create perfectly flat surfaces.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Concrete Floor Grinding',
          description: 'Precision grinding of concrete floors to remove high spots and create even surfaces.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Subfloor Correction',
          description: 'Complete subfloor assessment and correction for wood and concrete substrates.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Foundation Settlement Repair',
          description: 'Addressing floor level issues caused by foundation settlement.',
        },
      },
    ],
  },
  termsOfService: 'https://promarkflooring.com/warranty',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'CAD',
    },
  },
}

// Hardwood Installation Service Schema
export const hardwoodInstallationServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://promarkflooring.com/services/hardwood-installation#service',
  name: 'Premium Hardwood Floor Installation',
  description: 'Expert hardwood flooring installation services in Greater Vancouver. Solid hardwood, engineered wood, and premium laminate installation with 1-year warranty.',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://promarkflooring.com/#business',
  },
  serviceType: 'Hardwood Flooring Installation',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.2827,
      longitude: -123.1207,
    },
    geoRadius: '50000',
  },
}

// Staircase Service Schema
export const staircaseServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://promarkflooring.com/services/stairs#service',
  name: 'Staircase Installation & Renovation',
  description: 'Professional staircase installation, repair, and refinishing services. Transform your stairs with custom hardwood treads and risers.',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://promarkflooring.com/#business',
  },
  serviceType: 'Staircase Installation',
}

// Floor Repair Service Schema
export const floorRepairServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://promarkflooring.com/services/repair-maintenance#service',
  name: 'Floor Repair & Maintenance',
  description: 'Comprehensive floor repair and maintenance services including hardwood refinishing, scratch repair, water damage restoration, and subfloor repairs.',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://promarkflooring.com/#business',
  },
  serviceType: 'Floor Repair',
}

// FAQ Schema Generator
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// Service Area Schema Generator
export const generateServiceAreaSchema = (cityName: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `https://promarkflooring.com/service-areas/${slug}#service`,
  name: `Floor Leveling & Hardwood Installation in ${cityName}`,
  description: `Professional flooring services in ${cityName}, BC. Floor leveling with 5-year warranty, hardwood installation, stairs, and repairs. Local expertise and fast response times.`,
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://promarkflooring.com/#business',
  },
  areaServed: {
    '@type': 'City',
    name: cityName,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'British Columbia',
    },
  },
  serviceType: ['Floor Leveling', 'Hardwood Installation', 'Staircase Services', 'Floor Repair'],
})

// Review Schema
export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://promarkflooring.com/#business',
    name: 'PROMARK FLOORING',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  author: {
    '@type': 'Person',
    name: 'Local Customer',
  },
  reviewBody: 'Excellent floor leveling work. The 5-year warranty gave us peace of mind. Highly recommended!',
}

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://promarkflooring.com/#website',
  url: 'https://promarkflooring.com',
  name: 'PROMARK FLOORING',
  description: 'Vancouver\'s premier flooring company specializing in floor leveling and hardwood installation.',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://promarkflooring.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://promarkflooring.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// Gallery Image Schema Generator
export const generateGalleryImageSchema = (images: { url: string; caption: string; alt: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'PROMARK FLOORING Project Gallery',
  description: 'View our portfolio of completed floor leveling and hardwood installation projects.',
  image: images.map((img) => ({
    '@type': 'ImageObject',
    contentUrl: img.url,
    caption: img.caption,
    description: img.alt,
  })),
})

// Helper function to stringify schema for script tag
export const schemaToScript = (schema: object) => JSON.stringify(schema)
