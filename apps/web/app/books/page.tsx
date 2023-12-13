import Header from '@/components/header';
import styles from './page.module.scss';
import Link from 'next/link';

import sanity from '@/utils/sanity';

async function getBooks() {
  return await sanity.fetch(
    `
    *[_type == "bookCategory"] | order(order asc)
      {
        title,
        slug,
        order,
        "books": *[ _type == "book" && book._ref == ^.bookCategory._id ] {
          name,
          image,
          "author": author->{
            name
          }
        }
      }
    `,
    {
      next: {
        tags: ['integrations']
      }
    }
  );
}

export default async function Page(): Promise<JSX.Element> {
  const books = await getBooks()
  console.log('books', books)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>📚Books</h1>
        <p><big>Reading is a calming activity that gives me balance. I get filled up with knowledge and relax at the same time 🧘 Check out my lists bellow, and feel free to send me tips on <Link href={`https://x.com/oleherland`} target={'_blank'}>x.com/oleherland</Link> 🫶 I’m always looking for great books to read!</big></p>

        <div className={styles.lists}>
          {books.map((bookCategory) => (
            <div className={styles.list}>
              <h2>{bookCategory.title}</h2>
              <hr />
              <ul>
                {bookCategory.books.map((book) => (
                  <li><Link href={`https://www.goodreads.com/book/show/4099.The_Fountainhead`} target={'_blank'}>{book.name}</Link> by {book.author.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}