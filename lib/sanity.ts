import { createClient } from "next-sanity";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { SanityImageAsset } from '@sanity/asset-utils';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
});

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export interface MainImage {
  alt?: string;
  asset: SanityImageAsset;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: MainImage;
  publishedAt: string;
  body?: any;
  videoUrls?: string[];
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ""} {
    _id,
    title,
    slug,
    mainImage {
      asset->
    },
    publishedAt,
    body,
    videoUrls
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage {
      asset-> 
    },
    publishedAt,
    body,
    videoUrls
  }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
