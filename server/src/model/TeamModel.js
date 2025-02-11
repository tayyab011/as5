import mongoose, { version } from "mongoose";

const DataSchema =mongoose.Schema(
{
img :{type:String },
name :{type:String },
service :{type:String }


},

{
    timestamps:true,
    versionKey:false,
}
)

const UserModel =mongoose.model("teams" , DataSchema)

export default UserModel