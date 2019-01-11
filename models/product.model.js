const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defines fields of a model/table
let ProductSchema = new Schema({
	name: {type: String, required: true, max: 100},
	price: {type: Number, required: true},
});

//export model
module.exports = mongoose.model('Product', ProductSchema);