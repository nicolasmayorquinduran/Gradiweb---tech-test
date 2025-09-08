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

Don't forget to set up your environment variables! Before running the project, create a .env file by duplicating the .env-template file and filling in the required values.

---

# 🚀 What are you going to see?

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

## ✨ Added Value

Our development approach combines the best of both worlds to deliver a superior user experience and a robust architecture.

- **Hybrid Rendering (SSR + SPA)**
We've implemented a hybrid rendering approach for the products, blending the speed of Server-Side Rendering (SSR) with the fluidity of a Single-Page Application (SPA).

Initial Load: Products are rendered on the server, ensuring the first page loads quickly and is fully indexed by search engines for optimal SEO.

```js
    const from = parseInt(req.query.from) || 0;
    const limit = parseInt(req.query.limit);
    const products = require('./data/products.json');
    const selectedProducts = limit ? products.slice(from, from + limit) : products;
    const html = await engine.renderFile('featured-products', { products: selectedProducts, settings: settings.sections });
    res.send(html);
```

Infinite Scroll: As the user scrolls, new products are fetched on demand via an offset and injected directly into the DOM. This provides a seamless SPA experience without requiring a full page reload, conserving both server and client resources.

```js
    const htmlString = await response.text();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const newNodes = Array.from(doc.querySelectorAll('.product-card'));
    allProducts.push(...newNodes);
    __appendProducts(newNodes);
    offset += newNodes.length;
```


- **Smooth Transitions**
The user interface includes various subtle transitions, enhancing the overall user experience and making the site feel more polished and dynamic.