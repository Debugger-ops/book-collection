import { getBookById } from '@/app/lib/mongoConnect';
import BookForm from '@/app/components/BookForm/BookForm';
import styles from './edit.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const book = await getBookById(params.id);
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }
  return {
    title: `Edit ${book.title}`,
    description: `Edit details for ${book.title}`,
  };
}

export default async function EditBookPage({ params }) {
  const book = await getBookById(params.id);
  
  if (!book) {
    notFound();
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Book</h1>
      <BookForm book={book} isEditing={true} />
    </div>
  );
}