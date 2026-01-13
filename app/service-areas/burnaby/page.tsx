import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Burnaby, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Burnaby, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Burnaby residents.',
  keywords: ['floor leveling burnaby', 'hardwood flooring burnaby', 'flooring contractor burnaby bc', 'burnaby floor installation'],
}

export default function BurnabyPage() {
  return (
    <ServiceAreaTemplate
      cityName="Burnaby"
      heroDescription="Proudly serving Burnaby homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted Burnaby Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the Burnaby community for over 20 years. From the high-rises of Metrotown and Brentwood to the established homes of Burnaby Heights and Capitol Hill, we understand the diverse flooring needs of this growing city.",
        "Whether you're renovating a condo near SkyTrain stations, updating a character home in Deer Lake area, or improving a commercial space in our thriving business districts, we deliver the quality workmanship Burnaby residents expect. Our local expertise means fast response times and personalized service throughout all Burnaby neighborhoods."
      ]}
      services={[
        { title: "Floor Leveling in Burnaby", desc: "Correct uneven floors in Burnaby homes and businesses with our industry-leading 5-year warranty. Expert leveling for condos, houses, and commercial properties.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in Burnaby", desc: "Install beautiful hardwood floors throughout your Burnaby property. Solid hardwood, engineered hardwood, and premium laminate options.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in Burnaby", desc: "Transform your Burnaby home's staircase with professional installation and refinishing. Custom hardwood stairs for any style.", link: "/services/stairs" },
        { title: "Floor Repair in Burnaby", desc: "Restore and repair existing floors in Burnaby properties. Water damage restoration, refinishing, and maintenance services.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Local Knowledge: Familiar with Burnaby building codes and strata requirements",
        "Fast Response: Quick turnaround on quotes and project starts throughout Burnaby",
        "High-Rise Experience: Extensive experience with Metrotown and Brentwood tower projects",
        "Noise Compliance: We meet acoustic underlay requirements for multi-family buildings",
        "Established Home Expertise: Experience with older Burnaby homes and their unique challenges",
        "Licensed & Insured: Fully covered for all Burnaby residential and commercial work"
      ]}
      neighborhoods={[
        'Metrotown', 'Brentwood', 'Burnaby Heights', 'Capitol Hill',
        'Edmonds', 'Deer Lake', 'Highgate', 'Forest Grove',
        'Lougheed', 'Cameron', 'Sullivan Heights', 'Big Bend'
      ]}
      faqs={[
        { q: "Do you work on Burnaby high-rise condos?", a: "Yes! We have extensive experience with Burnaby's many high-rise developments, especially in Metrotown and Brentwood. We're familiar with building access requirements, noise restrictions, and acoustic underlay specifications." },
        { q: "Can you handle strata requirements?", a: "Absolutely. We provide all documentation required by Burnaby strata councils, including insurance certificates, contractor agreements, and completion reports." },
        { q: "What areas of Burnaby do you serve?", a: "We serve all of Burnaby including Metrotown, Brentwood, Burnaby Heights, Capitol Hill, Edmonds, Deer Lake, and all surrounding neighborhoods. No area is too far!" }
      ]}
      nearbyAreas={[
        { name: 'Vancouver', slug: 'vancouver' },
        { name: 'North Vancouver', slug: 'north-vancouver' },
        { name: 'Surrey', slug: 'surrey' },
        { name: 'Port Coquitlam', slug: 'port-coquitlam' },
        { name: 'Delta', slug: 'delta' }
      ]}
    />
  )
}
