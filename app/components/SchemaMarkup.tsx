// Schema Markup Component for JSON-LD Structured Data
// This component injects structured data into pages for better SEO

import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  floorLevelingServiceSchema,
  hardwoodInstallationServiceSchema,
  staircaseServiceSchema,
  floorRepairServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateServiceAreaSchema,
} from '@/lib/schema'

interface SchemaMarkupProps {
  type?: 'organization' | 'localBusiness' | 'website' | 'service' | 'faq' | 'breadcrumb' | 'serviceArea'
  serviceType?: 'floorLeveling' | 'hardwood' | 'stairs' | 'repair'
  faqs?: { question: string; answer: string }[]
  breadcrumbs?: { name: string; url: string }[]
  serviceArea?: { cityName: string; slug: string }
  customSchema?: object
}

// Helper to safely stringify JSON
const safeStringify = (obj: object): string => {
  try {
    return JSON.stringify(obj)
  } catch {
    return '{}'
  }
}

// Single schema script component
function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeStringify(schema) }}
    />
  )
}

// Base schema that should be on every page
export function BaseSchema() {
  return (
    <>
      <SchemaScript schema={organizationSchema} />
      <SchemaScript schema={localBusinessSchema} />
      <SchemaScript schema={websiteSchema} />
    </>
  )
}

// Service-specific schema
export function ServiceSchema({ serviceType }: { serviceType: SchemaMarkupProps['serviceType'] }) {
  const schemaMap = {
    floorLeveling: floorLevelingServiceSchema,
    hardwood: hardwoodInstallationServiceSchema,
    stairs: staircaseServiceSchema,
    repair: floorRepairServiceSchema,
  }

  const schema = serviceType ? schemaMap[serviceType] : null

  if (!schema) return null

  return <SchemaScript schema={schema} />
}

// FAQ schema
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null

  const schema = generateFAQSchema(faqs)
  return <SchemaScript schema={schema} />
}

// Breadcrumb schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  if (!items || items.length === 0) return null

  const schema = generateBreadcrumbSchema(items)
  return <SchemaScript schema={schema} />
}

// Service Area schema
export function ServiceAreaSchema({ cityName, slug }: { cityName: string; slug: string }) {
  const schema = generateServiceAreaSchema(cityName, slug)
  return <SchemaScript schema={schema} />
}

// Custom schema (for any additional structured data)
export function CustomSchema({ schema }: { schema: object }) {
  return <SchemaScript schema={schema} />
}

// Main SchemaMarkup component (flexible usage)
export default function SchemaMarkup({
  type,
  serviceType,
  faqs,
  breadcrumbs,
  serviceArea,
  customSchema,
}: SchemaMarkupProps) {
  return (
    <>
      {type === 'organization' && <SchemaScript schema={organizationSchema} />}
      {type === 'localBusiness' && <SchemaScript schema={localBusinessSchema} />}
      {type === 'website' && <SchemaScript schema={websiteSchema} />}
      {type === 'service' && serviceType && <ServiceSchema serviceType={serviceType} />}
      {type === 'faq' && faqs && <FAQSchema faqs={faqs} />}
      {type === 'breadcrumb' && breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
      {type === 'serviceArea' && serviceArea && (
        <ServiceAreaSchema cityName={serviceArea.cityName} slug={serviceArea.slug} />
      )}
      {customSchema && <CustomSchema schema={customSchema} />}
    </>
  )
}
