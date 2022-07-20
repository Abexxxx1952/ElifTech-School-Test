const express = require("express");
const router = express.Router();

const ShopController = require("../Controllers/Shop.controller");

router.get("/", ShopController.getShops);
router.post("/", ShopController.createNewShop);

module.exports = router;
