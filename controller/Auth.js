const { User } = require("../model/User");

exports.createUser=async(req,res)=>{
    const user=new User(req.body)
  try{
    const doc=await user.save()  ;
    res.status(201).json(doc)
  }catch(err){ 
     res.status(400).json(err)
  }     
}
exports.loginUser=async(req,res)=>{
    try{
    const user=await User.findOne({email:req.body.email}).exec();
            if(user.password==req.body.password){
            res.status(201).json(user)
           
        }else{
            res.status(401).json({message:"invalid credentials"})
        }
      }catch(err){ 
         res.status(400).json(err)
      } 
  
}