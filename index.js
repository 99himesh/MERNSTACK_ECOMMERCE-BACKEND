const express=require("express")
const server=express();
const mongoose=require("mongoose");
const { createProduct } = require("./controller/Products");
const productRouter=require("./routes/Product");
const categoriesRouter=require("./routes/Category")
const brandsRouter=require("./routes/Brand")
const cors=require("cors")


server.use(cors())
server.use(express.json())
server.use("/products",productRouter.router)
server.use("/categories",categoriesRouter.router)
server.use("/brands",brandsRouter.router)

    

main().catch(err=>console.log(err))
async function main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
        console.log("database connected");
}



server.listen(8080,()=>{
    console.log("server started")
}) 