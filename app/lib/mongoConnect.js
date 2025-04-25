import mongoose from 'mongoose';
import Book from '../models/Book'; // Make sure this path is correct relative to this file

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return; // Already connected
  }

  try {
    console.log('Connecting to MongoDB...');
    // Remove deprecated options here
    await mongoose.connect(MONGODB_URI);
    console.log('\x1b[32m%s\x1b[0m', '✓ MongoDB connected successfully');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('MongoDB connection failed');
  }
}

export async function getBooks() {
  await connectDB(); // Ensure DB connection is established

  try {
    const books = await Book.find({});
    return books;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw new Error('Error fetching books');
  }
}
