import ServiceModel from "../model/ServiceModel.js";
/* let ObjectId = mongoose.Types.ObjectId; */
/* create */
export const createService = async (req) => {
  try {
    let reqbody = req.body;
    let data = await ServiceModel.create(reqbody);

    return { status: true, data: data, msg: "Service create successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

/* read */
export const getService = async () => {
  try {
    /* team model theke sob data find korano */
    let data = await ServiceModel.find();

    return { status: true, data: data, msg: "ServiceModel data get successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

/* update */
export const updateService = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;
    await ServiceModel.updateOne(
      { _id: id },
      {
        $set: reqBody,
      }
    );
    return { status: true, msg: "ServiceModel data update successfully" };
  } catch (error) {
    return res.json({
      status: false,
      message: "user Updatetask failed",
    });
  }
};
export const deleteService= async (req, res) => {
  try {
    let id = req.params.id;

    await ServiceModel.deleteOne({ _id: id });
    return { status: true, msg: "ServiceModel data delete successfully" };
  } catch (error) {
    return res.json({
      status: false,
      message: "user delete failed",
    });
  }
};
