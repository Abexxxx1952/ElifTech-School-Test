const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShopItemsSchema = new Schema({
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
});

const ShopItems = mongoose.model("shopitems", ShopItemsSchema);
module.exports = ShopItems;
