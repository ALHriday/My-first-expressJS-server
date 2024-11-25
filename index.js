const express = require('express')
const cors = require('cors')
const products = require('./products.json');
const app = express();

const port = process.env.PORT || 7000;

app.use(cors());


app.get("/", (req, res) => {
    res.send('Hello World 2');
});
app.get("/products", (req, res) => {
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const eachProduct = products.find(product => product.id === id)
    res.send(eachProduct);
});

app.listen(port, function () {
    console.log(`web server listening on port: ${port}`);
});