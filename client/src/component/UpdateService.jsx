import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getallservicedata, updateservicedata } from "../ApiRequest/Api";
import { errortoast, getbase64, IsEmpty } from "../helper/Helper";
import MasterLayout from "../MasterLayout/MasterLayout";

const UpdateService = () => {
  const { id } = useParams(); // Get service ID from URL
  const navigate = useNavigate();

  // Using useRef for form data
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const oldImageRef = useRef("");

  // Fetch existing service data
  useEffect(() => {
    (async () => {
      try {
        const data = await getallservicedata(id);
        if (data) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.des;
          oldImageRef.current = data.img;
        }
      } catch (error) {
        errortoast("Failed to load service data.");
      }
    })();
  }, [id]);

  // Handle new image upload
  const handleImageUpload = async (file) => {
    let result = await getbase64(file.target.files[0]);
    oldImageRef.current = result; // Store new image as base64
  };

  // Submit updated data
  const submitUpdatedServiceData = async () => {
    let img = oldImageRef.current;
    let title = titleRef.current.value;
    let des = descriptionRef.current.value;

    if (IsEmpty(title)) {
      errortoast("Please enter a service title.");
      return;
    }
    if (IsEmpty(des)) {
      errortoast("Please enter a service description.");
      return;
    }

    let reqbody = { img, title, des };

    try {
      await updateservicedata(id, reqbody);
      navigate("/dashboard");
    } catch (error) {
      errortoast("Error updating service.");
    }
  };

  return (
    <MasterLayout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Update Service</h2>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/2 md:w-1/2 mx-auto w-2/3">
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Service Image:
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
                    alt="Current Service"
                    className="w-24 h-24 object-cover rounded-md mt-3"
                  />
                )}
              </div>

              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Service Title:
                </label>
                <input
                  type="text"
                  ref={titleRef}
                  value={titleRef.value}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
              </div>

              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Service Description:
                </label>
                <input
                  type="text"
                  ref={descriptionRef}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                onClick={submitUpdatedServiceData}
                className="flex mx-auto text-white bg-indigo-500 py-2 px-8 rounded text-lg"
              >
                Update Service
              </button>
            </div>
          </div>
        </section>
      </div>
    </MasterLayout>
  );
};

export default UpdateService;
