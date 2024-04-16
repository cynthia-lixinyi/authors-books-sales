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

async function getTopTenAuthors(authorName) {
  let query = db('authors')
    .leftJoin('books', 'authors.id', 'books.author_id')
    .leftJoin('sale_items', 'books.id', 'sale_items.book_id')
    .select('authors.id', 'authors.author_name')
    .sum({ sales_revenue: db.raw('sale_items.quantity * sale_items.item_price') })
    .groupBy('authors.id')
    .orderByRaw('SUM(sale_items.quantity * sale_items.item_price) DESC')
    .limit(10);
  if (authorName) {
    // query = query.where('authors.author_name', authorName).first();
    query = query.where(db.raw('lower(authors.author_name)'), 'like', '%' + authorName.toLowerCase() + '%').first();
  }
  return await query;
}

// Get all top 10 performing authors
server.get('/top-10-authors', async (req, res) => {
  try {
    const authorName = req.query.author_name;
    const topTenAuthors = await getTopTenAuthors(authorName);
    if (authorName && !topTenAuthors) {
      return res.status(404).json({ 
        message: '404: The given author in url is not found in top 10 performing authors' 
      });
    }
    res.json(topTenAuthors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: '500: Internal server error' });
  }
});

module.exports = server;