import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { getallblogdata } from "../ApiRequest/Api";



const Blog = () => {
    let [loading, setloading] = useState(false);
 
const [blog ,setblog]=useState([])
          
          useEffect(()=>{
            
            (async () => {
              setloading(true);
              let result = await await getallblogdata();
              setblog(result);
              setloading(false);
            })();
          },[])
  return (
    <>
      {!!loading == true ? <Loading /> : null}
      <section className="container  text-gray-600 body-font mx-auto ">
        <div className=" grid grid-cols-3 flex-wrap   gap-9 ">
          {blog.slice(0, 6).map((data) => {
            return (
              <div key={data.id} className="flex  -mb-10 text-center gap-6">
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
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
