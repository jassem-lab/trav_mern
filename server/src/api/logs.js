const { Router } = require('express');
const logEntrySchema = require('../models/logEntry');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '🌺 hello world',
  });
});

router.post('/', async (req, res) => {
  try {
    const logEntry = new logEntrySchema(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
