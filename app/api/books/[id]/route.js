import { connectDB, getBookById } from '../../../lib/mongoConnect'; // Adjust path if needed
import Book from '../../../models/Book'; // Adjust path if needed
import { NextResponse } from 'next/server';

// GET - Fetch a book by ID
export async function GET(request, { params }) {
  // Get book using getBookById or directly through Book model
  const book = await getBookById(params.id); // This calls the function from mongoConnect.js
  
  // If no book is found, return 404 error
  if (!book) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  // Return the book data
  return NextResponse.json(book);
}

// PUT - Update a book by ID
export async function PUT(request, { params }) {
  // Get the data from the request body
  const body = await request.json();
  
  // Connect to the database
  await connectDB();
  
  // Update the book by ID
  const book = await Book.findByIdAndUpdate(params.id, body, { new: true });
  
  // If no book is found for the given ID, return 404 error
  if (!book) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  // Return the updated book data
  return NextResponse.json(book);
}

// DELETE - Delete a book by ID
export async function DELETE(request, { params }) {
  // Connect to the database
  await connectDB();
  
  // Delete the book by ID
  const deletedBook = await Book.findByIdAndDelete(params.id);
  
  // If no book is found for deletion, return 404 error
  if (!deletedBook) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  
  // Return success message
  return NextResponse.json({ success: true });
}
