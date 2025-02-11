import {
  createService,
  getService,
  updateService,
  deleteService,
} from "../service/ServicesService.js";



export const create_service = async (req, res) => {
  let result = await createService(req);
  return res.status(200).json(result);
};

export const read_service = async (req, res) => {
  let result = await getService(req);
  return res.status(200).json(result);
};
export const update_service = async (req, res) => {
  let result = await updateService(req, res);

  return res.status(200).json(result);
};
export const delete_service = async (req, res) => {
  let result = await deleteService(req, res);

  return res.status(200).json(result);
};