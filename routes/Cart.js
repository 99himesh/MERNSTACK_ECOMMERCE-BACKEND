const express = require("express");
const { addTocart, fetchCartByUser, deleteFromCart, updateCart } = require("../controller/Cart");

const router = express.Router();


router.get("/", fetchCartByUser)
      .post("/", addTocart)
      .delete("/:id", deleteFromCart)
      .patch("/:id", updateCart)



exports.router = router;