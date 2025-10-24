import Link from "next/link"
import { getBlogPosts } from "@/lib/sanity"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Blog</h1>
          <p className="text-neutral-600 mt-2">Notícias, artigos e informações sobre tratamento e recuperação</p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-neutral-600 text-lg">Nenhum artigo publicado ainda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="group">
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <img
                      src={post.mainImage?.asset?.url || "/placeholder.svg?height=300&width=400&query=blog post"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    {post.publishedAt && (
                      <time className="text-sm text-neutral-500 mb-2">
                        {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                    <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
