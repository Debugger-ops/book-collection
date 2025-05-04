// app/lib/mongoConnect.js

import mongoose from 'mongoose';
import Book from '../models/Book'; // Make sure the path to Book model is correct

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

// app/lib/mongoConnect.js
export async function getBooks() {
  await connectDB();
  try {
    const books = await Book.find().lean();  // Convert to plain objects
    return books;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw new Error('Error fetching books');
  }
}

// Connect to MongoDB function
export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('\x1b[32m%s\x1b[0m', '✓ MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('MongoDB connection failed');
  }
}

// Get book by ID function
export async function getBookById(id) {
  await connectDB();
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid book ID');
    }
    const book = await Book.findById(id);
    return book;
  } catch (error) {
    console.error('Error fetching book by ID:', error.message);
    throw new Error('Error fetching book');
  }
}
