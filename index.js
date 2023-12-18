
require("dotenv").config();
const express = require("express")
const server = express();
const mongoose = require("mongoose");
const cors = require("cors")
const { createProduct } = require("./controller/Products");
const productRouter = require("./routes/Product");
const categoriesRouter = require("./routes/Category")
const brandsRouter = require("./routes/Brand")
const userRouter = require("./routes/User")
const authRouter = require("./routes/Auths")
const cartRouter=require("./routes/Cart")
const orderRouter=require("./routes/Order")
const path=require("path")

server.use(cors())
server.use(express.json())
server.use(express.static(path.resolve(__dirname,"build")))
server.use("/products", productRouter.router)
server.use("/categories", categoriesRouter.router)
server.use("/brands", brandsRouter.router)
server.use("/user", userRouter.router)
server.use("/auth", authRouter.router)
server.use("/cart", cartRouter.router)
server.use("/orders", orderRouter.router)







main().catch(err => console.log(err))
async function main() {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("database connected");
}



server.listen(process.env.PORT, () => {
    console.log("server started")
}) 