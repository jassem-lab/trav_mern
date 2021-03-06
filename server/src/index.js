const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 1337;
const app = express();
const logs = require('./api/logs');
require('dotenv').config();

// database connection settings

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('Database connected');
} catch (error) {
  throw error;
}

// Middlewares
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// APIs
app.get('/', (req, res) => {
  res.json({
    message: ' ✖ hello world ! ✖ ',
  });
});

app.use('/api/logs', logs);

// Middlware v2

app.use((req, res, next) => {
  const error = new Error(`not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🚀' : error.stack,
  });
});
// Start server

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
