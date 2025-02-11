import { useEffect, useRef, useState } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
 
  createteamdata,
  getallteam,
  deleteteamdata,
  createblogdata,
  getallblogdata,
  deleteblogdata,
  createservicedata,
  getallservicedata,
  deleteservicedata,

} from "../ApiRequest/Api";
import { errortoast, getbase64, IsEmpty } from "../helper/Helper";
import Loading from "./Loading";

const Dashboard = () => {
      let [loading, setloading] = useState(false);
  /* team service */
  let { nameref, serviceRef } = useRef();
  let [image, setimg] = useState(null);
  let getimg = async (file) => {
    let result = await getbase64(file.target.files[0]);
    setimg(result);
  };
  let submitteamdata = async () => {
    let img = image;
    let name = nameref.value;
    let service = serviceRef.value;

    let reqbody = { img, name, service };

    if (img === null) {
      errortoast("please upload img");
    } else if (IsEmpty(name)) {
      errortoast("please enter your name");
    } else if (IsEmpty(service)) {
      errortoast("please enter your service");
    } else {
      await createteamdata(reqbody);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  /* read all teammember */
  const [team, setteam] = useState([]);

  useEffect(() => {
    (async () => {
      setloading(true)
      let result = await getallteam();
      setteam(result);
      setloading(false);
    })();
  }, []);
  /*  delete teammember */
  let deletetealldata = async (id) => {
    let result = await deleteteamdata(id);
    if (result) {
      let result = await getallteam();
      setteam(result);
    }
  };
  /*  update teammember */
  let updatealldata = async (id) => {
    window.location.href = `/update-team/${id}`;
  };
  /* team service  end*/

  /* blog service start*/
  let { titleref, desRef } = useRef();
  let [blogimg, setblogimg] = useState(null);
  let getblogimg = async (file) => {
    let result = await getbase64(file.target.files[0]);
    setblogimg(result);
  };
  let submitblogdata = async () => {
    let img = blogimg;
    let title = titleref.value;
    let des = desRef.value;

    let reqbody = { img, title, des };

    if (img === null) {
      errortoast("please upload img");
    } else if (IsEmpty(title)) {
      errortoast("please enter your title");
    } else if (IsEmpty(des)) {
      errortoast("please enter your des");
    } else {
      await createblogdata(reqbody);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  /* read all blogmember */

  const [blog, setblog] = useState([]);

  useEffect(() => {
    (async () => {
      /*  setloading(true); */
      let result = await getallblogdata();
      setblog(result);
      /*     setloading(false); */
    })();
  }, []);
  /*delete teammember */
  let deleteteallblogdata = async (id) => {
    let result = await deleteblogdata(id);
    if (result) {
      let result = await getallblogdata();
      setblog(result);
    }
  };
  /*  update teammember */
  let updateblogsdata = async (id) => {
    window.location.href = `/update-blog/${id}`;
  };
  /* blog service  end*/

  /* service service start*/
  let { servicetitleRef, servicedesRef } = useRef();
  let [serviceimg, setserviceimg] = useState(null);
  let getServiceimg = async (file) => {
    let result = await getbase64(file.target.files[0]);
    setserviceimg(result);
  };
  let submitservicedata = async () => {
    let img = serviceimg;
    let title = servicetitleRef.value;
    let des = servicedesRef.value;

    let reqbody = { img, title, des };

    if (img === null) {
      errortoast("please upload img");
    } else if (IsEmpty(title)) {
      errortoast("please enter your title");
    } else if (IsEmpty(des)) {
      errortoast("please enter your des");
    } else {
      await createservicedata(reqbody);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  /* read all servicemember */

  const [service, setservice] = useState([]);
  useState(() => {
    (async () => {
      let result = await getallservicedata();
      setservice(result);
    })();
  }, []);
  /*delete teammember */
  let deleteteservice_data = async (id) => {
    let result = await deleteservicedata(id);
    if (result) {
      let result = await getallservicedata();
      setservice(result);
    }
  };
  /*  update teammember */
    let updateservice_data = async (id) => {
    window.location.href = `/update-service/${id}`;
  }; 
  /* service service  end*/

  return (
    <MasterLayout>
      <div className="container mx-auto">
        <Tabs>
          <TabList>
            <Tab>Add Team section</Tab>
            <Tab>Add blog section</Tab>
            <Tab>Add service section</Tab>
          </TabList>
          {/* //add team */}
          <TabPanel>
            <h2>Add new team</h2>
            <section className="text-gray-600 body-font relative">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-1/2 md:w-1/2 mx-auto w-2/3">
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      Team image:
                    </label>
                    <input
                      onChange={getimg}
                      type="file"
                      id="img"
                      name="img"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      team name:
                    </label>
                    <input
                      ref={(input) => (nameref = input)}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      team service:
                    </label>
                    <input
                      ref={(input) => (serviceRef = input)}
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    onClick={submitteamdata}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </section>

            {!!loading == true ? <Loading /> : null}
            <h2>see all team members</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-gray-600">{member.service}</p>
                  <div className="flex justify-evenly mt-5">
                    <button
                      onClick={() => updatealldata(member._id)}
                      className="btn bg-green-600 hover:bg-green-200 text-base "
                    >
                      update
                    </button>
                    <button
                      onClick={() => deletetealldata(member._id)}
                      className="btn bg-red-600 hover:bg-red-200 text-base "
                    >
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2>Add new blog</h2>
            <section className="text-gray-600 body-font relative">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-1/2 md:w-1/2 mx-auto w-2/3">
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      Blog image:
                    </label>
                    <input
                      onChange={getblogimg}
                      type="file"
                      id="img"
                      name="img"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      blog title:
                    </label>
                    <input
                      ref={(input) => (titleref = input)}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      Blog Des:
                    </label>
                    <input
                      ref={(input) => (desRef = input)}
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    onClick={submitblogdata}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Add Blog
                  </button>
                </div>
              </div>
            </section>

            <h2>see all blog members</h2>
            <section className="container  text-gray-600 body-font mx-auto ">
              <div className=" grid grid-cols-3 flex-wrap   gap-9 ">
                {blog.slice(0, 6).map((data, index) => {
                  return (
                    <div
                      key={data.id}
                      className="flex  -mb-10 text-center gap-6"
                    >
                      <div className=" mb-10 border border-red-800  ">
                        <div className="rounded-lg h-64 overflow-hidden  ">
                          <img
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src={data.img}
                            alt="404 img"
                          />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-200 mt-6 mb-3">
                          {data.title}
                        </h2>
                        <p className="leading-relaxed text-base text-gray-200">
                          {data.des}
                        </p>
                        <div className="flex justify-evenly mt-5">
                          <button
                            onClick={() => updateblogsdata(data._id)}
                            className="btn bg-green-600 hover:bg-green-200 text-base "
                          >
                            update
                          </button>
                          <button
                            onClick={() => deleteteallblogdata(data._id)}
                            className="btn bg-red-600 hover:bg-red-200 text-base "
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </TabPanel>

          {/*    service section */}
          <TabPanel>
            <h2>Add new service</h2>
            <section className="text-gray-600 body-font relative">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-1/2 md:w-1/2 mx-auto w-2/3">
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      service image:
                    </label>
                    <input
                      onChange={getServiceimg}
                      type="file"
                      id="img"
                      name="img"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      service title:
                    </label>
                    <input
                      ref={(input) => (servicetitleRef = input)}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-wrap ">
                    <label
                      for="name"
                      className="leading-7 text-sm text-white  font-bold"
                    >
                      service Des:
                    </label>
                    <input
                      ref={(input) => (servicedesRef = input)}
                      type="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    onClick={submitservicedata}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Add service
                  </button>
                </div>
              </div>
            </section>

            <h2>see all service members</h2>
            <div className="mt-16 max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.map((ser, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                  >
                    <div className="text-4xl mb-4">
                      <img src={ser.img} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {ser.title}
                    </h4>
                    <p className="text-gray-600">{ser.des}</p>

                    <div className="flex justify-evenly mt-5">
                      <button
                        onClick={() => updateservice_data(ser._id)}
                        className="btn bg-green-600 hover:bg-green-200 text-base "
                      >
                        update
                      </button>
                      <button
                        onClick={() => deleteteservice_data(ser._id)}
                        className="btn bg-red-600 hover:bg-red-200 text-base "
                      >
                        delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </MasterLayout>
  );
};

export default Dashboard;