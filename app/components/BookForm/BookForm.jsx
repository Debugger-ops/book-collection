'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './BookForm.module.css';

export default function BookForm({ book, isEditing = false }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: book?.title || '',
    author: book?.author || '',
    genre: book?.genre || '',
    publicationYear: book?.publicationYear || '',
    isbn: book?.isbn || '',
    description: book?.description || '',
    coverImage: book?.coverImage || '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const url = isEditing ? `/api/books/${book.id}` : '/api/books';
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save book');
      }
      
      const savedBook = await response.json();
      
      // Redirect to the book detail page
      router.push(`/books/${savedBook.id}`);
      router.refresh();
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}
      
      <div className={styles.formGroup}>
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="author">Author *</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="genre">Genre *</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="publicationYear">Publication Year *</label>
        <input
          type="number"
          id="publicationYear"
          name="publicationYear"
          value={formData.publicationYear}
          onChange={handleChange}
          required
          min="1000"
          max={new Date().getFullYear()}
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="coverImage">Cover Image URL</label>
        <input
          type="url"
          id="coverImage"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={styles.textarea}
        />
      </div>
      
      <div className={styles.buttons}>
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className={styles.submitButton}
        >
          {isSubmitting ? 'Saving...' : isEditing ? 'Update Book' : 'Add Book'}
        </button>
        <Link href={isEditing ? `/books/${book.id}` : '/books'} className={styles.cancelButton}>
          Cancel
        </Link>
      </div>
    </form>
  );
}