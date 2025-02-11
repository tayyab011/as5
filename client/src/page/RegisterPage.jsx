import { Link, useNavigate} from "react-router-dom";

import { useRef, useState } from "react";
import {  errortoast, getbase64, IsEmpty } from "../helper/Helper";


import { register } from "../ApiRequest/Api";
import MasterLayout from "../MasterLayout/MasterLayout";




  const RegisterPage = () => {
    let nevigate =useNavigate()
  let {emailref, passwordref, fnameref, lnameref, phoneref} = useRef();
  let [ image, setimg]=useState(null)
/*   let [smessage,setsuccessmessage]=useState("")  row toster*/ 
    let getimg=async (file)=>{
    let result =await getbase64(file.target.files[0])
    setimg(result);

   }
  let submitdata = async () => {
    let email = emailref.value;
    let password = passwordref.value;
    let firstname = fnameref.value;
    let lastname = lnameref.value;
    let phone = phoneref.value;
    let img = image
    let reqbody ={ email, password, firstname, lastname, phone, img };

    if ( IsEmpty(email) ) {
      errortoast("please enter your email")
    }else if (IsEmpty(password)){
    errortoast("please enter your password");
    }else if (IsEmpty(firstname)) {
      errortoast("please enter your first name");
    }else if (IsEmpty(lastname)) {
      errortoast("please enter your last name");
    }else if (IsEmpty(phone)) {
      errortoast("please enter your phone number");
    }else if (img===null) {
      errortoast("please enter your image");
    }else{

    let result=   await register(reqbody);  
       if (result === true) {
         emailref.value ="";
         passwordref.value = "";
        fnameref.value = "";
          lnameref.value = "";
          phoneref.value = "";
        setimg(null)
        nevigate('/login')
       } 
     /* await registerone(reqbody);   */
   /*   await registerone("/register", reqbody);   */
    }
      
  };
    return (
      <MasterLayout>
       

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      email
                    </label>
                    <input
                      ref={(input) => (emailref = input)}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      password
                    </label>
                    <input
                      ref={(input) => (passwordref = input)}
                      type="text"
                      id="password"
                      name="password"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="firstname"
                      className="leading-7 text-sm text-gray-600"
                    >
                      firstname
                    </label>
                    <input
                      ref={(input) => (fnameref = input)}
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="lastname"
                      className="leading-7 text-sm text-gray-600"
                    >
                      lastname
                    </label>
                    <input
                      ref={(input) => (lnameref = input)}
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      phone
                    </label>
                    <input
                      ref={(input) => (phoneref = input)}
                      type="number"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="img"
                      className="leading-7 text-sm text-gray-600"
                    >
                      img
                    </label>
                    <input
                      onChange={getimg}
                      type="file"
                      id="img"
                      name="img"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    onClick={submitdata}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Button
                  </button>
                  <p className="text-center my-2">
                    <Link to="/login">have an account? login now</Link>
                  </p>
                 {/*  {smessage && (
                    <div className="p-2 w-full text-center">
                      <span className="text-green-500">
                        <div className="alert alert-success">
                          <span>Message sent successfully.</span>
                        </div>
                      </span>
                    </div>
                  )}  row toster*/}
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </MasterLayout>
    );
};

export default RegisterPage;