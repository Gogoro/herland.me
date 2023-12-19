'use client';

import styles from './header.module.scss';
import Link from 'next/link';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';

export default function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={`/`}>Herland</Link>
      </div>
      <nav className={styles.navigation}>
        <Link href={`/articles`} className={pathname === '/articles' ? styles.active : ''}><span>💭</span> Articles</Link> | 
        <Link href={`/work`} className={pathname === '/work' ? styles.active : ''}><span>🧙</span> Work</Link> | 
        <Link href={`/books`} className={pathname === '/books' ? styles.active : ''}><span>📚</span> Books</Link> | 
        <Link href={`/about`} className={pathname === '/about' ? styles.active : ''}><span>👋</span> About</Link>
      </nav>
      <div className={styles.some}>
        <Link href={`https://www.linkedin.com/in/oleherland/`} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></Link>
        <Link href={`https://x.com/oleherland`} target='_blank'><FontAwesomeIcon icon={faXTwitter} /></Link>
        <Link href={`https://github.com/gogoro`} target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>
      </div>
    </header>
  );
}