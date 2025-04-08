// Base URL for your backend
const baseURL = 'http://localhost:3000';

// LOGIN
async function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const res = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = 'index.html';
  } else {
    alert(data.message);
  }
}

// SIGNUP
async function signup() {
  const u_id = document.getElementById('signupUID').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const role = document.getElementById('signupRole').value;

  const res = await fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ u_id, email, password, role })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
  } else {
    alert(data.message);
  }
}

// ADD BOOK
async function addBook() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return alert('Please log in.');

  const name = document.getElementById('bookName').value;
  const author = document.getElementById('bookAuthor').value;
  const isbn = document.getElementById('bookISBN').value;
  const availability = document.getElementById('bookAvailable').checked;

  const res = await fetch(`${baseURL}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, author, ISBN: isbn, availability })
  });

  const data = await res.json();
  if (res.ok) {
    fetchBooks(); // Refresh book list
  } else {
    alert(data.message);
  }
}

// FETCH & DISPLAY BOOKS
async function fetchBooks() {
  const res = await fetch(`${baseURL}/books`);
  const books = await res.json();

  const container = document.getElementById('booksList');
  container.innerHTML = '';
  books.forEach(book => {
    const card = document.createElement('div');
    card.innerHTML = `
      <p><strong>${book.name}</strong> by ${book.author}</p>
      <p>ISBN: ${book.ISBN}</p>
      <p>Status: ${book.availability ? 'Available' : 'Not Available'}</p>
      <button onclick="toggleAvailability('${book._id}')">Toggle Availability</button>
      <button onclick="deleteBook('${book._id}')">Delete</button>
      <hr>
    `;
    container.appendChild(card);
  });
}

// TOGGLE AVAILABILITY
async function toggleAvailability(id) {
  await fetch(`${baseURL}/books/${id}/toggle`, { method: 'PATCH' });
  fetchBooks();
}

// DELETE BOOK
async function deleteBook(id) {
  await fetch(`${baseURL}/books/${id}`, { method: 'DELETE' });
  fetchBooks();
}

// Load books on page load
if (window.location.pathname.includes('index.html')) {
  fetchBooks();
}
