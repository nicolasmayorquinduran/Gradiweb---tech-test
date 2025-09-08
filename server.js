const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();

const engine = new Liquid({
  root: [
    path.resolve(__dirname, 'templates'),
    path.resolve(__dirname, 'sections'),
    path.resolve(__dirname, 'snippets')
  ],
  extname: '.liquid',
});

app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'liquid');

app.use(express.static('public'));

const collections = require('./data/collections.json');
const paymentMethods = require('./data/payment-methods.json');
const settings = JSON.parse(fs.readFileSync('./config/settings_data.json', 'utf-8'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (_, res) => {
  res.render('index', { 
    paymentMethods,
    products: [], 
    collections, 
    settings: settings.sections
  });
});

app.get('/api/products', async (req, res) => {
  try {
    const from = parseInt(req.query.from) || 0;
    const limit = parseInt(req.query.limit);
    const products = require('./data/products.json');
    const selectedProducts = limit ? products.slice(from, from + limit) : products;
    const html = await engine.renderFile('featured-products', { products: selectedProducts, settings: settings.sections });
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error renderizando los productos');
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
