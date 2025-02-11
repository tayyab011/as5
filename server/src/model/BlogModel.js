import mongoose, { version } from "mongoose";

const DataSchema =mongoose.Schema(
{
img :{type:String },
title :{type:String },
des :{type:String }


},

{
    timestamps:true,
    versionKey:false,
}
)

const BlogModel = mongoose.model("blogs", DataSchema);

export default BlogModel;