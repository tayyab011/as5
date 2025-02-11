import BlogModel from "../model/BlogModel.js";
/* let ObjectId = mongoose.Types.ObjectId; */
/* create */
export const blogcreateService = async (req) => {
  try {
    let reqbody = req.body;
    let data = await BlogModel.create(reqbody);

    return { status: true, data: data, msg: "Blog create successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

/* read */
export const getallblogService = async () => {
  try {
    /* team model theke sob data find korano */
    let data = await BlogModel.find();

    return { status: true, data: data, msg: "BlogModel data get successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

/* update */
export const updateblogService = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;
    await BlogModel.updateOne(
      { _id: id },
      {
        $set: reqBody,
      }
    );
    return { status: true, msg: "BlogModel data update successfully" };
  } catch (error) {
    return res.json({
      status: false,
      message: "user Updatetask failed",
    });
  }
};
export const deleteblogService = async (req, res) => {
  try {
    let id = req.params.id;

    await BlogModel.deleteOne({ _id: id });
    return { status: true, msg: "BlogModel data delete successfully" };
  } catch (error) {
    return res.json({
      status: false,
      message: "user delete failed",
    });
  }
};
