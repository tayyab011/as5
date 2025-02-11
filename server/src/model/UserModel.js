import mongoose, { version } from "mongoose";

const DataSchema =mongoose.Schema(
{
email :{type:String ,unique: true ,required:true,lowercase:true},
password :{type:String ,required:true},
firstname :{type:String },
lastname :{type:String },
phone :{type:String },
img :{type:String },
},

{
    timestamps:true,
    versionKey:false,
}
)

const UserModel =mongoose.model("users" , DataSchema)

export default UserModel