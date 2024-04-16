const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./dbConfig');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json()); // parse incoming requests into JSON payloads 

server.get('/', (req, res) => {
  res.send('Welcome to the authors-books-sales app server!');
})

// Get all top 10 performing authors
server.get('/top-10-authors', async (req, res) => {
  try {
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
  }
})

module.exports = server;