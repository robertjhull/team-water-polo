const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },

  columnId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Column'
    },
    
},
{
  timestamps: true
});

module.exports = Card = mongoose.model("Card", cardSchema);