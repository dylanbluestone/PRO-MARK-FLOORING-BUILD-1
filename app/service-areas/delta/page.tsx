import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Delta, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Delta, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Delta residents.',
  keywords: ['floor leveling delta', 'hardwood flooring delta', 'flooring contractor delta bc', 'delta floor installation'],
}

export default function DeltaPage() {
  return (
    <ServiceAreaTemplate
      cityName="Delta"
      heroDescription="Proudly serving Delta homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted Delta Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the Delta community for over 20 years. Delta's three distinct communities—Ladner, Tsawwassen, and North Delta—each have unique character and flooring needs. From heritage homes in Ladner Village to newer developments in Tsawwassen and family homes throughout North Delta, we understand this diverse municipality.",
        "Whether you're renovating a character home near the harbour, updating a beach-area property in Tsawwassen, or improving your North Delta residence, we deliver quality workmanship that stands the test of time. Our team is experienced with Delta's varied housing stock and building requirements."
      ]}
      services={[
        { title: "Floor Leveling in Delta", desc: "Correct uneven floors in Delta homes and businesses with our industry-leading 5-year warranty. Expert solutions for all three Delta communities.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in Delta", desc: "Install beautiful hardwood floors throughout your Delta property. We understand the unique climate considerations of waterfront and rural properties.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in Delta", desc: "Transform your Delta home's staircase with professional installation and refinishing. From traditional to contemporary designs.", link: "/services/stairs" },
        { title: "Floor Repair in Delta", desc: "Restore and repair existing floors in Delta properties. Water damage restoration, refinishing, and ongoing maintenance.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Local Knowledge: Familiar with Ladner, Tsawwassen, and North Delta neighborhoods",
        "Heritage Home Experience: Skilled at working with Delta's older character homes",
        "Waterfront Expertise: Understanding of moisture management near coastal areas",
        "Fast Response: Quick service throughout all Delta communities",
        "Agricultural Area Experience: We work on rural and acreage properties",
        "Licensed & Insured: Fully covered for all Delta residential and commercial work"
      ]}
      neighborhoods={[
        'Ladner', 'Tsawwassen', 'North Delta', 'Ladner Village',
        'Boundary Bay', 'Beach Grove', 'English Bluff', 'Pebble Hill',
        'Sunshine Hills', 'Annieville', 'Scottsdale', 'Sunbury'
      ]}
      faqs={[
        { q: "Do you service all three Delta communities?", a: "Yes! We serve Ladner, Tsawwassen, and North Delta equally. Our team is familiar with the unique characteristics of each community and can handle projects anywhere in the municipality." },
        { q: "Can you work on heritage homes in Ladner?", a: "Absolutely. We have extensive experience with Delta's heritage properties, particularly in Ladner Village. We understand the care required when working with older homes and original materials." },
        { q: "What about waterfront properties in Tsawwassen?", a: "We're experienced with waterfront and near-beach properties. We use appropriate moisture barriers and materials suited to coastal environments to ensure your flooring performs well in these conditions." }
      ]}
      nearbyAreas={[
        { name: 'Surrey', slug: 'surrey' },
        { name: 'Vancouver', slug: 'vancouver' },
        { name: 'Burnaby', slug: 'burnaby' },
        { name: 'Langley', slug: 'langley' },
        { name: 'North Vancouver', slug: 'north-vancouver' }
      ]}
    />
  )
}
