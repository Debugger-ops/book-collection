import { getBookById } from '@/app/lib/books';
import Link from 'next/link';
import Image from 'next/image';
import styles from './detail.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const book = await getBookById(params.id);
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }
  return {
    title: `${book.title} - Book Details`,
    description: `Details about ${book.title} by ${book.author}`,
  };
}

export default async function BookDetailPage({ params }) {
  const book = await getBookById(params.id);
  
  if (!book) {
    notFound();
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.bookDetail}>
        <div className={styles.imageContainer}>
          <img
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
            <Link href={`/books/${book.id}/edit`} className={styles.editButton}>
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