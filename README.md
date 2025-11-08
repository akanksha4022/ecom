# 🛒 Vibe Commerce — Mock E-Commerce Cart

### 📌 Overview
**Vibe Commerce** is a full-stack shopping cart web app built as part of the Vibe Commerce screening task.  
It demonstrates a complete e-commerce flow — including product listing, cart management, and checkout — using a modern MERN-style stack.  

---

## 🧠 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite) + Tailwind CSS |
| **Backend** | Node.js + Express |
| **Database** | MongoDB (via Mongoose) |
| **API Integration** | [Fake Store API](https://fakestoreapi.com/) |
| **Version Control** | Git + GitHub |

---

## ⚙️ Project Structure

mock-ecom-cart/
├── backend/ # Express server + MongoDB models + APIs
│ ├── routes/
│ ├── models/
│ ├── server.js
│ └── .env.example
├── frontend/ # React (Vite) app + Tailwind CSS UI
│ ├── src/
│ ├── package.json
│ └── vite.config.js
└── README.md


---
## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/<your-username>/mock-ecom-cart.git
cd mock-ecom-cart

---


### 2️⃣ Setup Backend
cd backend
npm install




 ### Create a .env file inside /backend:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mockEcom
PORT=5000


Then run:

npm run dev


Backend will run on 👉 http://localhost:5000

### 3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev


Frontend will run on 👉 http://localhost:5173

💎 Features

✅ Product grid with “Add to Cart”
✅ Cart view with total, quantity, and remove buttons
✅ Checkout form (with name/email validation)
✅ Personalized receipt (shows user details + total)
✅ Real products fetched from Fake Store API
✅ MongoDB persistence for cart and products
✅ Tailwind CSS responsive design
✅ Popup notifications on add/remove


### 🖼️ Screenshots
Page	Screenshot
🛍️ Products	

🛒 Cart	

💳 Receipt

### 📹 Demo Video

🎥 Demo (Loom or YouTube Unlisted):
Click here to watch the 1-2 minute demo

Show product browsing → Add to cart → Checkout → Receipt

### 🧾 Example Flow

1️⃣ User views products from Fake Store API
2️⃣ Adds items to cart (popup “Added to Cart!” appears)
3️⃣ Proceeds to checkout, enters name/email
4️⃣ Receives personalized receipt with total and timestamp


🧑‍💻 Author

Akanksha Singh
