import axios from "axios";
import { errortoast, successtoast } from "../helper/Helper";
let baseurl = "http://localhost:5050/api";
export const registerone =async (reqbody)=>{

let result = await axios.post(`${baseurl}/register`, reqbody);

  if (result.data.status === "success") {
  
      successtoast("register success");
       
  /* setsuccessmessage("register successfull")
  setTimeout(() => {
    location.href("./LoginPage")
  }, 2000);  row toster*/
     }else{
       errortoast(result.data.msg);
     }

}
export const apireqpostmethod =async (apiendpoint,reqbody)=>{

let result = await axios.post(`${baseurl}${apiendpoint}`, reqbody);

  if (result.data.status === "success") {
  
      successtoast("register success");
       
  /* setsuccessmessage("register successfull")
  setTimeout(() => {
    location.href("./LoginPage")
  }, 2000);  row toster*/
     }else{
       errortoast(result.data.msg);
     }

}