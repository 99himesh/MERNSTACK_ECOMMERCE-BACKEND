const { Product } = require("../model/Product");

exports.createProduct=async(req,res)=>{
    const product=new Product(req.body)
  try{
    const doc=await product.save()  ;
    res.status(201).json(doc)
  }catch(err){ 
     res.status(400).json(err)
  }     
}
exports.fetchAllProducts =async(req,res)=>{
  let query=Product.find({})
  let totalProductQuery=Product.find({})


  if(req.query._sort && req.query._order){
    query= query.sort({[req.query._sort]:req.query._order})

  }
  if(req.query.category ){
    query =query.find({category:req.query.category})
    totalProductQuery=totalProductQuery.find({category:req.query.category})
  }
  if(req.query.brand ){
    query= query.find({brand:req.query.brand})
    totalProductQuery=totalProductQuery.find({brand:req.query.brand})
  }
  const totalDocs=await totalProductQuery.count().exec();
  console.log({totalDocs})
  if(req.query._page && req.query._limit ){
   const pageSize=req.query._limit;
   const page=req.query._page;
   query=query.skip(pageSize*(page-1)).limit(pageSize)
      
  }
try{
  const doc=await query.exec()  ;
  res.set("X-TOTAL-COUNT",totalDocs)
  res.status(201).json(doc)
}catch(err){ 
   res.status(400).json(err)
}     
}

exports.fetchProdctById=async(req,res)=>{
  const {id}=req.params;
  try{
  const product=await Product.findById(id);  
    res.status(201).json(product)
  }catch(err){ 
     res.status(400).json(err)
  } 
}
exports.updateProducts=async(req,res)=>{
  const {id}=req.params;
  try{
  const product=await Product.findByIdAndUpdate(id,req.body,{new:true});  
    res.status(201).json(product)
  }catch(err){ 
     res.status(400).json(err)
  } 
}