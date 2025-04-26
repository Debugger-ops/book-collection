// app/books/page.js
import { getBooks } from '../lib/mongoConnect'; // Ensure this path is correct
import BookList from '../components/BookList/BookList';
import Link from 'next/link';
import styles from './books.module.css';

export const metadata = {
  title: 'Book Collection - All Books',
  description: 'Browse all books in your collection',
};

export default async function BooksPage() {
  let books = [];
  

  try {
    books = await getBooks(); // Fetch books from the database
  } catch (err) {
    console.error('Error fetching books:', err);

  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Book Collection</h1>
      
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
