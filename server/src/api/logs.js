const { Router } = require('express');
const logEntrySchema = require('../models/logEntry');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '🌺 hello world',
  });
});

router.get('/', async (req, res) => {
  try {
    const entries = await logEntrySchema.find();
    res.json(entries);
  } catch (error) {
    throw error;
  }
});

router.post('/', async (req, res) => {
  try {
    const logEntry = new logEntrySchema(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'validationError') {
      res.status(422);
    }
    throw error;
  }
});

module.exports = router;
