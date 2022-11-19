const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  order: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      shop: {
        type: String,
        required: true,
      },

      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
