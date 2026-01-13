export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PROMARK FLOORING",
  "image": "/assets/logo.png", // TODO: Update with actual logo path after image analysis
  "@id": "https://promarkflooring.com", // TODO: Update with actual domain when available
  "url": "https://promarkflooring.com",
  "telephone": "+16043536077",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3225 Commercial Dr",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "postalCode": "V5N 4E5",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.2508,
    "longitude": -123.0693
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    // TODO: Add social media links when available
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "15"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Vancouver, BC"
    },
    {
      "@type": "City",
      "name": "North Vancouver, BC"
    },
    {
      "@type": "City",
      "name": "West Vancouver, BC"
    },
    {
      "@type": "City",
      "name": "Burnaby, BC"
    },
    {
      "@type": "City",
      "name": "Surrey, BC"
    },
    {
      "@type": "City",
      "name": "Delta, BC"
    },
    {
      "@type": "City",
      "name": "Langley, BC"
    },
    {
      "@type": "City",
      "name": "Port Coquitlam, BC"
    },
    {
      "@type": "City",
      "name": "Maple Ridge, BC"
    },
    {
      "@type": "City",
      "name": "Mission, BC"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Flooring Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Floor Leveling",
          "description": "Professional floor leveling services with 5-year warranty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hardwood Flooring Installation",
          "description": "Expert hardwood flooring installation with 1-year warranty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stairs Installation",
          "description": "Professional staircase installation and renovation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Floor Repair & Maintenance",
          "description": "Floor repair and maintenance services for all flooring types"
        }
      }
    ]
  }
};

export const ServiceSchema = (serviceName: string, description: string, areaServed: string[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": "PROMARK FLOORING",
    "telephone": "+16043536077",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3225 Commercial Dr",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V5N 4E5",
      "addressCountry": "CA"
    }
  },
  "description": description,
  "areaServed": areaServed.map(area => ({
    "@type": "City",
    "name": area
  }))
});

export const FAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
