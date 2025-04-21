'use client';

import { useState } from 'react';
import BookCard from '@/app/components/BookCard/BookCard';
import styles from './BookList.module.css';

export default function BookList({ books: initialBooks }) {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  
  const handleDelete = (deletedId) => {
    setBooks(books.filter(book => book.id !== deletedId));
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  
  // Filter and sort books
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'author') {
      return a.author.localeCompare(b.author);
    } else if (sortBy === 'publicationYear') {
      return a.publicationYear - b.publicationYear;
    }
    return 0;
  });
  
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.sort}>
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSort}
            className={styles.sortSelect}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="publicationYear">Publication Year</option>
          </select>
        </div>
      </div>
      
      <div className={styles.bookList}>
        {sortedBooks.length > 0 ? (
          sortedBooks.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              onDelete={handleDelete} 
            />
          ))
        ) : (
          <p className={styles.noResults}>
            {searchTerm ? 'No books match your search.' : 'No books in your collection yet.'}
          </p>
        )}
      </div>
    </div>
  );
}