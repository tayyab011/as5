import { teamService, getallteamService, updateTeamService, deleteTeamService } from "../service/teamservice.js";



export const createteam = async (req, res) => {
  let result = await teamService(req);
  return res.status(200).json(result);
};

export const readteam = async (req, res) => {
  let result = await getallteamService(req);
  return res.status(200).json(result);
};
export const updateteam = async (req, res) => {
  let result = await updateTeamService(req, res);
  
  return res.status(200).json(result);
};
export const deleteteam = async (req, res) => {
  let result = await deleteTeamService(req, res);
  
  return res.status(200).json(result);
};