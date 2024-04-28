import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description:{
    required:true,
    type:String
  },
  name:{
    type:String,
    required:true
  },
  productImage:{
    type: String
  },
  price:{
    type:Number,
    default:0,
  },
  stock:{
    default:0,
    type:Number
  },
  catgory:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)