import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quotes/random/10')
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map(quote => (
          <li key={quote.id} style={{ marginBottom: '1rem' }}>
            <blockquote>“{quote.quote}”</blockquote>
            <p>— <strong>{quote.bookTitle}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
