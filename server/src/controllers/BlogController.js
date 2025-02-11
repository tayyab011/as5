import {
  blogcreateService,
  getallblogService,
  updateblogService,
  deleteblogService,
} from "../service/BlogService.js";



export const createblog = async (req, res) => {
  let result = await blogcreateService(req);
  return res.status(200).json(result);
};

export const readblog = async (req, res) => {
  let result = await getallblogService(req);
  return res.status(200).json(result);
};
export const updateblog = async (req, res) => {
  let result = await updateblogService(req, res);
  
  return res.status(200).json(result);
};
export const deleteblog = async (req, res) => {
  let result = await deleteblogService(req, res);
  
  return res.status(200).json(result);
};