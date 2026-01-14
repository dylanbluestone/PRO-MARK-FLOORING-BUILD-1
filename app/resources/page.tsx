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
      {/* Compact Hero */}
      <section className="bg-forest-700 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h1
              className="text-2xl md:text-3xl text-white font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Flooring Resources
            </h1>
            <p className="text-forest-200 mt-1">
              Expert tips and guides for your flooring projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-cream-200 hover:border-forest-300 hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-forest-600 to-forest-700 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">{post.category.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-3">
                    <span className="bg-forest-100 text-forest-700 px-2 py-1 rounded text-xs font-semibold">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-forest-700 transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-charcoal-600 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-forest-600 font-semibold">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-charcoal-500">More articles coming soon!</p>
          </div>
        </div>
      </section>
    </main>
  )
}
