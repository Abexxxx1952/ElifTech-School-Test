const createError = require("http-errors");
const mongoose = require("mongoose");

const ShopItems = require("../Models/ShopItems.model");

module.exports = {
  findItemsByShop: async (req, res, next) => {
    const shop = req.params.shop;

    try {
      const items = await ShopItems.find({ shop });

      if (!items) {
        throw createError(404, "Product does not exist.");
      }
      res.send(items);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Product shop"));
        return;
      }
      next(error);
    }
  },
  createNewItem: async (req, res, next) => {
    try {
      const item = new ShopItems(req.body);
      const result = await item.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === "ValidationError") {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },
};
