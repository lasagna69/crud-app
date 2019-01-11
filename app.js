const express = require('express');
const bodyParser = require('body-parser');

//imports routes for Products
const product = require('./routes/product.route');

//initialize express app
const app = express();

app.use('/products', product);

let port = 1234;

app.listen(port, ()=>{
	console.log('SERVER IS RUNNING ON PORT '+port);
})