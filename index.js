const express = require("express");
const dotenv = require("dotenv").config();
const createError = require("http-errors");

require("./initDB")();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ShopRoute = require("./Routes/Shop.route");
const ShopItemsRoute = require("./Routes/ShopItems.route");
const OrdersRoute = require("./Routes/Orders.route");

app.use("/shops", ShopRoute);
app.use("/shopItems", ShopItemsRoute);
app.use("/orders", OrdersRoute);

app.use((req, res, next) => {
  next(createError(404, "Not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT + "...");
});