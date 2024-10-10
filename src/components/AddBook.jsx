// src/components/AddBook.jsx

import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addBook } from '../redux/booksSlice'; 
import { useNavigate } from 'react-router-dom';
import '../styles/addBook.css'; 

const AddBook = () => {
  // Local state variables to manage form input values
  const [title, setTitle] = useState(''); 
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  
  const dispatch = useDispatch(); // Initializing the dispatch function from Redux
  const navigate = useNavigate(); // Initializing navigate function from react-router-dom

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Validate that all fields are filled out
    if (title && author && description && genre && image) {
      // Dispatch the addBook action with form data
      dispatch(addBook({ title, author, description, genre, image }));
      
      // Redirect to the '/books' route after successful book addition
      navigate('/books');
    } else {
      // Show an alert if any field is missing
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="add-book"> 
      <h2>Add a New Book</h2> 
      <form onSubmit={handleSubmit}> 
        
        
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        
       
        <input 
          type="text" 
          placeholder="Author" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)} 
        />
        
        
        <input 
          type="text" 
          placeholder="Description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />
        
        
        <input 
          type="text" 
          placeholder="Genre" 
          value={genre}
          onChange={(e) => setGenre(e.target.value)} 
        />
        
        {/* Input field for book image URL */}
        <input 
          type="text" 
          placeholder="Image URL" 
          value={image}
          onChange={(e) => setImage(e.target.value)} 
        />
        
        
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
