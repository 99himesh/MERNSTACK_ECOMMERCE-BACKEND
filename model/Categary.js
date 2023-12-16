const mongoose=require('mongoose');
const {Schema}=mongoose;


const CategarySchema=new Schema({
    value: { type : String, required: true, unique: true},
    label: { type : String, required: true,unique: true},
 
})


const virtual=CategarySchema.virtual("id")
virtual.get(function(){
      return this._id
})

CategarySchema.set("toJSON",{
    virtuals:true,
    versionKey:false,
    transform: function (doc,ret){delete ret._id}
})

exports.Category=mongoose.model("Category",CategarySchema)