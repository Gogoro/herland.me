import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './page.module.scss';
import Link from 'next/link';

import { sanity} from '@/utils/sanity';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Ole Herland - Full Stack Developer",
  description: "I love reading books 📚 Check out my lists bellow, and feel free to send me tips on x.com/oleherland 🫶 I’m always looking for great books to read!",
};

async function getBooks() : Promise<BookCategory[]> {
  return await sanity.fetch(
    `
    *[_type == "bookCategory"] | order(order asc)
      {
        title,
        slug,
        order,
        "books": *[ _type == "book" && references(^._id) ] | order(order asc) {
          name,
          url,
          authors[]->{
            name
          }
        }
      }
    `,
    {
      next: {
        tags: ['book']
      }
    }
  );
}

const renderAuthors = (authors:Author[]):string => {
  if (!authors) return '';

  return authors.map((author, index) => {
    if (index === 0) return author.name;
    else if (index === authors.length - 1) return ` and ${author.name}`;
    else return `, ${author.name}`;
  }).join('');
}

export default async function Page(): Promise<JSX.Element> {
  const books:BookCategory[] = await getBooks();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>📚Books</h1>
        <p><big>Reading is a calming activity that gives me balance. I get filled up with knowledge and relax at the same time 🧘 Check out my lists bellow, and feel free to send me tips on <Link href={`https://x.com/oleherland`} target={'_blank'}>x.com/oleherland</Link> 🫶 I’m always looking for great books to read!</big></p>

        <div className={styles.lists}>
          {books.map((bookCategory:BookCategory) => (
            <div className={styles.list}>
              <h2>{bookCategory.title}</h2>
              <hr />
              <ol>
                {bookCategory.books.map((book:Book) => (
                  <li>
                    <div><Link href={book.url} target={'_blank'}>{book.name}</Link></div>
                    <div>by {renderAuthors(book.authors)}</div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}