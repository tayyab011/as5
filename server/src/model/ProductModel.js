import mongoose, { version } from "mongoose";

const DataSchema =mongoose.Schema(
{

productName :{type:String },
productPrice :{type:String },
productDes :{type:String },
img :{type:String }
},

{
    timestamps:true,
    versionKey:false,
}
)

const ProductModel =mongoose.model("products" , DataSchema)

export default ProductModel;