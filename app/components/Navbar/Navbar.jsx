'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Book Collection
        </Link>
        
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/books" 
            className={`${styles.navLink} ${pathname === '/books' ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            My Books
          </Link>
          <Link 
            href="/books/add" 
            className={`${styles.navLink} ${pathname === '/books/add' ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}