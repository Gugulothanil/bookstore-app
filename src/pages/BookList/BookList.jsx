import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookItem from '../../components/BookItem/BookItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.itbook.store/1.0/search/${searchTerm || 'javascript'}`
        );
        setBooks(response.data.books);
        setError('');
      } catch (err) {
        setError('Failed to fetch books');
      }
      setLoading(false);
    };

    fetchBooks();
  }, [searchTerm]);

  const filteredBooks = books.filter(book => {
    const price = parseFloat(book.price.substring(1));
    return price >= priceRange[0] && price <= priceRange[1];
  });

  return (
    <div className="book-list-page">
      <SearchBar onSearch={setSearchTerm} />
      <PriceFilter priceRange={priceRange} onRangeChange={setPriceRange} />
      
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="book-grid">
        {filteredBooks.map(book => (
          <BookItem key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;