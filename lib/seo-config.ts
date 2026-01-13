// Comprehensive SEO Configuration for PROMARK FLOORING
// Premium flooring company serving Greater Vancouver & Fraser Valley

export const siteConfig = {
  name: 'PROMARK FLOORING',
  tagline: 'Vancouver\'s Premier Flooring Craftsmen',
  description: 'Vancouver\'s premier flooring craftsmen specializing in precision floor leveling with 5-year warranty and luxury hardwood installation. 20+ years of excellence serving Greater Vancouver & Fraser Valley.',
  url: 'https://promarkflooring.com',
  phone: '(604) 353-6077',
  phoneHref: 'tel:+16043536077',
  email: 'promarkflooring@hotmail.com',
  address: {
    street: '3225 Commercial Dr',
    city: 'Vancouver',
    province: 'BC',
    postalCode: 'V5N 4E5',
    country: 'Canada',
  },
  hours: 'Monday - Friday, 8AM - 8PM',
  social: {
    facebook: 'https://www.facebook.com/promarkflooring',
    instagram: 'https://www.instagram.com/promarkflooring',
  },
}

export const defaultSEO = {
  titleTemplate: '%s | PROMARK FLOORING - Vancouver\'s Premier Flooring Craftsmen',
  defaultTitle: 'PROMARK FLOORING | Premium Floor Leveling & Hardwood Installation Vancouver',
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'PROMARK FLOORING | Premium Floor Leveling & Hardwood Installation',
    description: 'Vancouver\'s premier flooring craftsmen. 20+ years of excellence, 5-year warranty on floor leveling. Craftsmanship that lasts.',
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'PROMARK FLOORING - Premium Floor Leveling and Hardwood Installation Vancouver',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    title: 'PROMARK FLOORING | Vancouver\'s Premier Flooring Craftsmen',
    description: 'Premium floor leveling with 5-year warranty and luxury hardwood installation. 20+ years serving Greater Vancouver.',
    image: `${siteConfig.url}/images/twitter-image.jpg`,
  },
  additionalMetaTags: [
    { name: 'author', content: 'PROMARK FLOORING' },
    { name: 'publisher', content: 'PROMARK FLOORING' },
    { name: 'geo.region', content: 'CA-BC' },
    { name: 'geo.placename', content: 'Vancouver' },
    { name: 'geo.position', content: '49.2827;-123.1207' },
    { name: 'ICBM', content: '49.2827, -123.1207' },
    { name: 'theme-color', content: '#4A7C59' }, // Forest green
  ],
}

export const pageSEO = {
  home: {
    title: 'Premium Floor Leveling & Hardwood Installation Vancouver',
    description: 'PROMARK FLOORING - Vancouver\'s premier flooring craftsmen. Expert floor leveling with industry-leading 5-year warranty and luxury hardwood installation. 20+ years of excellence. Free consultation.',
    keywords: [
      'floor leveling vancouver',
      'hardwood flooring installation vancouver',
      'premium flooring vancouver bc',
      'concrete floor leveling',
      'residential floor leveling',
      'commercial floor leveling',
      'vancouver flooring contractor',
      'luxury hardwood floors vancouver',
    ].join(', '),
  },
  floorLeveling: {
    title: 'Professional Floor Leveling Services | 5-Year Warranty',
    description: 'Industry-leading floor leveling services in Vancouver, BC. Self-leveling compounds, precision grinding, subfloor correction. 5-year warranty - the best in the industry. Free quotes available.',
    keywords: [
      'floor leveling vancouver',
      'self leveling vancouver',
      'concrete leveling bc',
      'subfloor leveling',
      'floor preparation vancouver',
      'uneven floor repair vancouver',
      '5 year warranty floor leveling',
      'professional floor leveling',
    ].join(', '),
  },
  hardwoodInstallation: {
    title: 'Luxury Hardwood Flooring Installation Vancouver',
    description: 'Premium hardwood flooring installation by master craftsmen. Solid hardwood, engineered hardwood, and luxury laminate. Expert installation with 1-year warranty. Transform your space.',
    keywords: [
      'hardwood flooring installation vancouver',
      'hardwood floors bc',
      'engineered hardwood installation',
      'solid wood flooring vancouver',
      'laminate flooring vancouver',
      'floor installation experts',
      'luxury hardwood vancouver',
    ].join(', '),
  },
  stairs: {
    title: 'Staircase Installation & Renovation Vancouver',
    description: 'Transform your staircase with expert installation and renovation services. Custom hardwood stairs, refinishing, tread replacement. 20+ years of craftsmanship in Vancouver.',
    keywords: [
      'stair installation vancouver',
      'staircase renovation bc',
      'hardwood stairs vancouver',
      'stair repair vancouver',
      'staircase refinishing',
      'custom stairs vancouver',
    ].join(', '),
  },
  repair: {
    title: 'Floor Repair & Maintenance Services Vancouver',
    description: 'Expert floor repair and restoration services. Hardwood refinishing, scratch repair, water damage restoration, subfloor repairs. Quality craftsmanship guaranteed.',
    keywords: [
      'floor repair vancouver',
      'hardwood repair bc',
      'floor maintenance vancouver',
      'floor refinishing',
      'water damage floor repair',
      'hardwood restoration vancouver',
    ].join(', '),
  },
  gallery: {
    title: 'Project Gallery - Flooring Transformations',
    description: 'View our portfolio of premium floor leveling and hardwood installation projects across Greater Vancouver. See the PROMARK FLOORING craftsmanship difference.',
    keywords: [
      'flooring gallery vancouver',
      'before after floor leveling',
      'hardwood installation photos',
      'flooring portfolio bc',
      'floor transformation vancouver',
    ].join(', '),
  },
  quote: {
    title: 'Get Your Free Quote - No Obligation',
    description: 'Request a free, no-obligation quote for your flooring project. Floor leveling, hardwood installation, stairs, and repairs. Fast response within 24-48 hours.',
    keywords: [
      'free flooring quote vancouver',
      'floor leveling estimate',
      'hardwood installation quote',
      'flooring consultation vancouver',
    ].join(', '),
  },
  contact: {
    title: 'Contact Us - Free Consultation',
    description: 'Contact PROMARK FLOORING for expert flooring advice and free consultations. Serving Vancouver, North Shore, Fraser Valley. Call (604) 353-6077.',
    keywords: [
      'contact flooring contractor vancouver',
      'free flooring consultation',
      'vancouver flooring company contact',
    ].join(', '),
  },
  residential: {
    title: 'Residential Flooring Services | Homes & Condos',
    description: 'Premium residential flooring services for Vancouver homes, condos, and townhouses. Floor leveling, hardwood installation, and stairs. Family-owned and trusted since 2004.',
    keywords: [
      'residential flooring vancouver',
      'home floor leveling',
      'condo flooring bc',
      'house hardwood installation',
      'townhouse flooring vancouver',
    ].join(', '),
  },
  commercial: {
    title: 'Commercial Flooring Services | Businesses',
    description: 'Professional commercial flooring services in Vancouver. Offices, retail, warehouses, restaurants. Minimal downtime, maximum quality. Free estimates for businesses.',
    keywords: [
      'commercial flooring vancouver',
      'business floor leveling',
      'warehouse flooring bc',
      'retail floor installation',
      'office flooring vancouver',
    ].join(', '),
  },
  serviceAreas: {
    title: 'Service Areas | Greater Vancouver & Fraser Valley',
    description: 'PROMARK FLOORING serves Vancouver, Burnaby, Surrey, Langley, North Vancouver, West Vancouver, Delta, Port Coquitlam, Maple Ridge, Mission, and surrounding areas.',
    keywords: [
      'flooring service areas vancouver',
      'greater vancouver flooring',
      'fraser valley flooring contractor',
      'lower mainland flooring',
    ].join(', '),
  },
}

