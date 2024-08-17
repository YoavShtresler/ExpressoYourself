const express = require('express');
const router = express.Router();
// const exampleController = require('../controllers/exampleController');

// Define your routes
router.get('/', (req, res) => res.json("this is first route"))
// router.get('/:id', (req, res) => res.json("this is first route"))
// router.post('/first', exampleController.createExample);
// Add more routes as needed

module.exports = router