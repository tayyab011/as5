import TeamModel from "../model/TeamModel.js";
/* let ObjectId = mongoose.Types.ObjectId; */
/* create */
export const teamService= async (req) => {
  try {
    let reqbody = req.body;
    let data = await TeamModel.create(reqbody);

    return { status: true, data: data, msg: "team create successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};


/* read */
export const getallteamService = async () => {
  try {
    /* team model theke sob data find korano */
    let data = await TeamModel.find();

    return { status: true, data: data, msg: "team data get successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};

/* update */
export const updateTeamService = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;
  await TeamModel.updateOne(
    { _id: id },
    {
      $set: reqBody
    }
  );
     return { status: true,  msg: "team data update successfully" };
  } catch (error) {
    return res.json({
      status: false,
      message: "user Updatetask failed",
    });
  }
};
export const deleteTeamService = async (req, res) => {
  try {
    let id = req.params.id;
 
  await TeamModel.deleteOne({ _id: id }
    
  );
     return { status: true,  msg: "team data delete successfully" };
  } catch (error) {
    return res.json({
      status: false,
      message: "user delete failed",
    });
  }
};