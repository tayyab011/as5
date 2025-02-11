import { useState } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
import { errortoast, IsEmpty, isValidEmail } from "../helper/Helper";
import { contact } from "../ApiRequest/Api";


const Contact = () => {
   let [data, setdata] = useState({ name: "", email: "", message: "" });

let  submitdata = async()=>{
    if (IsEmpty(data.name)) {
      errortoast("please enter your name");
    } else if (IsEmpty(data.email)) {
      errortoast("please enter your email");
    } /* else if (!isValidEmail(data.email)) {
      errortoast("pls enter valid email");
    } */ else if (IsEmpty(data.message)) {
      errortoast("please enter your message");
    } else {
      /*   setloading(true) */
      await contact(data);
    }

}

    return (
      <MasterLayout>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-200">
                Contact me
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      onChange={(e) =>
                        setdata({ ...data, name: e.target.value })
                      }
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
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
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      onChange={(e) =>
                        setdata({ ...data, message: e.target.value })
                      }
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    onClick={submitdata}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    );
};

export default Contact;