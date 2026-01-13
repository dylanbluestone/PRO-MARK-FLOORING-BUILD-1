import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Langley, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Langley, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Langley residents.',
  keywords: ['floor leveling langley', 'hardwood flooring langley', 'flooring contractor langley bc', 'langley floor installation'],
}

export default function LangleyPage() {
  return (
    <ServiceAreaTemplate
      cityName="Langley"
      heroDescription="Proudly serving Langley homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted Langley Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the Langley community for over 20 years. Both the City of Langley and Langley Township offer incredible diversity—from urban condos and townhomes in Langley City to acreages and equestrian properties throughout the Township. We understand the full range of Langley's housing needs.",
        "Whether you're in a new development in Willoughby, a family home in Walnut Grove, a heritage property in Fort Langley, or a rural acreage in Aldergrove, we deliver quality workmanship that meets your specific needs. Our team is experienced with Langley's rapid growth and diverse property types."
      ]}
      services={[
        { title: "Floor Leveling in Langley", desc: "Correct uneven floors in Langley homes and businesses with our industry-leading 5-year warranty. From new construction to established properties.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in Langley", desc: "Install beautiful hardwood floors throughout your Langley property. We serve urban, suburban, and rural properties throughout the municipality.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in Langley", desc: "Transform your Langley home's staircase with professional installation and refinishing. Perfect for any architectural style.", link: "/services/stairs" },
        { title: "Floor Repair in Langley", desc: "Restore and repair existing floors in Langley properties. Water damage restoration, refinishing, and ongoing maintenance.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Local Knowledge: Familiar with City of Langley and Langley Township areas",
        "New Construction Ready: Experience working with Langley's many builders and developers",
        "Rural Property Experience: We service acreages and country properties",
        "Fast Response: Quick service throughout Langley's expansive area",
        "Heritage Expertise: Experience with Fort Langley's historic properties",
        "Licensed & Insured: Fully covered for all Langley residential and commercial work"
      ]}
      neighborhoods={[
        'Walnut Grove', 'Willoughby', 'Murrayville', 'Brookswood',
        'Fort Langley', 'Aldergrove', 'Langley City', 'Willowbrook',
        'Fernridge', 'Milner', 'Campbell Valley', 'Salmon River'
      ]}
      faqs={[
        { q: "Do you service both the City and Township of Langley?", a: "Yes! We serve all of Langley including Langley City and all Township neighborhoods from Walnut Grove to Aldergrove. No area is too far for our team." },
        { q: "Can you work on rural properties and acreages?", a: "Absolutely. We have extensive experience with rural and acreage properties throughout Langley Township. We're equipped to handle projects in more remote locations." },
        { q: "Do you work with builders in Langley's new developments?", a: "Yes! We work with many builders in Willoughby, Walnut Grove, and other growing areas. We offer competitive rates for multi-unit projects and can coordinate with construction schedules." }
      ]}
      nearbyAreas={[
        { name: 'Surrey', slug: 'surrey' },
        { name: 'Delta', slug: 'delta' },
        { name: 'Maple Ridge', slug: 'maple-ridge' },
        { name: 'Mission', slug: 'mission' },
        { name: 'Burnaby', slug: 'burnaby' }
      ]}
    />
  )
}
