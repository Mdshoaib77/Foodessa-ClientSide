# 🍔 Foodessa – Online Food Ordering Platform

A modern **Full Stack MERN Food Ordering Website** where users can browse menus, order food online, and admins can manage products, orders, and users through a separate dashboard.

---

## Table of Contents

* [About the Project](#about-the-project)
* [Project Overview](#project-overview)
* [Key Features](#key-features)
* [Tech Stack](#tech-stack)
* [Dependencies](#dependencies)
* [Installation & Setup](#installation--setup)
* [Folder Structure](#folder-structure)
* [Contributions](#contributions)
* [How to Contribute](#how-to-contribute)
* [License](#license)
* [Contact](#contact)

---

## About the Project

**Foodessa** is a modern full-stack food ordering platform built with the **MERN Stack**.

It allows users to browse food items, add them to the cart, and place orders easily.

The platform includes a **separate Admin Panel** where administrators can manage food items, orders, and users.

The interface is designed with **Tailwind CSS** and enhanced with **Framer Motion animations** for a smooth and interactive experience.

---

## Project Overview

Foodessa focuses on providing a fast and modern **online food ordering experience**.

### Objectives

* Build a scalable **MERN Stack food ordering platform**
* Implement secure **authentication and authorization**
* Provide **separate Admin Dashboard**
* Deliver smooth UI animations using **Framer Motion**
* Ensure fully **responsive design**

---

## Key Features

* 🍕 Browse food menu and categories
* 🛒 Add to cart and checkout system
* 🔐 Secure authentication using JWT
* 📦 Order placement and tracking
* 📊 Admin dashboard for managing orders
* 🍔 Food item management system
* 🎨 Smooth UI animations with **Framer Motion**
* 📱 Fully responsive design
* ⚡ Optimized performance

---

## Tech Stack

**Frontend:**
React.js · Tailwind CSS · Framer Motion · Axios · React Router

**Backend:**
Node.js · Express.js · MongoDB · Mongoose

**Tools:**
Git · VS Code · Postman · JWT

---

## Dependencies

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x",
  "framer-motion": "^10.x",
  "express": "^4.x",
  "mongoose": "^7.x",
  "jsonwebtoken": "^9.x",
  "bcryptjs": "^2.x",
  "tailwindcss": "^3.x"
}
```

---

## Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/foodessa
cd foodessa
```

---

### 2️⃣ Install dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd server
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the project

Backend:

```bash
npm run server
```

Frontend:

```bash
npm run dev
```

---

## Folder Structure

```plaintext
foodessa/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── utils/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
│
├── admin/
│   ├── dashboard/
│   ├── foods/
│   └── orders/
│
└── package.json
```

---

## Contributions

| Name      | Role                 | Contributions                      |
| --------- | -------------------- | ---------------------------------- |
| Md Shoaib | Full Stack Developer | Frontend, Backend, Database, UI/UX |

---

## How to Contribute

* Fork the Project
* Create a branch (`git checkout -b feature/AmazingFeature`)
* Commit changes (`git commit -m 'Add some AmazingFeature'`)
* Push the branch (`git push origin feature/AmazingFeature`)
* Open a Pull Request

---

## License

Distributed under the **MIT License**.

---

## Contact

* 🍔 **Live Website:** https://foodessa.netlify.app/
* 💼 **Portfolio:** https://mdshoaibdev.netlify.app/
* 🐙 **GitHub:** https://github.com/Mdshoaib77
* 📧 **Email:** [mdshoaibfullstack@gmail.com](mailto:mdshoaibfullstack@gmail.com)
