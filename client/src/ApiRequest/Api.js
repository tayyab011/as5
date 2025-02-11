import axios from "axios";
import { DeleteAlert, errortoast, successtoast } from "../helper/Helper.js";


let baseurl = "http://localhost:5050/api";


class apicall {
  async register(reqbody) {
    let result = await axios.post(`${baseurl}/register`, reqbody);

    if (result.data.status === true) {
      successtoast(result.data.msg);

      return true;
      /* setsuccessmessage("register successfull")
  setTimeout(() => {
    location.href("./LoginPage")
  }, 2000);  row toster*/
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }
  /* getUserWithLocalStorage(){
    try {
      
      const users =localStorage.getItem("users")
      if(users){
        return JSON.parse(users)
      }
    } catch (e_) {
      throw Error("not founds users")
    }
   
  } */
  async login(data) {
    let result = await axios.post(`${baseurl}/login`, data, {
      withCredentials: true,
    }); /* cookie set er jonne with credential true kora hoise paramiter er serial wise */

    if (result.data.status === true) {
      localStorage.setItem("users", JSON.stringify(result?.data));
      successtoast(result.data.msg);
      return true;
      /* setsuccessmessage("register successfull")
  setTimeout(() => {
    location.href("./LoginPage")
  }, 2000);  row toster*/
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async logout() {
    let result = await axios.get(`${baseurl}/logout`, {
      withCredentials: true,
    }); /* cookie set er jonne with credential true kora hoise paramiter er serial wise */

    if (result.data.status === true) {
      successtoast(result.data.msg);
      return true;
      /* setsuccessmessage("register successfull")
  setTimeout(() => {
    location.href("./LoginPage")
  }, 2000);  row toster*/
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }
  async createproduct(reqbody) {
    let result = await axios.post(`${baseurl}/createproduct`, reqbody, {
      withCredentials: true,
    });

    if (result.data.status === true) {
      successtoast(result.data.msg);
      return true;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }
  async getallproduct() {
    let result = await axios.get(`${baseurl}/allproduct`);

    if (result.data.status === true) {
      return result.data.data;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }
  async deleteproduct(id) {
    let isconfirm = await DeleteAlert();
    let result = await axios.delete(`${baseurl}/deleteProduct/` + id);
    if (isconfirm) {
      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    }
  }

  async fileupload(reqbody) {
    let result = await axios.post(`${baseurl}/file-upload`, reqbody, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (result.data.status === true) {
      /*  successtoast(result.data.msg); */
      return result;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }
  async contact(reqbody) {
    let result = await axios.post(`${baseurl}/contact`, reqbody);

    if (result.data.status === true) {
      successtoast(result.data.msg);
      return result;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async getallteam() {
    let result = await axios.get(`${baseurl}/readteam`);

    if (result.data.status === true) {
      return result.data.data;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async createteamdata(reqbody) {
    let result = await axios.post(`${baseurl}/createteam`, reqbody);

    if (result.data.status === true) {
      successtoast(result.data.msg);
      return true;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async deleteteamdata(id) {
    let isconfirm = await DeleteAlert();
    let result = await axios.delete(`${baseurl}/deleteteam/` + id);
    if (isconfirm) {
      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    }
  }
  async updatedata(id, reqBody) {
    try {
      let result = await axios.put(`${baseurl}/updateteam/${id}`, reqBody);

      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    } catch (error) {
      errortoast("Error updating team member");
      return false;
    }
  }

  /* blog */
  async getallblogdata() {
    let result = await axios.get(`${baseurl}/readblog`);

    if (result.data.status === true) {
      return result.data.data;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async createblogdata(reqbody) {
    let result = await axios.post(`${baseurl}/createblog`, reqbody);

    if (result.data.status === true) {
      successtoast(result.data.msg);
      return true;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async deleteblogdata(id) {
    let isconfirm = await DeleteAlert();
    let result = await axios.delete(`${baseurl}/deleteblog/` + id);
    if (isconfirm) {
      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    }
  }

  async updateblogdata(id, reqbody) {
    try {
      let result = await axios.put(`${baseurl}/updateblog/${id}`, reqbody);

      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    } catch (error) {
      errortoast("Error updating team member");
      return false;
    }
  }

  /* service data */

  async getallservicedata() {
    let result = await axios.get(`${baseurl}/read_service`);

    if (result.data.status === true) {
      return result.data.data;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async createservicedata(reqbody) {
    let result = await axios.post(`${baseurl}/create_service`, reqbody);

    if (result.data.status === true) {
      successtoast(result.data.msg);
      return true;
    } else {
      errortoast(result.data.msg);
      return false;
    }
  }

  async deleteservicedata(id) {
    let isconfirm = await DeleteAlert();
    let result = await axios.delete(`${baseurl}/delete_service/` + id);
    if (isconfirm) {
      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    }
  }

  async updateservicedata(id, reqbody) {
    try {
      let result = await axios.put(`${baseurl}/update_service/${id}`, reqbody);

      if (result.data.status === true) {
        successtoast(result.data.msg);
        return true;
      } else {
        errortoast(result.data.msg);
        return false;
      }
    } catch (error) {
      errortoast("Error updating team member");
      return false;
    }
  }
}

export  const {
  register,
  login,
  logout,
  createproduct,
  fileupload,
  getallproduct,
  deleteproduct,
  contact,
  getallteam,
  createteamdata,
  deleteteamdata,
  updatedata,
  getallblogdata,
  createblogdata,
  deleteblogdata,
  updateblogdata,
  getallservicedata,
  createservicedata,
  deleteservicedata,updateservicedata,
  getUserWithLocalStorage,
} = new apicall();