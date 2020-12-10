const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  amountOfPaper: {type: Number, required: true},
  customer: {type: String, required: true},
  profit: {type: Number, required: true},

}, {timestamps: true});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;