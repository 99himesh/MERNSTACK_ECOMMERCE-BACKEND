const express = require("express");
const { fetchOrderByUser, deleteOrder, createOrders, updateOrders } = require("../controller/Order");

const router = express.Router();


router.get("/", fetchOrderByUser)
      .post("/", createOrders)
      .delete("/:id", deleteOrder)
      .patch("/:id", updateOrders)



exports.router = router;