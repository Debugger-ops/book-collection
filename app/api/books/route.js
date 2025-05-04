// app/api/books/route.js
import { connectDB } from '../../lib/mongoConnect'; // Adjust path based on your folder structure
import  Book  from '../../models/Book';


export async function GET() {
  await connectDB();
  const books = await Book.find().sort({ createdAt: -1 });
  return Response.json(books);
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    const book = await Book.create(body);
    return Response.json(book);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}
