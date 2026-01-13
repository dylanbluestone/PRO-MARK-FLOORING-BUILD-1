export const defaultSEO = {
  titleTemplate: '%s | PROMARK FLOORING - Vancouver Floor Leveling & Hardwood Installation',
  defaultTitle: 'PROMARK FLOORING - Vancouver Floor Leveling & Hardwood Installation',
  description: 'Vancouver\'s leader in professional floor leveling and hardwood installation. 20+ years experience, 5-year warranty on floor leveling. Serving Greater Vancouver and Fraser Valley.',
  canonical: 'https://promarkflooring.com', // TODO: Update with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://promarkflooring.com',
    siteName: 'PROMARK FLOORING',
    title: 'PROMARK FLOORING - Vancouver Floor Leveling & Hardwood Installation',
    description: 'Vancouver\'s leader in professional floor leveling and hardwood installation. 20+ years experience, serving Greater Vancouver.',
    images: [
      {
        url: '/assets/og-image.jpg', // TODO: Create this image: 1200x630px
        width: 1200,
        height: 630,
        alt: 'PROMARK FLOORING - Professional Floor Leveling and Hardwood Installation',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    title: 'PROMARK FLOORING - Vancouver Floor Leveling',
    description: 'Professional floor leveling and hardwood installation in Greater Vancouver. 20+ years experience.',
    image: '/assets/twitter-image.jpg', // TODO: Create this image
  },
};

export const pageSEO = {
  home: {
    title: 'Vancouver\'s Leader in Floor Leveling & Hardwood Installation',
    description: 'PROMARK FLOORING offers expert floor leveling (5-year warranty) and hardwood installation (1-year warranty) in Vancouver, BC and Fraser Valley. 20+ years experience. Free consultation.',
    keywords: 'floor leveling vancouver, hardwood flooring installation vancouver, floor preparation bc, concrete floor leveling, residential floor leveling, commercial floor leveling'
  },
  floorLeveling: {
    title: 'Professional Floor Leveling Services in Vancouver | 5-Year Warranty',
    description: 'Expert floor leveling for residential and commercial properties in Vancouver, BC. Self-leveling compounds, concrete grinding, subfloor correction. 5-year warranty. Free quotes.',
    keywords: 'floor leveling vancouver, self leveling vancouver, concrete leveling bc, subfloor leveling, floor preparation vancouver, uneven floor repair'
  },
  hardwoodInstallation: {
    title: 'Hardwood Flooring Installation Vancouver | Expert Craftsmen',
    description: 'Professional hardwood flooring installation in Greater Vancouver. Solid hardwood, engineered hardwood, laminate. Expert installation with 1-year warranty. Free consultation.',
    keywords: 'hardwood flooring installation vancouver, hardwood floors bc, engineered hardwood installation, solid wood flooring, laminate flooring vancouver, floor installation'
  },
  stairs: {
    title: 'Staircase Installation & Renovation Vancouver | PROMARK FLOORING',
    description: 'Professional staircase installation, repair, and renovation services in Vancouver, BC. Transform your stairs with expert craftsmanship. 20+ years experience.',
    keywords: 'stair installation vancouver, staircase renovation bc, hardwood stairs, stair repair vancouver, staircase refinishing'
  },
  repair: {
    title: 'Floor Repair & Maintenance Vancouver | Professional Service',
    description: 'Expert floor repair and maintenance services in Vancouver. Hardwood refinishing, damage repair, surface restoration. Quality workmanship guaranteed.',
    keywords: 'floor repair vancouver, hardwood repair bc, floor maintenance vancouver, floor refinishing, damage repair flooring'
  },
  gallery: {
    title: 'Project Gallery - Before & After Flooring Transformations',
    description: 'View our portfolio of floor leveling and hardwood installation projects across Greater Vancouver. See the PROMARK FLOORING difference.',
    keywords: 'flooring gallery vancouver, before after floor leveling, hardwood installation photos, flooring portfolio bc'
  },
  faq: {
    title: 'Frequently Asked Questions About Floor Leveling & Hardwood Installation',
    description: 'Find answers to common questions about floor leveling, hardwood installation, warranties, pricing, and more. Expert advice from Vancouver flooring professionals.',
    keywords: 'floor leveling faq, hardwood flooring questions, flooring cost vancouver, floor leveling warranty'
  },
  contact: {
    title: 'Contact Us - Free Consultation & Quote',
    description: 'Contact PROMARK FLOORING for a free consultation and quote. Serving Vancouver, North Shore, Fraser Valley. Call (604) 353-6077 or request a quote online.',
    keywords: 'contact flooring contractor vancouver, free flooring quote bc, floor leveling consultation'
  },
  residential: {
    title: 'Residential Flooring Services Vancouver | Homes & Condos',
    description: 'Professional residential flooring services in Vancouver. Floor leveling, hardwood installation, stairs for homes, condos, and townhouses. Family-owned and trusted.',
    keywords: 'residential flooring vancouver, home floor leveling, condo flooring bc, house hardwood installation'
  },
  commercial: {
    title: 'Commercial Flooring Services Vancouver | Businesses & Properties',
    description: 'Commercial floor leveling and installation services in Vancouver. Offices, retail spaces, warehouses, and commercial properties. Minimal downtime, quality results.',
    keywords: 'commercial flooring vancouver, business floor leveling, warehouse flooring bc, retail floor installation'
  },
};

// Service Area SEO Template Generator
export const generateServiceAreaSEO = (cityName: string) => ({
  title: `Floor Leveling & Hardwood Installation in ${cityName}, BC | PROMARK FLOORING`,
  description: `Professional floor leveling and hardwood installation services in ${cityName}, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for ${cityName} residents.`,
  keywords: `floor leveling ${cityName}, hardwood flooring ${cityName}, flooring contractor ${cityName} bc, ${cityName} floor installation`
});
