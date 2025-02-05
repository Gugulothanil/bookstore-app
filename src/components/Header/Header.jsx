import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Book List</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;