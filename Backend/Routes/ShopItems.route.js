const express = require("express");
const router = express.Router();

const ShopsItemsController = require("../Controllers/ShopItems.controller");

router.get("/:shop", ShopsItemsController.findItemsByShop);
router.post("/", ShopsItemsController.createNewItem);

module.exports = router;
