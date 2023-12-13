import styles from './header.module.scss';
import Link from 'next/link';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={`/`}>Herland</Link>
      </div>
      <nav className={styles.navigation}>
        <Link href={`/articles`}><span>💭</span> Articles</Link> | 
        <Link href={`/Work`}><span>🧙</span> Work</Link> | 
        <Link href={`/books`}><span>📚</span> Books</Link> | 
        <Link href={`/about`}><span>👋</span> About</Link>
      </nav>
      <div className={styles.some}>
        <Link href={`https://www.linkedin.com/in/oleherland/`} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></Link>
        <Link href={`https://x.com/oleherland`} target='_blank'><FontAwesomeIcon icon={faXTwitter} /></Link>
        <Link href={`https://github.com/gogoro`} target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>
      </div>
    </header>
  );
}