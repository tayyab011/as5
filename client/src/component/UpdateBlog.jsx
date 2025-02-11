import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MasterLayout from "../MasterLayout/MasterLayout";
import { getallblogdata, updateblogdata } from "../ApiRequest/Api";
import { errortoast, getbase64, IsEmpty } from "../helper/Helper";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Using useRef for input fields
  const titleRef = useRef(null);
  const desRef = useRef(null);
  const imageRef = useRef(null);
  const oldImageRef = useRef(""); // Store old image URL

  // Fetch existing blog data
  useEffect(() => {
    (async () => {
      try {
        let result = await getallblogdata();
        let blogPost = result.find((post) => post._id === id);
        if (blogPost) {
          titleRef.current.value = blogPost.title;
          desRef.current.value = blogPost.des;
          oldImageRef.current = blogPost.img;
        } else {
          errortoast("Blog post not found!");
        }
      } catch (error) {
        errortoast("Error fetching blog data");
      }
    })();
  }, [id]);

  // Handle new image upload
  const handleImageUpload = async (file) => {
    let result = await getbase64(file.target.files[0]);
    oldImageRef.current = result; // Store new image as base64
  };

  // Handle form submission (update blog data)
  const handleUpdate = async () => {
    let updatedImg = oldImageRef.current;
    let title = titleRef.current.value;
    let des = desRef.current.value;

    if (IsEmpty(title)) {
      errortoast("Please enter the blog title");
      return;
    }
    if (IsEmpty(des)) {
      errortoast("Please enter the blog description");
      return;
    }

    let reqBody = { img: updatedImg, title, des };

    try {
      let result = await updateblogdata(id, reqBody);
      if (result) {
        navigate("/dashboard");
      }
    } catch (error) {
      errortoast("Error updating blog post");
    }
  };

  return (
    <MasterLayout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Update Blog Post</h2>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/2 md:w-1/2 mx-auto w-2/3">
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Blog Image:
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
                    alt="Current Blog Post"
                    className="w-24 h-24 object-cover rounded-full mt-3"
                  />
                )}
              </div>
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Blog Title:
                </label>
                <input
                  type="text"
                  ref={titleRef}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
              </div>
              <div className="flex flex-wrap">
                <label className="leading-7 text-sm text-white font-bold">
                  Blog Description:
                </label>
                <input
                  type="text"
                  ref={desRef}
                  className="w-full bg-gray-100 rounded border border-gray-300 py-1 px-3"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                onClick={handleUpdate}
                className="flex mx-auto text-white bg-indigo-500 py-2 px-8 rounded text-lg"
              >
                Update Blog Post
              </button>
            </div>
          </div>
        </section>
      </div>
    </MasterLayout>
  );
};

export default UpdateBlog;
