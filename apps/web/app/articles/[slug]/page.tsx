import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '../page.module.scss';
import PortableText from '@/components/portable-text';
import Link from 'next/link';

import { sanity, generateImageUrl} from '@/utils/sanity';


async function getPost(slug:string) : Promise<Post> {
  return await sanity.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
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
      slug: slug,
      next: {
        tags: ['post']
      }
    }
  );
}

export default async function Page({params}: {params: {slug: string}}): Promise<JSX.Element> {
  const post:Post = await getPost(params.slug);
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <div className={styles.backButton}>
            <Link href="/articles">← All articles 💭</Link>
          </div>
          <img src="/ole-profile.png" />
          <p>I’m Ole Herland, a Full Stack Developer based in Norway 🇧🇻 </p>
          <p>I love my family, technology, science, philosophy and investing. I’m here to make an impact 💥</p>
        </aside>
        <main>
          <article>
            <h2>{post.title}</h2>
            <p><small>Published: {new Date(post.publishedAt).toLocaleDateString("en-GB")}</small></p>
            <PortableText value={post.content} />
            <p><b>Categories:</b> {post?.categories?.map(c => c.title)}</p>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}