import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in West Vancouver, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in West Vancouver, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for West Vancouver residents.',
  keywords: ['floor leveling west vancouver', 'hardwood flooring west vancouver', 'flooring contractor west vancouver bc', 'west vancouver floor installation'],
}

export default function WestVancouverPage() {
  return (
    <ServiceAreaTemplate
      cityName="West Vancouver"
      heroDescription="Proudly serving West Vancouver homeowners with premium flooring services. Exceptional craftsmanship for discerning clients, 5-year warranty."
      introTitle="Your Trusted West Vancouver Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the West Vancouver community for over 20 years. We understand that West Vancouver homeowners expect nothing but the finest craftsmanship. From the prestigious British Properties to the charming homes of Ambleside and Dundarave, we deliver flooring solutions that match the exceptional standards of this beautiful community.",
        "Whether you're renovating a luxury estate, updating a mid-century modern gem, or installing new flooring in a waterfront property, we bring the expertise and attention to detail that West Vancouver's discerning homeowners require. Our team is experienced with high-end materials and custom installations."
      ]}
      services={[
        { title: "Floor Leveling in West Vancouver", desc: "Correct uneven floors in West Vancouver homes with our industry-leading 5-year warranty. Expert solutions for hillside estates and heritage properties.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in West Vancouver", desc: "Install premium hardwood floors throughout your West Vancouver property. Wide plank, exotic species, and custom patterns available.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in West Vancouver", desc: "Transform your West Vancouver home's staircase with professional installation and refinishing. Custom designs for luxury residences.", link: "/services/stairs" },
        { title: "Floor Repair in West Vancouver", desc: "Restore and repair existing floors in West Vancouver properties. Expert refinishing and maintenance for premium flooring.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Luxury Home Experience: Extensive work with West Vancouver's finest properties",
        "Premium Materials: Access to high-end hardwoods and custom finishing options",
        "Hillside Expertise: Skilled at complex leveling for sloped West Vancouver lots",
        "Attention to Detail: Meticulous craftsmanship for discerning homeowners",
        "Respectful Service: We understand and respect luxury home environments",
        "Licensed & Insured: Fully covered for all West Vancouver residential work"
      ]}
      neighborhoods={[
        'British Properties', 'Ambleside', 'Dundarave', 'Caulfeild',
        'Horseshoe Bay', 'Eagle Harbour', 'Gleneagles', 'Chartwell',
        'Westmount', 'Altamont', 'Park Royal', 'Sentinel Hill'
      ]}
      faqs={[
        { q: "Do you work with high-end materials for West Vancouver homes?", a: "Absolutely. We have extensive experience with premium hardwoods including wide-plank options, exotic species, and custom staining. We can source and install the finest materials to match West Vancouver's luxury homes." },
        { q: "Can you work on properties in the British Properties?", a: "Yes! We regularly service the British Properties and other hillside estates. Our team is experienced with the unique access requirements and complex installations these properties often require." },
        { q: "Do you provide custom flooring designs?", a: "Yes, we offer custom patterns, borders, medallions, and unique installations. We work with homeowners and designers to create one-of-a-kind flooring that complements your West Vancouver home's architecture." }
      ]}
      nearbyAreas={[
        { name: 'North Vancouver', slug: 'north-vancouver' },
        { name: 'Vancouver', slug: 'vancouver' },
        { name: 'Burnaby', slug: 'burnaby' },
        { name: 'Surrey', slug: 'surrey' },
        { name: 'Delta', slug: 'delta' }
      ]}
    />
  )
}
