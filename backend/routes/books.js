const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Add a new book
router.post('/', async (req, res) => {
  const { title, author } = req.body;
  const book = new Book({ title, author });
  await book.save();
  res.json(book);
});

// Toggle availability
router.put('/:id/availability', async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.available = !book.available;
  await book.save();
  res.json(book);
});

// Delete book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
