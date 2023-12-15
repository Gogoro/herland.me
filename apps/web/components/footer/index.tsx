'use client';

import styles from './footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <header className={styles.footer}>
      <nav className={styles.navigation}>
        <Link href={`/articles`} className={pathname === '/articles' ? styles.active : ''}><span>💭</span> Articles</Link> | 
        <Link href={`/work`} className={pathname === '/work' ? styles.active : ''}><span>🧙</span> Work</Link> | 
        <Link href={`/books`} className={pathname === '/books' ? styles.active : ''}><span>📚</span> Books</Link> | 
        <Link href={`/about`} className={pathname === '/about' ? styles.active : ''}><span>👋</span> About</Link>
      </nav>
    </header>
  );
}