// Service Area SEO Template Generator
export const generateServiceAreaSEO = (cityName: string, neighborhoods?: string[]) => {
  const neighborhoodList = neighborhoods ? ` Serving ${neighborhoods.slice(0, 3).join(', ')} and more.` : ''

  return {
    title: `Floor Leveling & Hardwood Installation ${cityName}, BC`,
    description: `Professional floor leveling and hardwood installation in ${cityName}, BC. Local expertise, 5-year warranty, 20+ years experience.${neighborhoodList} Free quotes for ${cityName} residents.`,
    keywords: [
      `floor leveling ${cityName.toLowerCase()}`,
      `hardwood flooring ${cityName.toLowerCase()}`,
      `flooring contractor ${cityName.toLowerCase()} bc`,
      `${cityName.toLowerCase()} floor installation`,
      `premium flooring ${cityName.toLowerCase()}`,
    ].join(', '),
    openGraph: {
      title: `Premium Flooring Services in ${cityName}, BC | PROMARK FLOORING`,
      description: `Expert floor leveling and hardwood installation in ${cityName}. 5-year warranty, 20+ years experience. Your trusted local flooring experts.`,
    },
  }
}

// Industry Page SEO
export const industrySEO = {
  restaurants: {
    title: 'Restaurant & Hospitality Flooring Vancouver',
    description: 'Durable, beautiful flooring solutions for restaurants, cafes, and hospitality venues. Meet health codes, minimize downtime, maximize style.',
    keywords: 'restaurant flooring vancouver, hospitality flooring bc, cafe floor installation, commercial kitchen flooring',
  },
  healthcare: {
    title: 'Healthcare & Medical Facility Flooring Vancouver',
    description: 'Professional flooring for medical offices, clinics, and healthcare facilities. Sanitary, durable, and compliant with health regulations.',
    keywords: 'healthcare flooring vancouver, medical office flooring, clinic floor installation, dental office flooring',
  },
  retail: {
    title: 'Retail Store Flooring Solutions Vancouver',
    description: 'Transform your retail space with premium flooring. Quick installation, minimal business disruption, maximum visual impact.',
    keywords: 'retail flooring vancouver, store floor installation, commercial retail flooring, shop flooring bc',
  },
  office: {
    title: 'Office & Corporate Flooring Vancouver',
    description: 'Professional flooring solutions for offices and corporate environments. Enhance productivity with quality flooring.',
    keywords: 'office flooring vancouver, corporate flooring bc, business floor installation, professional office floors',
  },
}

// Trust Signals for SEO
export const trustSignals = {
  warranty: '5-Year Industry-Leading Warranty',
  experience: '20+ Years of Excellence',
  rating: '5-Star Rated Service',
  local: 'Family-Owned & Locally Operated',
  certified: 'Certified Professional Craftsmen',
  insured: 'Fully Licensed & Insured',
  projects: '500+ Completed Projects',
  satisfaction: '100% Satisfaction Guarantee',
}

// Robots configuration
export const robotsConfig = {
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/private/'],
    },
  ],
  sitemap: `${siteConfig.url}/sitemap.xml`,
}
