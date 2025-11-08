# Vibe Commerce — Mock E-Commerce Cart

### Overview
**Vibe Commerce** is a full-stack shopping cart web app built as part of the Vibe Commerce screening task.  
It demonstrates a complete e-commerce flow — including product listing, cart management, and checkout — using a modern MERN-style stack.  

--

## Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite) + Tailwind CSS |
| **Backend** | Node.js + Express |
| **Database** | MongoDB (via Mongoose) |
| **API Integration** | [Fake Store API](https://fakestoreapi.com/) |
| **Version Control** | Git + GitHub |

--

## Project Structure

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


--
##  Setup Instructions

### 1️⃣ Clone the Repository
```
git clone https://github.com/akanksha4022/ecom.git
cd mock-ecom-cart
```

--


### 2️⃣ Setup Backend
```
cd backend
npm install
```




 ### Create a .env file inside /backend:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mockEcom
PORT=5000
```


Then run:
```
npm run dev
```


Backend will run on  http://localhost:5000

--

### 3️⃣ Setup Frontend
```
cd ../frontend
npm install
npm run dev
```


Frontend will run on  http://localhost:5173

### Features

* Product grid with “Add to Cart”
* Cart view with total, quantity, and remove buttons
* Checkout form (with name/email validation)
* Personalized receipt (shows user details + total)
* Real products fetched from Fake Store API
* MongoDB persistence for cart and products
* Tailwind CSS responsive design
* Popup notifications on add/remove


### 🖼️ Screenshots
Page	Screenshot
1. 🛍️ Products	<img width="1919" height="861" alt="image" src="https://github.com/user-attachments/assets/c80561fd-0543-477f-8124-cf91fa074329" />


2. 🛒 Cart	<img width="979" height="364" alt="image" src="https://github.com/user-attachments/assets/7c565556-a425-41ca-9ebb-18aaf06dfe44" />


3. 💳 Receipt <img width="1896" height="867" alt="image" src="https://github.com/user-attachments/assets/6e2009cb-e87b-45be-81e1-749bbc122207" />


###  Demo Video

🎥 Demo (Loom or YouTube Unlisted):

- [https://youtu.be/2zEJJsJbn6Y]


###  Example Flow

 1. User views products from Fake Store API
 2️. Adds items to cart (popup “Added to Cart!” appears)
 3. Proceeds to checkout, enters name/email
 4️. Receives personalized receipt with total and timestamp


🧑‍💻 Author

Akanksha Singh
