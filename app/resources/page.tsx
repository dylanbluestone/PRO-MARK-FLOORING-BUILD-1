import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Flooring Resources | PROMARK FLOORING',
  description: 'Expert advice on floor leveling and hardwood installation.',
}

const posts = [
  {
    title: 'How to Know If Your Floor Needs Leveling',
    excerpt: 'Learn the telltale signs that indicate your floor may need professional leveling.',
    slug: 'signs-floor-needs-leveling',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Floor Leveling'
  },
  {
    title: 'Hardwood vs Engineered Wood: Which is Right for You?',
    excerpt: 'A comparison of solid hardwood and engineered wood flooring.',
    slug: 'hardwood-vs-engineered',
    date: '2024-01-10',
    readTime: '7 min',
    category: 'Hardwood'
  },
  {
    title: 'The Complete Guide to Floor Preparation',
    excerpt: 'Everything about preparing your subfloor for flooring installation.',
    slug: 'floor-preparation-guide',
    date: '2024-01-05',
    readTime: '8 min',
    category: 'Tips'
  },
]

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Flooring Resources</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert tips and guides for your flooring projects.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">{post.category.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-red-600 font-semibold">
                    Read More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500">More articles coming soon!</p>
          </div>
        </div>
      </section>
    </main>
  )
}
