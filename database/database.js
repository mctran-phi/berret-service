const mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost/products'

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

const ProductsSchema = new mongoose.Schema({
  name: String,
  photoUrl: String,
  desc: String,
  rating: Number,
  review_count: {type: Number, default: 0},
  price: String
});

const Products = mongoose.model('products', ProductsSchema);

module.exports.Products = Products;
module.exports.db = db;