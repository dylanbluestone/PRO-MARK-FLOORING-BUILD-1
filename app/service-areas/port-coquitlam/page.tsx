import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Port Coquitlam, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Port Coquitlam, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Port Coquitlam residents.',
  keywords: ['floor leveling port coquitlam', 'hardwood flooring port coquitlam', 'flooring contractor port coquitlam bc', 'poco floor installation'],
}

export default function PortCoquitlamPage() {
  return (
    <ServiceAreaTemplate
      cityName="Port Coquitlam"
      heroDescription="Proudly serving Port Coquitlam homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted Port Coquitlam Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the Port Coquitlam community for over 20 years. Known locally as 'PoCo,' this growing city offers a wonderful mix of established neighborhoods and new developments. From downtown's revitalized core to family-friendly areas like Citadel Heights and Oxford Heights, we understand PoCo's diverse flooring needs.",
        "Whether you're updating a character home near the waterfront, renovating a split-level in Mary Hill, or installing flooring in a new Dominion Triangle townhome, we deliver quality workmanship that PoCo residents trust. Our team appreciates the community feel of Port Coquitlam and takes pride in serving local homeowners."
      ]}
      services={[
        { title: "Floor Leveling in Port Coquitlam", desc: "Correct uneven floors in PoCo homes and businesses with our industry-leading 5-year warranty. Expert solutions for all property types.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in Port Coquitlam", desc: "Install beautiful hardwood floors throughout your Port Coquitlam property. From downtown condos to suburban family homes.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in Port Coquitlam", desc: "Transform your PoCo home's staircase with professional installation and refinishing. Perfect for split-levels and multi-story homes.", link: "/services/stairs" },
        { title: "Floor Repair in Port Coquitlam", desc: "Restore and repair existing floors in Port Coquitlam properties. Water damage restoration, refinishing, and ongoing maintenance.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Local Knowledge: Familiar with PoCo's neighborhoods from Citadel to the waterfront",
        "Split-Level Experience: Expert at multi-level homes common in Port Coquitlam",
        "New Development Ready: Experience with PoCo's growing townhome communities",
        "Fast Response: Quick service throughout Port Coquitlam",
        "Community Focus: We value PoCo's friendly, community-oriented atmosphere",
        "Licensed & Insured: Fully covered for all Port Coquitlam residential and commercial work"
      ]}
      neighborhoods={[
        'Citadel Heights', 'Oxford Heights', 'Mary Hill', 'Shaughnessy',
        'Lincoln Park', 'Dominion Triangle', 'Riverwood', 'Lions Park',
        'Getaway', 'Central PoCo', 'Birchland Manor', 'Downtown PoCo'
      ]}
      faqs={[
        { q: "Do you service all of Port Coquitlam?", a: "Yes! We serve all PoCo neighborhoods including Citadel Heights, Oxford Heights, Mary Hill, the downtown area, and everywhere in between. Our team knows PoCo well." },
        { q: "Can you work on split-level homes?", a: "Absolutely. Port Coquitlam has many split-level homes from the 1970s and 80s. We have extensive experience with these properties and understand their unique flooring and stair requirements." },
        { q: "What about townhomes in newer developments?", a: "Yes! We work on townhome projects throughout PoCo including the Dominion Triangle and other new developments. We're familiar with strata requirements and can provide all necessary documentation." }
      ]}
      nearbyAreas={[
        { name: 'Burnaby', slug: 'burnaby' },
        { name: 'Surrey', slug: 'surrey' },
        { name: 'Maple Ridge', slug: 'maple-ridge' },
        { name: 'North Vancouver', slug: 'north-vancouver' },
        { name: 'Vancouver', slug: 'vancouver' }
      ]}
    />
  )
}
