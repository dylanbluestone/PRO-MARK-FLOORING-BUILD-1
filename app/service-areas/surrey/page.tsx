import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Surrey, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Surrey, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Surrey residents.',
  keywords: ['floor leveling surrey', 'hardwood flooring surrey', 'flooring contractor surrey bc', 'surrey floor installation'],
}

export default function SurreyPage() {
  return (
    <ServiceAreaTemplate
      cityName="Surrey"
      heroDescription="Proudly serving Surrey homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted Surrey Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the Surrey community for over 20 years. As BC's second-largest city, Surrey offers an incredible diversity of properties—from new construction in South Surrey to established neighborhoods in Newton, Fleetwood, and Guildford.",
        "Whether you're building a new home, renovating an existing property, or managing commercial flooring projects, we bring the expertise and professionalism Surrey residents deserve. Our team understands Surrey's rapid growth and unique housing market, delivering quality workmanship that stands the test of time."
      ]}
      services={[
        { title: "Floor Leveling in Surrey", desc: "Correct uneven floors in Surrey homes and businesses with our industry-leading 5-year warranty. Perfect for new construction and renovations alike.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in Surrey", desc: "Install beautiful hardwood floors throughout your Surrey property. We work with builders, homeowners, and commercial clients throughout the city.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in Surrey", desc: "Transform your Surrey home's staircase with professional installation and refinishing. From custom builds to renovation projects.", link: "/services/stairs" },
        { title: "Floor Repair in Surrey", desc: "Restore and repair existing floors in Surrey properties. Water damage restoration, refinishing, and ongoing maintenance.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Local Knowledge: Familiar with Surrey's diverse neighborhoods and property types",
        "New Construction Ready: Experience working with Surrey builders and developers",
        "Fast Response: Quick service throughout Surrey's expansive geography",
        "Competitive Pricing: Fair rates for residential and commercial projects",
        "Commercial Expertise: We handle large-scale Surrey business projects",
        "Licensed & Insured: Fully covered for all Surrey residential and commercial work"
      ]}
      neighborhoods={[
        'Newton', 'Fleetwood', 'Guildford', 'Whalley',
        'South Surrey', 'Cloverdale', 'Sullivan', 'Fraser Heights',
        'Morgan Creek', 'Panorama Ridge', 'Port Kells', 'City Centre'
      ]}
      faqs={[
        { q: "Do you work with Surrey home builders?", a: "Yes! We work with many Surrey builders and developers on new construction projects. We offer competitive rates for multi-unit projects and can coordinate with your construction schedule." },
        { q: "Can you service South Surrey?", a: "Absolutely. We serve all of Surrey including South Surrey, Morgan Creek, and the Semiahmoo Peninsula. Our team is equipped to handle projects anywhere in the city." },
        { q: "What's the turnaround time for Surrey projects?", a: "We typically provide quotes within 48 hours and can start most Surrey projects within 1-2 weeks. For large projects or urgent needs, contact us to discuss expedited scheduling." }
      ]}
      nearbyAreas={[
        { name: 'Vancouver', slug: 'vancouver' },
        { name: 'Burnaby', slug: 'burnaby' },
        { name: 'Delta', slug: 'delta' },
        { name: 'Langley', slug: 'langley' },
        { name: 'North Vancouver', slug: 'north-vancouver' }
      ]}
    />
  )
}
