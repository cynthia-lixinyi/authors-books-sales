const express = require('express');
const cors = require('cors');
const helmet = require('helmet')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json()); // parse incoming requests into JSON payloads 

server.get('/', (req, res) => {
  res.send('Welcome to the authors-books-sales app server!');
})

server.get('/top-10-authors', (req, res) => {
  res.send('Here are the top 10 performing authors');
})

module.exports = server;