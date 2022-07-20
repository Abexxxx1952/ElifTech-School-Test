const createError = require("http-errors");

const Order = require("../Models/Order.model");

module.exports = {
  createNewOrder: async (req, res, next) => {
    try {
      const order = new Order(req.body);
      const result = await order.save();
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

  getAllOrders: async (req, res, next) => {
    try {
      const results = await Order.find();

      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },
};
