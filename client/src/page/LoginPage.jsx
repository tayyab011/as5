import { Link, useNavigate } from "react-router-dom";

import MasterLayout from "../MasterLayout/MasterLayout";
import { useState } from "react";
import { login } from "../ApiRequest/Api";
import { errortoast, IsEmpty } from "../helper/Helper";
import Loading from "../component/Loading";


const LoginPage = () => {
  let [loading,setloading]=useState(false)
  let navigate =useNavigate()
  let [data,setdata]=useState({email:"",password:""})


let  submitdata = async()=>{
    if ( IsEmpty(data.email) ) {
        errortoast("please enter your email")
      }else if (IsEmpty(data.password)){
      errortoast("please enter your password");
}else{
  setloading(true)
  let result = await login(data);
if (result) {

  navigate('/')
  setloading(false)
/*  setTimeout(()=>{
  window.location.href = "/"; step-1 page redirect korar 
 },2000) */
}else{
  setloading(false);
}
}

}
  return (
    <MasterLayout>
     {!!loading ==true ? <Loading/> :null}
      <section className="text-gray-600 body-font relative z-10">
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
                    onChange={(e) =>
                      setdata({ ...data, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setdata({ ...data, password: e.target.value })
                    }
                    type="text"
                    id="password"
                    name="password"
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
                <p className="text-center mx-auto my-4">
                  <Link to="/register">have not account? register now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MasterLayout>
  );
};

export default LoginPage;