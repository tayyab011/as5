//registration

import { loginService, logoutService, RegistrationService } from "../service/UserService.js"

export const register = async(req,res)=>{
 let result = await RegistrationService(req)
 return res.json(result)
}
export const login = async(req,res)=>{
 let result = await loginService(req, res);
 return res.json(result)
}
export const logout = async(req,res)=>{
 let result = await logoutService(req, res);
 return res.json(result)
}