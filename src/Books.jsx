import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${bookId}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [bookId]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.coverImage} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Books Page</h2>
      <div>
        {books.map(book => (
          <div key={book.id}>
            <h3>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h3>
            <img src={book.coverImage || book.cover} alt={book.title} style={{ maxWidth: 200 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
