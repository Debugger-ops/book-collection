import BookForm from '@/app/components/BookForm/BookForm';
import styles from './add.module.css';

export const metadata = {
  title: 'Add New Book',
  description: 'Add a new book to your collection',
};

export default function AddBookPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Book</h1>
      <BookForm />
    </div>
  );
}