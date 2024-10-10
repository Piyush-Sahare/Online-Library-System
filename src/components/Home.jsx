import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import '../styles/Home.css'; 
import { slugify } from '../utils/slugify'; 

const Home = () => {
  const books = useSelector((state) => state.books); 

  // Create a list of unique categories (genres) from the books
  const categories = [...new Set(books.map((book) => book.genre))]; 

  // Get the last 10 books added to the store and reverse them to display the newest first
  const popularBooks = books.slice(-10).reverse(); 

  return (
    <div className="home">
      <h2>Welcome to the Online Library</h2>

     
      <section className="categories">
        <h3>Book Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              {/* Link to the browse page filtered by the selected category */}
              <Link className='Link' style={{ color: 'black' }} to={`/books/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>

      
      <section className="popular-books">
        <h3>Popular Books</h3>
        <div className="home-book-list">
          {popularBooks.map((book, index) => (
            <div key={index} className="home-book">
             
              <img src={book.image} alt={book.title} />
             
              <h4>{book.title}</h4>
              
              <p>{book.author}</p>
             
              <Link className='Link' to={`/book/${slugify(book.title)}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
