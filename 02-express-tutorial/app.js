const express = require('express');
const app = express();

const { products } = require('./data');

app.use(express.static('./public'));

app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'it worked!' });
});

app.get('/api/v1/products', (req, res) => {
  // console.log(products);
  res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);

  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).send('That product was not found :(');
  }
  return res.json(product);
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, parseInt(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.get('/api/v1/products/below/:price', (req, res) => {
  const maxPrice = parseFloat(req.params.price);
  const productPrice = products.find((p) => p.price <= maxPrice);

  return res.json(productPrice);
});

app.post('/', (req, res) => {
  res.send('posted :)');
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
