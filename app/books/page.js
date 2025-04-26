// app/books/page.js
import { getBooks } from '../lib/mongoConnect';
import BookList from '../components/BookList/BookList';
import Link from 'next/link';
import styles from './books.module.css';

export const metadata = {
  title: 'Book Collection - All Books',
  description: 'Browse all books in your collection',
};

export default async function BooksPage() {
  let books = [];
  let error = null;

  try {
    const fetchedBooks = await getBooks();
    books = JSON.parse(JSON.stringify(fetchedBooks)); // Convert to plain objects
  } catch (err) {
    console.error('Error fetching books:', err);
    error = err;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Book Collection</h1>
        <Link href="/books/add" className={styles.addButton}>
          Add New Book
        </Link>
      </div>

      <BookList books={books} />

      {books.length === 0 && (
        <div className={styles.emptyState}>
          <p>Your collection is empty. Start adding books!</p>
          <Link href="/books/add" className={styles.emptyStateButton}>
            Add Your First Book
          </Link>
        </div>
      )}
    </div>
  );
}
