const mongoose = require('mongoose');
const { Schema } = mongoose;

const logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
    },
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    visitDate: {
      type: Date,
      required: true,
    },
    Image: String,
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  {
    timestamp: true,
  }
);

module.exports = logEntrySchema;
