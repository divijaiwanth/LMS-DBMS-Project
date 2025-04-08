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


---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

---

## ☁️ Setting Up MongoDB Atlas

1. **Sign up** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. **Create a new project**
3. **Build a cluster** (Choose a free shared cluster)
4. **Create a Database User**
   - Username: `your-username`
   - Password: `your-password`
   - Save these for later
5. **Whitelist your IP Address**
   - Allow access from your current IP (`0.0.0.0/0` allows from anywhere)
6. **Connect your application**
   - Choose "Connect your application"
   - Copy the connection string like:
     ```
     mongodb+srv://your-username:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=libraryDB
     ```
   - Replace `<password>` with your actual password
     - ⚠️ Make sure to **URL-encode** special characters (e.g. `@` → `%40`, `!` → `%21`)

---

## 🧪 Backend Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-system.git
cd library-system
```

2. Install backend dependencies
```bash
npm install
```
3. Configure environment variables
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority&appName=libraryDB
PORT=3000

```


⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/books	Fetch all books
POST	/api/books	Add a new book
DELETE	/api/books/:id	Delete a book
PATCH	/api/books/:id/toggle	Toggle availability of a book

```
📌 Technologies Used
MongoDB Atlas

Mongoose

Express.js

Node.js

HTML/CSS

JavaScript (Vanilla)

