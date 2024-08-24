// Import required models
const Example = require('../models/products.js');

// Define service methods
exports.getExamples = async () => {
  return await Example.find();

};

exports.createExample = async (name) => {
  const example = new Example({ name });
  return await example.save();
};