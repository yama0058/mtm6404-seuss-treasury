import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <Link to="/books" style={{ margin: '0 1rem' }}>Books</Link>
      <Link to="/quotes" style={{ margin: '0 1rem' }}>Quotes</Link>
    </nav>
  );
}

export default Navbar;
