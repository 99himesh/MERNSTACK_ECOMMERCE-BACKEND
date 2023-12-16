const express = require("express");
const { createProduct, fetchAllProducts, fetchProdctById, updateProducts } = require("../controller/Products");

const router = express.Router();


router.post("/", createProduct)
      .get("/", fetchAllProducts)
      .get("/:id",fetchProdctById)
      .patch("/:id",updateProducts)


exports.router = router;