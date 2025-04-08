# 📚 Library Management System

This is a simple full-stack **Library Management System** built with:

- **MongoDB Atlas** (Cloud database)
- **Node.js** + **Express** (Backend API)
- **Vanilla JavaScript** + **HTML/CSS** (Frontend UI)

The app lets you:
- 📥 Add books with `Name`, `Author`, `ISBN`, and `Availability`
- 📋 View all books
- 🗑️ Delete books
- ✅ Toggle availability

---

## 📁 Project Structure


---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+)
- MongoDB Atlas account (or local MongoDB if you prefer)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-system.git
cd library-system
npm install
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority&appName=libraryDB
PORT=3000


cd backend
node server.js

✅ MongoDB connected
🚀 Server running on http://localhost:3000

⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/books	Fetch all books
POST	/api/books	Add a new book
DELETE	/api/books/:id	Delete a book
PATCH	/api/books/:id/toggle	Toggle availability of a book

'''
📌 Technologies Used
MongoDB Atlas

Mongoose

Express.js

Node.js

HTML/CSS

JavaScript (Vanilla)

