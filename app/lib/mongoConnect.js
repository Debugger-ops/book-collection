import mongoose from 'mongoose';
import Book from '../models/Book';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined in .env.local");

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return; // Already connected
  }

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('MongoDB connection failed');
  }
}

export async function getBooks() {
  await connectDB(); // Ensure DB connection is established

  try {
    return await Book.find({});
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw new Error('Error fetching books');
  }
}
