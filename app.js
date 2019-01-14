const express = require('express');
const bodyParser = require('body-parser');

//connecting to remote mongodb
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://User:zkw7tvbr@ds027509.mlab.com:27509/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//imports routes for Products
const product = require('./routes/product.route');

//initialize express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, ()=>{
	console.log('SERVER IS RUNNING ON PORT '+port);
})