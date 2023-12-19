import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './page.module.scss';
import Link from 'next/link';
import PortableText from '@/components/portable-text';

import { sanity} from '@/utils/sanity';


async function getPosts() : Promise<Post[]> {
  return await sanity.fetch(
    `
    *[_type == "post"] | order(postedAt asc)
      {
        title,
        slug,
        categories[]->{
          title
        },
        publishedAt,
        content
      }
    `,
    {
      next: {
        tags: ['post']
      }
    }
  );
}

export default async function Page(): Promise<JSX.Element> {
  const posts:Post[] = await getPosts();
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <img src="/ole-profile.png" />
          <p>I’m Ole Herland, a Full Stack Developer based in Norway 🇧🇻 </p>
          <p>I love my family, technology, science, philosophy and investing. I’m here to make an impact 💥</p>
        </aside>
        <main>
          {posts.map((post, index) => (
              <article key={`article-${index}`}>
                <h2><Link href={`/articles/${post.slug.current}`}>{post.title}</Link></h2>
                <p><small>Published: {new Date(post.publishedAt).toLocaleDateString("en-GB")}</small></p>
                <PortableText value={post.content} />
                <p><b>Categories:</b> {post?.categories?.map(c => c.title)}</p>
              </article>
            )
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}