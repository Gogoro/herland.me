import Header from '@/components/header';
import styles from './page.module.scss';
import Link from 'next/link';
import PortableText from '@/components/portable-text';

import { sanity, generateImageUrl} from '@/utils/sanity';

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
            <h1>{project.name}</h1>
            <p><big>{project.description}</big></p>

            <div className={styles.content}>
              <PortableText value={project.content} />
            </div>
          </>
        }
      </main>
    </>
  );
}