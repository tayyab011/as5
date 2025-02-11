import mongoose, { version } from "mongoose";

const DataSchema =mongoose.Schema(
{
name :{type:String },
email :{type:String ,unique: true ,required:true,lowercase:true},
message :{type:String ,required:true},


},

{
    timestamps:true,
    versionKey:false,
}
)

const UserModel =mongoose.model("contacts" , DataSchema)

export default UserModel