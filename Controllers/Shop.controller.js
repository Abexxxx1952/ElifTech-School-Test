const Shop = require("../Models/Shop.model");

module.exports = {
  getShops: async (req, res, next) => {
    try {
      const results = await Shop.find();

      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },
  createNewShop: async (req, res, next) => {
    try {
      const shop = new Shop(req.body);
      const result = await shop.save();
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
