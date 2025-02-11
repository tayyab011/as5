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

const ServiceModel = mongoose.model("services", DataSchema);

export default ServiceModel;