import { useEffect, useState } from "react";
import { getallteam } from "../ApiRequest/Api";
import Loading from "./Loading";


const Team = () => {
   /*  let baseurl = "http://localhost:5050/upload-file/"; */
     let [loading, setloading] = useState(false);
    const [team ,setteam]=useState([])
    
    useEffect(()=>{
(async()=>{
  setloading(true)
    let result = await getallteam();
     setteam(result);
     setloading(false)
})()
    },[])
    return (
      <div>
        {!!loading == true ? <Loading /> : null}
        <div className="mt-16 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">
            Meet the Team
          </h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Team;