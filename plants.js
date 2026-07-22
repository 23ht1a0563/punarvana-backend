const express = require('express');
const Plant = require('../models/Plant');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all plants - public
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add plant - only for logged in users
router.post('/', auth, async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.json(plant);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;