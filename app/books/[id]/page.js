import { getBookById } from '../../lib/mongoConnect'; 
import Link from 'next/link';
import Image from 'next/image';
import styles from './detail.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  // Await the params object first
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  if (!id || id === 'undefined') {
    return { title: 'Book Not Found' };
  }

  try {
    const book = await getBookById(id);
    if (!book) {
      return { title: 'Book Not Found' };
    }
    return {
      title: `${book.title} - Book Details`,
      description: `Details about ${book.title} by ${book.author}`,
    };
  } catch (error) {
    return { title: 'Book Not Found' };
  }
}

export default async function BookDetailPage({ params }) {
  // Await the params object first
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  // Handle invalid ID cases
  if (!id || id === 'undefined') {
    notFound(); // Redirects to a 404 page
  }

  let book;
  try {
    book = await getBookById(id);
    if (!book) {
      notFound(); // If no book is found, triggers the 404 page
    }
  } catch (error) {
    notFound(); // Handle any errors by showing the 404 page
  }

  return (
    <div className={styles.container}>
      <div className={styles.bookDetail}>
        <div className={styles.imageContainer}>
          <Image
            src={book.coverImage || '/images/book-placeholder.png'}
            alt={book.title}
            width={300}
            height={450}
            className={styles.coverImage}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{book.title}</h1>
          <h2 className={styles.author}>by {book.author}</h2>

          <div className={styles.meta}>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Publication Year:</strong> {book.publicationYear}</p>
            <p><strong>ISBN:</strong> {book.isbn || 'Not provided'}</p>
          </div>

          {book.description && (
            <div className={styles.description}>
              <h3>Description</h3>
              <p>{book.description}</p>
            </div>
          )}

          <div className={styles.actions}>
            <Link href={`/books/${book._id}/edit`} className={styles.editButton}>
              Edit Book
            </Link>
            <Link href="/books" className={styles.backButton}>
              Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}