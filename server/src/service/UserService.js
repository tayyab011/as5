
//RegistrationService

import { Cookie_EXPIRATION_TIME } from "../config/config.js";
import UserModel from "../model/UserModel.js";
import { EncodeToken } from './../utility/TokenUtility.js';

export const RegistrationService = async (req) => {
 try {
     let reqbody = req.body;
     let existinguser = await UserModel.find({email: reqbody.email})
     if (existinguser.length >0) {
         return { status: false,msg:"user exist" };
     }
 
     let data = await UserModel.create(reqbody);
     return { status: true, data: data ,msg:"registration success"};
 } catch (error) {
     return { status: false, error: error.toString() };
 }
};




export const loginService = async (req, res) => {
  try {
 
    let exitingUser = await UserModel.findOne({ email: req.body.email });
    if (!exitingUser) {
      return { status: false, msg: "User not found." };
    }

    let reqBody = req.body;
    let data = await UserModel.aggregate([
      { $match: reqBody },
      { $project: { _id: 1, email: 1 } },
    ]);
    
   let { email } = req.body;
    if (data.length === 1) {
      let token = EncodeToken({email});

      // Set cookie
      let options = {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: false, // False means allow cookies in all browsers
        sameSite: "none",
        secure: true,
        path: "/",
      };

      res.cookie("token", token, options);
      return {
        status: true,
        token: token,
        data: data,
        msg: "Login success.",
      };
    } else {
      return { status: false, data: data, msg: "Login failed." };
    }
  } catch (e) {
    return { status: false, error: e.toString(), msg: "Something went wrong." };
  }
};



export const logoutService = async (req, res) => {
  try {
    res.clearCookie("token")
    return { status: true, msg: "Logout success" };
  } catch (e) {
    return { status: false, error: e.toString(), msg: "Something went wrong." };
  }
};