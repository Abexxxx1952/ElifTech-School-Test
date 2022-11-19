const express = require("express");
const router = express.Router();

const OrdersController = require("../Controllers/Orders.controller");

router.post("/", OrdersController.createNewOrder);
router.get("/", OrdersController.getAllOrders);

module.exports = router;
