import { useParams, Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import '../styles/BookDetails.css'; 
import { slugify } from '../utils/slugify'; 

const BookDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL using useParams
  const books = useSelector((state) => state.books); // Access the list of books from the Redux store

  // Find the book in the Redux state that matches the slug from the URL
  const book = books.find((book) => {
    const bookSlug = slugify(book.title); // Generate a slug for each book title 
    console.log(`Comparing URL slug "${slug}" with book slug "${bookSlug}"`); // comparison for debugging
    return bookSlug === slug; // Check if the generated slug matches the slug from the URL
  });

  // If no book is found, display a "Book not found" message
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail"> 
     
      <img src={book.image} alt={book.title} />

      
      <h2>{book.title}</h2>

    
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Genre:</strong> {book.genre}</p>

     
      <Link to="/books">Back to Browse</Link>
    </div>
  );
};

export default BookDetail;
