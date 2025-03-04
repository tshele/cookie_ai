const Product = require('../models/product');

exports.getRecommendations = async (req, res) => {
  try {
    const products = await Product.find().limit(5); // Placeholder for actual recommendation logic
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};