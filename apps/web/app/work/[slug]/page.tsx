import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './page.module.scss';
import Link from 'next/link';
import PortableText from '@/components/portable-text';

import { Metadata, ResolvingMetadata } from 'next'

import { sanity, generateImageUrl} from '@/utils/sanity';

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProject(params.slug) 
  const previousImages = (await parent).openGraph?.images || []
  const image = project.image ? generateImageUrl({asset: project.image.asset, width: 1200, height: 630, fit: 'clip'}) : ''
  return {
    title: `${project.name} | Ole Herland - Full-Stack developer`,
    description: project.description,
    openGraph: {
      images: [image, ...previousImages],
    },
  }
}

async function getProject(slug:string) : Promise<Project> {
  return await sanity.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
      {
        name,
        slug,
        description,
        order,
        image,
        content
      }
    `, {
      slug: slug,
      next: {
        tags: ['project']
      }
    }
  );
}

export default async function Page({params}: {params: {slug: string}}): Promise<JSX.Element> {
  const project:Project = await getProject(params.slug);
  return (
    <>
      <Header />
      <main className={styles.main}>
        {project && 
          <>
            <Link href={`/work`}>← Back to work 😉</Link>
            <h1>{project.name}</h1>
            <p><big>{project.description}</big></p>

            <div className={styles.content}>
              <PortableText value={project.content} />
            </div>
          </>
        }
      </main>
      <Footer />
    </>
  );
}