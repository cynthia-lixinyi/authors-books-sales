import React, { useState, useEffect } from "react";
import "./App.css";

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
      <h1>Top 10 Authors</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {topAuthors.map((author) => (
          <li key={author.id}>
            <span>{author.author_name}</span>
            <span>{author.email}</span>
            <span>Sales Revenue: {author.sales_revenue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
