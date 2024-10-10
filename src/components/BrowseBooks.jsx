import { useState } from 'react'; 
import { Link, useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import '../styles/BrowseBooks.css'; 
import { slugify } from '../utils/slugify'; 

const BrowseBooks = () => {
  const { category } = useParams(); // Get the "category" parameter from the URL if present (e.g., genre)
  const [searchTerm, setSearchTerm] = useState(''); // Local state to store the user's search input
  const books = useSelector((state) => state.books); 

  // Filter the list of books based on category (if specified) and search term
  const filteredBooks = books.filter((book) => {
    return (
      (!category || book.genre === category) && // If a category is provided, filter by genre, otherwise show all books
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())) 
    );
  });

  return (
    <div className="browse-books"> 
      <h2>{category ? `${category} Books` : 'All Books'}</h2> 
      
     
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="book-list"> 
        {filteredBooks.reverse().map((book, index) => ( // Reverse the filteredBooks array to display the newest added books first
          <div key={index} className="book"> 
            <img src={book.image} alt={book.title} /> 
            <h4>{book.title}</h4>
            <p>{book.author}</p> 
            {/* slugifying the title to make it URL-friendly */}
            <Link className="Link" to={`/book/${slugify(book.title)}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
