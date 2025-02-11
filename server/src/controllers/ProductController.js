import { createProductService, deleteProductService, getallProductService } from "../service/ProductService.js";

export const createproduct = async (req, res) => {
  let result = await createProductService(req)
  return res.status(200).json(result);
};
export const getallproduct = async (req, res) => {
  let result = await getallProductService(req)
  return res.status(200).json(result);
};
export const deleteProduct = async (req, res) => {
  let result = await deleteProductService(req);
  return res.status(200).json(result);
};