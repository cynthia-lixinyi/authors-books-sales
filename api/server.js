const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcome to the authors-books-sales app server!');
})

// Get all top 10 performing authors
server.get('/top-10-authors', async (req, res) => {
  try {
    // Check if author_name query parameter is provided
    // Ex. localhost:8888/top-10-authors?author_name=Sophia%20Thomas
    const authorName = req.query.author_name;

    // If author_name is provided, filter the top authors by author_name
    if (authorName) {
      const topAuthor = await db('authors')
        .leftJoin('books', 'authors.id', 'books.author_id')
        .leftJoin('sale_items', 'books.id', 'sale_items.book_id')
        .select('authors.id', 'authors.author_name')
        .sum({ sales_revenue: db.raw('sale_items.quantity * sale_items.item_price') })
        .groupBy('authors.id')
        .orderByRaw('SUM(sale_items.quantity * sale_items.item_price) DESC')
        .where('authors.author_name', authorName)
        .first();

      if (!topAuthor) {
        return res.status(404).json({ message: '404: The given author is not found in top 10 performing authors' });
      } else {
        return res.json(topAuthor);
      }
    }

    // If author_name is not provided, return all top 10 authors
    const topAuthors = await db('authors')
      .leftJoin('books', 'authors.id', 'books.author_id')
      .leftJoin('sale_items', 'books.id', 'sale_items.book_id')
      .select('authors.id', 'authors.author_name')
      .sum({ sales_revenue: db.raw('sale_items.quantity * sale_items.item_price') })
      .groupBy('authors.id')
      .orderByRaw('SUM(sale_items.quantity * sale_items.item_price) DESC')
      .limit(10);
    res.json(topAuthors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: '500: Internal server error' });
  }
});

module.exports = server;