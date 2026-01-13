import { Metadata } from 'next'
import ServiceAreaTemplate from '@/app/components/ServiceAreaTemplate'

export const metadata: Metadata = {
  title: 'Floor Leveling & Hardwood Installation in Vancouver, BC | PROMARK FLOORING',
  description: 'Professional floor leveling and hardwood installation services in Vancouver, BC. Local expertise, 5-year warranty, 20+ years experience. Free quotes for Vancouver residents.',
  keywords: ['floor leveling vancouver', 'hardwood flooring vancouver', 'flooring contractor vancouver bc', 'vancouver floor installation'],
}

export default function VancouverPage() {
  return (
    <ServiceAreaTemplate
      cityName="Vancouver"
      heroDescription="Proudly serving Vancouver homeowners, businesses, and contractors with expert flooring services. Local knowledge, proven results, 5-year warranty."
      introTitle="Your Trusted Vancouver Flooring Experts"
      introContent={[
        "PROMARK FLOORING has been serving the Vancouver community for over 20 years. We're intimately familiar with Vancouver's unique housing stock—from character homes in older neighborhoods to modern condos downtown. Our local expertise means we understand the specific flooring challenges Vancouver properties face, from moisture management in coastal climates to meeting city building codes and strata requirements.",
        "Whether you're in Kitsilano, Mount Pleasant, West End, Dunbar, Commercial Drive, or any Vancouver neighborhood, we provide fast response times, personalized service, and the quality workmanship that has made us Vancouver's trusted flooring contractor. From heritage home restorations to new condo developments, we've done it all across this beautiful city."
      ]}
      services={[
        { title: "Floor Leveling in Vancouver", desc: "Correct uneven floors in Vancouver homes and businesses with our industry-leading 5-year warranty. We handle concrete slabs, wood subfloors, and heritage home floor issues.", link: "/services/floor-leveling" },
        { title: "Hardwood Installation in Vancouver", desc: "Install beautiful hardwood floors throughout your Vancouver property. Solid hardwood, engineered hardwood, and premium laminate options with expert installation.", link: "/services/hardwood-installation" },
        { title: "Stair Installation in Vancouver", desc: "Transform your Vancouver home's staircase with professional installation and refinishing. Custom hardwood stairs that become your home's focal point.", link: "/services/stairs" },
        { title: "Floor Repair in Vancouver", desc: "Restore and repair existing floors in Vancouver properties. Water damage restoration, refinishing, board replacement, and maintenance services.", link: "/services/repair-maintenance" }
      ]}
      benefits={[
        "Local Knowledge: We understand Vancouver's building codes, strata bylaws, and heritage home requirements",
        "Fast Response: Located in Vancouver, we respond quickly to quotes and service calls throughout the city",
        "Climate Expertise: We know how Vancouver's coastal climate affects flooring and use appropriate moisture management",
        "Heritage Home Experience: Extensive experience working with Vancouver's character homes and older buildings",
        "Strata Approved: Familiar with strata requirements and documentation for condo and townhome projects",
        "Licensed & Insured: Fully licensed and insured to work on all Vancouver residential and commercial properties"
      ]}
      neighborhoods={[
        'Kitsilano', 'West End', 'Mount Pleasant', 'Commercial Drive',
        'Dunbar', 'Kerrisdale', 'South Granville', 'Riley Park',
        'Fairview', 'Marpole', 'Hastings-Sunrise', 'Strathcona',
        'Downtown', 'Yaletown', 'Coal Harbour', 'Shaughnessy'
      ]}
      faqs={[
        { q: "Do you work on Vancouver heritage homes?", a: "Yes! We have extensive experience with Vancouver's character and heritage homes. We understand the unique requirements of older homes, work respectfully with original materials, and know how to navigate heritage permit requirements when needed." },
        { q: "Can you meet Vancouver strata requirements?", a: "Absolutely. We're familiar with Vancouver strata requirements including acoustic underlay standards, work hour restrictions, and documentation needs. We provide all necessary paperwork and approvals for strata projects." },
        { q: "How quickly can you start a project in Vancouver?", a: "As a Vancouver-based company, we typically provide quotes within 48 hours and can often start projects within 1-2 weeks depending on our schedule and your timeline. Contact us for current availability." }
      ]}
      nearbyAreas={[
        { name: 'North Vancouver', slug: 'north-vancouver' },
        { name: 'West Vancouver', slug: 'west-vancouver' },
        { name: 'Burnaby', slug: 'burnaby' },
        { name: 'Surrey', slug: 'surrey' },
        { name: 'Delta', slug: 'delta' }
      ]}
    />
  )
}
