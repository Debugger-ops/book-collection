'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './BookCard.module.css';

export default function BookCard({ book, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this book?')) {
      setIsDeleting(true);
      try {
        const response = await fetch(`/api/books/${book.id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          onDelete(book.id);
        } else {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete book');
        }
      } catch (error) {
        alert('Error deleting book: ' + error.message);
        setIsDeleting(false);
      }
    }
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={book.coverImage || '/images/book-placeholder.png'}
          alt={book.title}
          width={150}
          height={225}
          className={styles.coverImage}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>by {book.author}</p>
        <p className={styles.genre}>{book.genre}</p>
        <p className={styles.year}>{book.publicationYear}</p>
      </div>
      
      <div className={styles.actions}>
        <Link href={`/books/${book.id}`} className={styles.viewButton}>
          View
        </Link>
        <Link href={`/books/${book.id}/edit`} className={styles.editButton}>
          Edit
        </Link>
        <button 
          onClick={handleDelete} 
          disabled={isDeleting} 
          className={styles.deleteButton}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}