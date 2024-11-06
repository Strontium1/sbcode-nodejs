const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

let prod_categories = [
  { 'id': 1, 'name': 'Elektronik' }, 
  { 'id': 2, 'name': 'Perabotan' },
  { 'id': 3, 'name': 'Makanan' }
];

let products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' }, 
  { id: 2, name: 'TV', category: 'Elektronik' }, 
  { id: 3, name: 'Kulkas', category: 'Elektronik' }, 
  { id: 1, name: 'Meja', category: 'Perabotan' }, 
  { id: 2, name: 'Kursi', category: 'Perabotan' }, 
  { id: 3, name: 'Lemari', category: 'Perabotan' }
];

app.get('/api/search/:id', (req, res) => {
  const search_query = req.params.id ? parseInt(req.params.id) : null;
  if(!search_query){
    return res.status(404).json({ message: "ID not found" })
  };
  const q_results = products.filter(
    p => p.id === search_query
  );

  res.json({
    query: search_query, 
    q_results
  });
});

app.get('/api/search', (req, res) => {
  const name_query = (req.query.name || '').toLowerCase();
  const cat_query = (req.query.category || '').toLowerCase()

  if(!name_query && !cat_query){
    return res.status(404).json({ message: "No name and category provided." })
  };

  const q_results = products.filter(p => {
    const match_name = name_query ? p.name.toLowerCase().includes(name_query) : true;
    const match_cat = cat_query ? p.category.toLowerCase().includes(cat_query) : true;
    return match_cat && match_name;
  })

  res.json({
    name_query: name_query, 
    category_query: cat_query, 
    q_results
  });
});

app.get('/api/search/:id/', (req, res) => {                             // penggunaan: /api/search/id?category="..."
  const search_query = (req.query.category || '').toLowerCase();
  const id_query = req.params.id ? parseInt(req.params.id) : null;
  if(!search_query){
    return res.status(404).json({ message: "Category not found" })
  };
  var q_results = products.filter(
    p => p.category.toLowerCase().includes(search_query)
  );

  if(!id_query){
    return res.status(404).json({ message: "ID not found" })
  };
  q_results = q_results.filter(
    p => p.id === id_query
  );

  res.json({
    query: search_query, 
    q_results
  });
});

app.get('/api/search', (req, res) => {
  res.json(products);
});

app.get('/api/products', (req, res) => {
  res.json(prod_categories);
});

app.get('/api/products/:id', (req, res) => {
  const catId = parseInt(req.params.id);
  const catName = prod_categories.find(p => p.id === catId)
  if (catName) {
    res.json(catName);
  } else {
    res.status(404).json({ message: 'Product not found' });
  };
});

app.post('/api/products', (req, res) => {
  const newProducts = req.body;
  newProducts.id = prod_categories.length ? prod_categories[prod_categories.length - 1].id + 1 : 1;
  prod_categories.push(newProducts);
  res.json(newProducts);
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = prod_categories.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    prod_categories[productIndex] = { id: productId, ...req.body };
    res.json(prod_categories[productIndex]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  };
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  prod_categories = prod_categories.filter(p => p.id !== productId);
  res.json(prod_categories);
});

app.listen(PORT, () => {
  console.log(`Listened at http://localhost:${PORT}`);
});
