import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in North Vancouver, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in North Vancouver, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for North Vancouver residents.',
  keywords: ['floor leveling north vancouver', 'hardwood flooring north vancouver', 'flooring contractor north vancouver bc', 'north vancouver floor installation'],
}

export default function NorthVancouverPage() {
  return (
    <ServiceAreaTemplate
      cityName="North Vancouver"
      heroDescription="Proudly serving North Vancouver homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted North Vancouver Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the North Vancouver community for over 20 years. We understand the unique challenges of North Shore properties—from hillside homes with complex foundation requirements to character homes in established neighborhoods and modern developments throughout the city.",
        "Whether you're renovating a waterfront property in Deep Cove, updating a family home in Lynn Valley, or improving a condo in Lower Lonsdale, we bring the expertise North Vancouver residents deserve. Our team knows how to work with the varied terrain and building styles that make the North Shore unique."
      ]}
      services={[
        { title: "Floor Leveling in North Vancouver", desc: "Correct uneven floors in North Vancouver homes and businesses with our industry-leading 5-year warranty. Expert solutions for hillside properties and older homes.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in North Vancouver", desc: "Install beautiful hardwood floors throughout your North Vancouver property. We work with the mountain climate and humidity levels of the North Shore.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in North Vancouver", desc: "Transform your North Vancouver home's staircase with professional installation and refinishing. Perfect for multi-level North Shore homes.", link: "/services/stairs" },
        { title: "Floor Repair in North Vancouver", desc: "Restore and repair existing floors in North Vancouver properties. Water damage restoration, refinishing, and ongoing maintenance.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "North Shore Knowledge: Familiar with hillside properties and unique foundation challenges",
        "Climate Expertise: Understanding of North Shore humidity and its effects on flooring",
        "Character Home Experience: Skilled at working with older North Vancouver properties",
        "Fast Response: Quick service throughout North Vancouver's neighborhoods",
        "Multi-Level Specialists: Expert at complex stair and multi-floor projects",
        "Licensed & Insured: Fully covered for all North Vancouver residential and commercial work"
      ]}
      neighborhoods={[
        'Lower Lonsdale', 'Central Lonsdale', 'Upper Lonsdale', 'Lynn Valley',
        'Lynn Creek', 'Edgemont Village', 'Deep Cove', 'Blueridge',
        'Seymour Heights', 'Capilano Highlands', 'Norgate', 'Pemberton Heights'
      ]}
      faqs={[
        { q: "Do you work on hillside properties in North Vancouver?", a: "Yes! We have extensive experience with North Vancouver's hillside homes and understand the unique leveling challenges they present. Our team is equipped to handle complex foundation work on sloped properties." },
        { q: "Can you service Deep Cove and the eastern areas?", a: "Absolutely. We serve all of North Vancouver including Deep Cove, Blueridge, Seymour Heights, and all surrounding areas. No neighborhood is too far for our team." },
        { q: "How do you handle the North Shore climate?", a: "We're experts in managing the effects of North Shore humidity on flooring. We use appropriate moisture barriers, acclimatization techniques, and products suited to the coastal mountain climate." }
      ]}
      nearbyAreas={[
        { name: 'West Vancouver', slug: 'west-vancouver' },
        { name: 'Vancouver', slug: 'vancouver' },
        { name: 'Burnaby', slug: 'burnaby' },
        { name: 'Port Coquitlam', slug: 'port-coquitlam' },
        { name: 'Delta', slug: 'delta' }
      ]}
    />
  )
}
