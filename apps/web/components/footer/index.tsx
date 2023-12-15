'use client';

import styles from './footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.quote}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src="/epictetus.png" alt="Epictetus" />
          </div>
          <div className={styles.quoteText}>
            <p>“What, then, makes a person free from hindrance and self-determining? For wealth doesn’t, neither does high-office, state or kingdom—rather, something else must be found… in the case of living, it is the knowledge of how to live.”</p>
            <p><b>—Epictetus, Discourses, 4.1.62-64</b></p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <nav className={styles.navigation}>
          <Link href={`/articles`} className={pathname === '/articles' ? styles.active : ''}><span>💭</span> Articles</Link> | 
          <Link href={`/work`} className={pathname === '/work' ? styles.active : ''}><span>🧙</span> Work</Link> | 
          <Link href={`/books`} className={pathname === '/books' ? styles.active : ''}><span>📚</span> Books</Link> | 
          <Link href={`/about`} className={pathname === '/about' ? styles.active : ''}><span>👋</span> About</Link>
        </nav>
      </footer>
    </>
  );
}