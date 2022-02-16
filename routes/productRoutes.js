const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

router.post("/search", productsController.searchProducts);
router.post("/create", productsController.createProduct);
router.patch("/:id", productsController.uodateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
