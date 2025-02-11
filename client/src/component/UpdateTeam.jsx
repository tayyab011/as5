import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MasterLayout from "../MasterLayout/MasterLayout";
import { getallteam, updatedata } from "../ApiRequest/Api";
import { errortoast, getbase64, IsEmpty } from "../helper/Helper";

const UpdateTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Using useRef instead of useState
  const nameRef = useRef(null);
  const serviceRef = useRef(null);
  const imageRef = useRef(null);
  const oldImageRef = useRef("");

  // Fetch existing team data
 useEffect(() => {
    
     (async()=>{
         try {
        let result =await  getallteam();
        let teamMember = result.find((member) => member._id === id);
        if (teamMember) {
          nameRef.current.value = teamMember.name;
          serviceRef.current.value = teamMember.service;
          oldImageRef.current = teamMember.img;
        } else {
          errortoast("Team member not found!");
        }
      } catch (error) {
        errortoast("Error fetching team data");
      }
    }
     )()
  
  }, [id])

  // Handle new image upload
  const handleImageUpload = async (file) => {
    let result = await getbase64(file.target.files[0]);
    oldImageRef.current = result; // Store new image as base64
  };

  // Handle form submission (update data)
  const handleUpdate = async () => {
    let updatedImg = oldImageRef.current;
    let name = nameRef.current.value;
    let service = serviceRef.current.value;

    if (IsEmpty(name)) {
      errortoast("Please enter your name");
      return;
    }
    if (IsEmpty(service)) {
      errortoast("Please enter your service");
      return;
    }

    let reqBody = { img: updatedImg, name, service };

    try {
      await updatedata(id, reqBody);
     
      navigate("/dashboard");
    } catch (error) {
      errortoast("Error updating team member");
    }
  };

  return (
    <MasterLayout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Update Team Member</h2>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/2 md:w-1/2 mx-auto w-2/3">
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Team Image:
                </label>
                <input
                  type="file"
                  ref={imageRef}
                  onChange={handleImageUpload}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
                {/* Show old image preview */}
                {oldImageRef.current && (
                  <img
                    src={oldImageRef.current}
                    alt="Current Team Member"
                    className="w-24 h-24 object-cover rounded-full mt-3"
                  />
                )}
              </div>
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Team Name:
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
              </div>
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Team Service:
                </label>
                <input
                  type="text"
                  ref={serviceRef}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                onClick={handleUpdate}
                className="flex mx-auto text-white bg-indigo-500 py-2 px-8 rounded text-lg"
              >
                Update Team Member
              </button>
            </div>
          </div>
        </section>
      </div>
    </MasterLayout>
  );
};

export default UpdateTeam;
