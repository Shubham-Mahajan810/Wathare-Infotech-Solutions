// routes/data.js
const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Route to get filtered data
router.get('/', async (req, res) => {
  try {
    const { startTime, endTime, frequency } = req.query;
    
    // Convert query strings to Date objects
    const start = new Date(startTime);
    const end = new Date(endTime);

    // Query the database for filtered data
    const data = await Data.find({
      timestamp: {
        $gte: start,
        $lte: end,
      },
    });

    // Process data according to the frequency (e.g., hourly, daily, weekly)
    // Implement your frequency filtering logic here

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
