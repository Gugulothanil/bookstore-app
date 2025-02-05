import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BookList from './pages/BookList/BookList';
import BookDetails from './pages/BookDetails/BookDetails';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:isbn" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;