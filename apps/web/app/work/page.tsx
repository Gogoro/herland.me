import Header from '@/components/header';
import styles from './page.module.scss';
import Link from 'next/link';

import { sanity, generateImageUrl} from '@/utils/sanity';

async function getProjects() : Promise<Project[]> {
  return await sanity.fetch(
    `
    *[_type == "project"] | order(order asc)
      {
        name,
        slug,
        description,
        order,
        image
      }
    `,
    {
      next: {
        tags: ['project']
      }
    }
  );
}


export default async function Page(): Promise<JSX.Element> {
  const projects:Project[] = await getProjects();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>🧙 My Work</h1>
        <p><big>Working on cool projects and being in the zone is one of the best feelings in the world 🤤 Bellow I’ve gathered some of my favourite projects I’ve been working on ✨</big></p>

        <div className={styles.projects}>
          {projects.map((project:Project, index:number) => (
            <Link href={`/work/${project.slug.current}`} 
                  className={`${styles.project} ${index < 4 ? styles.big : ''}`}
                  style={{backgroundImage: project.image && `url('${generateImageUrl({asset: project.image.asset, height: 600, width: 600, fit: 'crop'})}')`}}>
              <div className={styles.text}>
                <p>{project.description}</p>
                <h2>{project.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}