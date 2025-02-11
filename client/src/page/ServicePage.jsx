import { useState } from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
import { getallservicedata } from "../ApiRequest/Api";
import Loading from "../component/Loading";


const ServicePage = () => {
  let [loading, setloading] = useState(false);
    const [service,setservice]=useState([])
useState(()=>{

  (async()=>{
    setloading(true)
 let result = await getallservicedata();
 setservice(result)
 setloading(false)
  })()
},[])

    return (
      <MasterLayout>
        {!!loading == true ? <Loading /> : null}
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
              </div>
            ))}
          </div>
        </div>
      </MasterLayout>
    );
};

export default ServicePage;