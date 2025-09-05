# 🚀 Gradiweb - Technical Test

This project is the solution to the **Gradiweb technical test**.  
It features a landing page built with the **Shopify Simulator framework**, adhering to the provided desktop and mobile designs.

---

## 📋 Implemented Features

This project includes the following sections and functionalities:

### ✅ Essential Sections
- **Top Bar**: Features a marquee-style animation with configurable text from `settings_data.json`.
- **Header**: A sticky header that becomes transparent on scroll. It includes a logo, payment method icons, and links.
- **Footer**: A responsive footer with a logo, text, and social media links, all configurable via `settings_data.json`.

### 🎯 Completed Sections
- **Hero Banner**: A dynamic hero section with a configurable button and text from `settings_data.json`.
- **Product Carousel**: Displays 10 products, with the first 4 visible and the rest revealed by clicking **"View All."**  
  Each product card shows an image, name, price, and tags, with a hover effect on the product image.

---

## 🛠️ Tech Stack & Implementation Details

- **HTML & Liquid** → For semantic structure and dynamic templating.  
- **SASS** → Modular structure using **BEM methodology** for clean class naming.  
- **JavaScript (Vanilla)** → Client-side logic without external frameworks, focusing on clean and reusable code.  
- **Webpack** → Handles asset bundling and SASS compilation, with efficient development via file watching.  
- **GitHub** → Clear, descriptive commit convention and separate branches for feature development.  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone [Your Repository URL]
```

### 2️⃣️ Install dependencies:

```bash
cd shopify-simulator
npm install
```

### 2️⃣ Run the project:

```bash
npm run dev
```
Once started, the application will be accessible at:
👉 http://localhost:3006

