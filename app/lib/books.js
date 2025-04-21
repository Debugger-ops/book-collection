// Local storage implementation (would be replaced with a real database)
let books = [
    {
      id: '1',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      publicationYear: 1960,
      isbn: '978-0061120084',
      description: 'The story of young Scout Finch, her brother Jem, and their father Atticus as they navigate issues of race and morality in their small Southern town.',
      coverImage: 'https://m.media-amazon.com/images/I/81gepf1eMqL.jpg'
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian Fiction',
      publicationYear: 1949,
      isbn: '978-0451524935',
      description: 'Set in a totalitarian society, the novel follows Winston Smith as he rebels against the oppressive regime led by Big Brother.',
      coverImage: 'https://m.media-amazon.com/images/I/81YxjLkcAdL._UF1000,1000_QL80_.jpg'
    },
    {
      id: '3',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Literary Fiction',
      publicationYear: 1925,
      isbn: '978-0743273565',
      description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
      coverImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg'
    }
  ];
  
  export async function getBooks() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...books];
  }
  
  export async function getBookById(id) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return books.find(book => book.id === id) || null;
  }
  
  export async function addBook(bookData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Validate required fields
    const requiredFields = ['title', 'author', 'genre', 'publicationYear'];
    for (const field of requiredFields) {
      if (!bookData[field]) {
        throw new Error(`${field} is required`);
      }
    }
    
    // Create new book with ID
    const newBook = {
      id: Date.now().toString(),
      ...bookData,
      publicationYear: Number(bookData.publicationYear)
    };
    
    books.push(newBook);
    return newBook;
  }
  
  export async function updateBook(id, bookData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = books.findIndex(book => book.id === id);
    if (index === -1) return null;
    
    // Validate required fields
    const requiredFields = ['title', 'author', 'genre', 'publicationYear'];
    for (const field of requiredFields) {
      if (!bookData[field]) {
        throw new Error(`${field} is required`);
      }
    }
    
    // Update book
    const updatedBook = {
      ...books[index],
      ...bookData,
      publicationYear: Number(bookData.publicationYear)
    };
    
    books[index] = updatedBook;
    return updatedBook;
  }
  
  export async function deleteBook(id) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const initialLength = books.length;
    books = books.filter(book => book.id !== id);
    
    return books.length < initialLength;
  }