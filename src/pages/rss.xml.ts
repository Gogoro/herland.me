import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getConfigurationCollection } from "../lib/utils";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const { data: config } = await getConfigurationCollection();
  const posts = await getCollection("blog");

  // Sort posts by timestamp, newest first
  const sortedPosts = posts.sort(
    (a, b) => b.data.timestamp.getTime() - a.data.timestamp.getTime()
  );

  return rss({
    title: config.blogMeta.title,
    description: config.blogMeta.description,
    site: context.site ?? config.site.baseUrl,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.timestamp,
      link: `/blog/${post.data.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
