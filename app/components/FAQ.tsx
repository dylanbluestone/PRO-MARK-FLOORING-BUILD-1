'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "How much does floor leveling cost?",
    answer: "Floor leveling costs vary based on the size of the area, condition of the subfloor, and extent of unevenness. We provide free on-site assessments. Most residential projects range from $3-8 per square foot."
  },
  {
    question: "How long does floor leveling take?",
    answer: "A typical residential room can be leveled in 1-2 days. The compound needs 24-72 hours to cure before flooring installation."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes! We offer a 5-year warranty on floor leveling and a 1-year warranty on hardwood flooring installations."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of Greater Vancouver including Vancouver, North Vancouver, West Vancouver, Burnaby, Surrey, Delta, Langley, Port Coquitlam, Maple Ridge, Mission, and surrounding areas."
  },
  {
    question: "Can you level floors in older homes?",
    answer: "Absolutely. We have 20+ years of experience working with older Vancouver homes that often have significant settling and unevenness."
  },
  {
    question: "Do I need to move my furniture?",
    answer: "Yes, the work area needs to be clear of furniture and belongings before we arrive."
  },
  {
    question: "What types of flooring can be installed after leveling?",
    answer: "A properly leveled floor is perfect for any flooring: hardwood, engineered wood, laminate, vinyl, tile, or carpet."
  },
  {
    question: "How do I know if my floor needs leveling?",
    answer: "Signs include: visible slopes or dips, doors that don't close properly, furniture that wobbles, or bouncy/creaky spots. We offer free assessments."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-red-200 bg-red-50/50 shadow-lg' : 'border-gray-200 bg-white hover:border-red-200 hover:shadow-md'}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-red-600' : 'text-gray-900'}`}>
              {faq.question}
            </span>
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
