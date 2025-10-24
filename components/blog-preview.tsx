import Link from "next/link"
import { getBlogPosts } from "@/lib/sanity"
import { Video } from "lucide-react"

export async function BlogPreview() {
  const posts = await getBlogPosts(3)

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">Notícias e Artigos</h2>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block">
              <article className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img
                    src={post.mainImage?.asset?.url || "/placeholder.svg?height=300&width=400&query=blog post"}
                    alt={post.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  {post.videoUrls && post.videoUrls.length > 0 && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg">
                      <Video className="h-4 w-4" />
                      <span>Vídeo</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-500 transition-colors mb-2">
                    {post.title}
                  </h3>
                  {post.publishedAt && (
                    <time className="text-sm text-slate-500">
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-emerald-500 hover:text-emerald-600 font-semibold transition-colors">
            Ver todos os artigos →
          </Link>
        </div>
      </div>
    </section>
  )
}
