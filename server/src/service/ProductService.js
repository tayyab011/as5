
import mongoose from "mongoose";
import ProductModel from "../model/ProductModel.js";
const ObjectId = mongoose.Types.ObjectId;

export const createProductService = async (req) => {
    try {
        let reqbody = req.body;
      let data = await ProductModel.create(reqbody);
    
    return { status: true, data: data, msg: "product create success" };
    }catch (error) {
    return { status: false, error: error.toString() };
  }
};


export const getallProductService = async () => {
    try {
        let data = await ProductModel.find();
    
    return { status: true, data: data, msg: "product create success" };
    }catch (error) {
    return { status: false, error: error.toString() };
  }
};
export const deleteProductService = async (req,res) => {
    try {
        let id =new ObjectId(req.params.id);
        let result =   await ProductModel.deleteOne({_id:id})
        
    
    return { status: true, data: result, msg: "product delete success" };
    }catch (error) {
    return { status: false, error: error.toString() };
  }
};
