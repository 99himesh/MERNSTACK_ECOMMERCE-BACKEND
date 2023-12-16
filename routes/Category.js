const express = require("express");
const { fetchCatagory, createCategories } = require("../controller/Categary");

const router = express.Router();


router.get("/", fetchCatagory).post("/",createCategories)


exports.router = router;