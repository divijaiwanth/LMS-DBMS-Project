const API = 'http://localhost:3000';

const form = document.getElementById('bookForm');
const booksList = document.getElementById('booksList');

async function fetchBooks() {
  const res = await fetch(`${API}/books`);
  const books = await res.json();
  renderBooks(books);
}

function renderBooks(books) {
  booksList.innerHTML = '';
  books.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `
      <span><strong>Title:</strong> ${book.title}</span>
      <span><strong>Author:</strong> ${book.author}</span>
      <span><strong>Status:</strong> ${book.available ? '✅ Available' : '❌ Not Available'}</span>
      <div class="actions">
        <button onclick="toggleAvailability('${book._id}')">Toggle Availability</button>
        <button class="delete" onclick="deleteBook('${book._id}')">Delete</button>
      </div>
    `;
    booksList.appendChild(div);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  await fetch(`${API}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author })
  });
  form.reset();
  fetchBooks();
});

async function deleteBook(id) {
  await fetch(`${API}/books/${id}`, { method: 'DELETE' });
  fetchBooks();
}

async function toggleAvailability(id) {
  await fetch(`${API}/books/${id}/toggle`, { method: 'PUT' });
  fetchBooks();
}

fetchBooks();
