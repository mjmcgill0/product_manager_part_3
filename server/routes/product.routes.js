const ProductContoller = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/product', ProductContoller.createProduct);
    app.get('/api/products', ProductContoller.getAllProducts);
    app.get('/api/products/:id', ProductContoller.getProduct);
    app.put('/api/products/:id', ProductContoller.updateProduct);
    app.delete('/api/products/:id', ProductContoller.deleteProduct);
}