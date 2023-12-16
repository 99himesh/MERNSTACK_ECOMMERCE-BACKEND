const { Category } = require("../model/Categary");

exports.fetchCatagory=async (req,res)=>{

    try{
        const categories=await Category.find({}).exec();
        res.status(200).json(categories)

    }catch(err){
        res.status(400).json(err)
    }
}
exports.createCategories=async(req,res)=>{
    const catagories=new Category(req.body)
  try{
    const doc=await catagories.save()  ;
    res.status(201).json(doc)
  }catch(err){ 
     res.status(400).json(err)
  }     
}