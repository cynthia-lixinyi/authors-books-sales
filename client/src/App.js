import React, { useState, useEffect } from 'react';
import './App.css';
import Author from './components/Author';

function App() {
  const [topAuthors, setTopAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/top-10-authors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => setTopAuthors(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="App">
      <div className="frame">
        <div className="title">
          <p>Top 10 Performing Authors</p>
        </div>
        <div className="body">
          {error && <p className="error">{error}</p>}
          {topAuthors.map((author) => (
            <Author key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
