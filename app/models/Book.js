// app/models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // other fields
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema); // Ensure it's using mongoose.model

export default Book; // Make sure you're using default export
