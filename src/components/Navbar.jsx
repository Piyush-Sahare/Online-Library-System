import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/">Online Library</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
