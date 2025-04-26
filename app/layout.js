import './globals.css';
import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Book Collection',
  description: 'A personal book collection management application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Book Collection App</p>
        </footer>
      </body>
    </html>
  );
}