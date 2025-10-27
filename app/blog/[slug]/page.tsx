import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts } from "@/lib/sanity"
import { BlogHeader } from "@/components/blog-header"
import { PortableText } from "@portabletext/react"
import { YouTubeEmbed } from "@/components/youtube-embed"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <BlogHeader backLink="/blog" backText="Voltar ao blog" />

      {/* Padding-top to account for fixed header */}
      <div className="pt-20 md:pt-24" />

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-200 mb-8">
            <img
              src={post.mainImage.asset.url || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title and Meta */}
        <header className="mb-8">
          {post.publishedAt && (
            <time className="text-sm text-neutral-500 mb-4 block">
              {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {post.title}
          </h1>
        </header>

        {post.videoUrls && post.videoUrls.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">
              {post.videoUrls.length === 1 ? "Vídeo" : "Vídeos"}
            </h2>
            <div className="space-y-6">
              {post.videoUrls.map((url, index) => (
                <YouTubeEmbed key={index} url={url} />
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        {post.body && (
          <div className="prose prose-lg prose-neutral max-w-none">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </div>
  );
}
