import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Your Personal Book Collection</h1>
          <p className={styles.description}>
            Organize track and discover your literary treasures in one beautiful place
          </p>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Manage Your Library</h2>
          
          <div className={styles.grid}>
            <Link href="/books" className={styles.card}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h2>Browse Collection</h2>
              <p>View and search all books in your personal library.</p>
              <span className={styles.cardArrow}>&rarr;</span>
            </Link>
            
            <Link href="/books/add" className={styles.card}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
              <h2>Add New Book</h2>
              <p>Expand your collection with new literary treasures.</p>
              <span className={styles.cardArrow}>&rarr;</span>
            </Link>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h2>Track Progress</h2>
              <p>Monitor your reading status and notes for each book.</p>
              <span className={styles.cardArrow}>&rarr;</span>
            </div>
          </div>
        </div>
        
        <div className={styles.quoteSection}>
          <blockquote className={styles.quote}>
            A reader lives a thousand lives before he dies. The man who never reads lives only one.
            <cite>― George R.R. Martin</cite>
          </blockquote>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>Book Collection</h3>
            <p>Your personal library organized beautifully.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkGroup}>
              <h4>Navigation</h4>
              <Link href="/">Home</Link>
              <Link href="/books">My Books</Link>
              <Link href="/books/add">Add Book</Link>
            </div>
            
            <div className={styles.footerLinkGroup}>
              <h4>Resources</h4>
              <Link href="#">Reading Tips</Link>
              <Link href="#">Book Care Guide</Link>
              <Link href="#">API Documentation</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Book Collection App. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
