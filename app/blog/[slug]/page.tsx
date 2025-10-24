import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { YouTubeEmbed } from "@/components/youtube-embed";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao blog
            </Link>
          </Button>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-neutral-200 mb-8">
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
