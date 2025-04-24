# Book Collection App

A Next.js application for managing your personal book collection. This app allows you to create, view, edit, and delete books in your collection with a clean, responsive interface.

## Features

- View all books in your collection
- Add new books with details like title, author, genre, and more
- View detailed information about each book
- Edit book details
- Delete books from your collection
- Responsive design for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB with Mongoose
- **Styling**: CSS Modules
- **API**: Next.js API Routes

## Project Structure

```
book-collection/
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── README.md
├── .next/
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── fallback-build-manifest.json
│   ├── package.json
│   ├── react-loadable-manifest.json
│   ├── trace
│   ├── cache/
│   │   ├── .rscinfo
│   │   ├── swc/
│   │   └── webpack/
│   └── server/
│       ├── _error.js
│       └── ...
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── page.module.css
│   ├── api/
│   │   └── books/
│   │       ├── route.js
│   │       └── [id]/
│   │           └── route.js
│   ├── books/
│   │   ├── books.module.css
│   │   ├── page.js
│   │   ├── [id]/
│   │   │   ├── detail.module.css
│   │   │   ├── page.js
│   │   │   └── edit/
│   │   │       ├── edit.module.css
│   │   │       └── page.js
│   │   └── add/
│   │       ├── add.module.css
│   │       └── page.js
│   ├── components/
│   │   ├── BookCard/
│   │   │   ├── BookCard.jsx
│   │   │   └── BookCard.module.css
│   │   ├── BookForm/
│   │   │   ├── BookForm.jsx
│   │   │   └── BookForm.module.css
│   │   ├── BookList/
│   │   │   ├── BookList.jsx
│   │   │   └── BookList.module.css
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.module.css
│   ├── lib/
│   │   └── mongoConnect.js
│   └── models/
│       └── Book.js
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-collection.git
   cd book-collection
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Endpoints

- `GET /api/books` - Get all books
- `POST /api/books` - Create a new book
- `GET /api/books/[id]` - Get a book by ID
- `PUT /api/books/[id]` - Update a book
- `DELETE /api/books/[id]` - Delete a book

## Data Model

Book schema:
- `title` (String, required): The title of the book
- `author` (String, required): The author of the book
- `genre` (String): The genre of the book
- `publicationYear` (Number): Year the book was published
- `isbn` (String): ISBN number of the book
- `description` (String): Description or summary of the book
- `coverImage` (String): URL to the book cover image
- `pageCount` (Number): Number of pages in the book
- `rating` (Number): Your personal rating (1-5)
- `readStatus` (String): Status like "Read", "Currently Reading", or "Want to Read"
- `createdAt` (Date): Date the book was added to the collection
- `updatedAt` (Date): Date the book information was last updated

## Development

### Adding New Features

1. Create necessary components in the `components/` directory
2. Add/modify routes in the appropriate directories
3. Update API endpoints as needed
4. Extend the data model if required

### Building for Production

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js documentation
- MongoDB and Mongoose documentation
