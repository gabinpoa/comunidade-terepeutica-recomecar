"use client"

interface YouTubeEmbedProps {
  url: string
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

export function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const videoId = getYouTubeVideoId(url)

  if (!videoId) {
    return <div className="bg-slate-100 rounded-lg p-4 text-slate-600 text-sm">URL de vídeo inválida: {url}</div>
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
