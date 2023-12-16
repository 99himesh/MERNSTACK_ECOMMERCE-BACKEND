const express = require("express");
const { fetchBrand, createBrands } = require("../controller/Brand");

const router = express.Router();


router.get("/", fetchBrand).post("/",createBrands)


exports.router = router;